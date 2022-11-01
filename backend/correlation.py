import logging
import re
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
from matplotlib.colors import LinearSegmentedColormap
import json

from aiohttp import web
from images import image_base_path
from utils import get_df_from_io, get_corr_matrix


colors = ["#eae3f1", "#8f39eb"]
cmap_name = 'purples_haze'
purples_haze_cmap = LinearSegmentedColormap.from_list(cmap_name, colors)

async def handle_correlation_post(request):
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
        logging.getLogger('aiohttp.server').info(f'File: {field.name}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415, text=f"Недопустимый формат файла")
        data: bytearray = await field.read()
        df: pd.DataFrame = await get_df_from_io(data, field.name)
        corr_matrix: pd.DataFrame = await get_corr_matrix(df)
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
        return web.json_response(text=json.dumps(response))

    logging.getLogger('aiohttp.server').debug('Have not file')
    return web.Response()
