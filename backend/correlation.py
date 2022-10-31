import logging
import re
from io import StringIO
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
from matplotlib.colors import LinearSegmentedColormap
import json

from aiohttp import web
from save_image import image_base_path
from utils import save_df_from_io


colors = ["#eae3f1", "#8f39eb"]
cmap_name = 'purples_haze'
purples_haze_cmap = LinearSegmentedColormap.from_list(cmap_name, colors)


async def handle(request):
    name = request.rel_url.query['name']
    text = '{ "text":' + f'"Hello, {name}"' + '}'
    for h in request.config_dict:
        print(h)
    return web.Response(text=text, content_type='application/json')


async def get_corr_matrix(csvStringIO: StringIO, filename: str):
    df: pd.DataFrame = await save_df_from_io(csvStringIO, filename)
    logging.getLogger('aiohttp.server').debug(f'{df}')
    corr_matrix = df.corr(numeric_only=True)
    logging.getLogger('aiohttp.server').debug(f'{corr_matrix}')
    return corr_matrix

async def handleCorrelationPost(request):
    if request.headers.get('Content-type').find("multipart") == -1:
        return web.Response(status=400, text='Недопустимый Content-type')
    colormap = purples_haze_cmap
    if request.rel_url.query.get('colormap') and request.rel_url.query.get('colormap') != '':
        try:
            test_fig, test_ax = plt.subplots(figsize=(1, 1))
            sbn.heatmap(data=[[1]], annot=True, axes=test_ax, cmap=request.rel_url.query.get('colormap'))
            plt.close(test_fig)
        except Exception as e:
            logging.getLogger('aiohttp.server').error(e)
            return web.Response(status=400, text=f"'{request.rel_url.query.get('colormap')}' недопустимый colormap")
        colormap = request.rel_url.query.get('colormap')

    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}, {re.match(pattern, field.name, re.M)}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415, text=f"Недопустимый формат файла")
        token = (await field.read()).decode()
        csvStringIO = StringIO(str(token))
        corr_matrix = await get_corr_matrix(csvStringIO, field.name)
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))  # create figure & 1 axis
        sbn.heatmap(corr_matrix, annot=True, axes=ax, cmap=colormap)
        image_name = f"{field.name[:field.name.find('.csv')]}_correlation.png"
        fig.savefig(image_base_path + image_name)  # save the figure to file
        plt.close(fig)
        response: dict = dict()
        response['image_name'] = image_name
        response['names'] = [n for n in corr_matrix]
        response['values'] = []
        for i in range(0, len(corr_matrix)):
            for n in response['names']:
                response['values'].append(corr_matrix[n][i])
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}')
        # resp = web.FileResponse(image_name)

        return web.json_response(text=json.dumps(response))
        # return web.Response(text=part.filename, content_type='application/json')
    logging.getLogger('aiohttp.server').debug('Have not file')
    return web.Response()
