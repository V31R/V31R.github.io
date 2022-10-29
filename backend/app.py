import logging

import re
from io import StringIO
import pandas as pd
import matplotlib as mpl
import matplotlib.pyplot as plt
import seaborn as sbn
from matplotlib.colors import LinearSegmentedColormap


from aiohttp import web
import aiohttp_cors

colors = ["#eae3f1", "#8f39eb"]
cmap_name='purples_haze'
purples_haze_cmap = LinearSegmentedColormap.from_list(cmap_name, colors)

async def handle(request):
    name = request.rel_url.query['name']
    text = '{ "text":'+f'"Hello, {name}"'+'}'
    for h in request.config_dict:
        print(h)
    return web.Response(text=text, content_type='application/json')
# ,headers={"Access-Control-Allow-Origin": "*"}

async def get_corr_matrix(csvStringIO: StringIO, filename:str):
    logging.getLogger('aiohttp.server').debug(f'{csvStringIO}')
    file = open(filename, 'w')
    file.writelines(csvStringIO)
    file.close()
    df: pd.DataFrame = pd.read_csv(filename, sep=",", encoding='windows-1251')
    headers = [n for n in df]
    logging.getLogger('aiohttp.server').debug(f'{df}')
    for header in headers:
        logging.getLogger('aiohttp.server').debug(f'{df[header]}')
    corr_matrix = df.corr(numeric_only=True)
    logging.getLogger('aiohttp.server').debug(f'{corr_matrix}')
    return corr_matrix

async def handleCorrelationPost(request):
    if(request.headers.get('Content-type').find("multipart")==-1):
        return  web.Response(status = 400)
    colormap=purples_haze_cmap
    if request.rel_url.query.get('colormap'):
        try:
            test_fig, test_ax = plt.subplots(figsize=(1, 1))
            sbn.heatmap(data=[[1]], annot=True, axes=test_ax, cmap=request.rel_url.query.get('colormap'))
            plt.close(test_fig)
        except Exception as e:
            logging.getLogger('aiohttp.server').error(e)
            return web.Response(status=400)
        colormap=request.rel_url.query.get('colormap')

    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}, {re.match(pattern, field.name, re.M)}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415)
        token = (await field.read()).decode()
        csvStringIO = StringIO(str(token))
        corr_matrix = await get_corr_matrix(csvStringIO, field.name)
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10,10))  # create figure & 1 axis
        sbn.heatmap(corr_matrix, annot=True, axes=ax,cmap=colormap)
        image_name=f"images/{field.name[:field.name.find('.csv')]}_to.png"
        fig.savefig(image_name)  # save the figure to file
        plt.close(fig)
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}')
        resp = web.FileResponse(image_name)
        return resp
        #return web.Response(text=part.filename, content_type='application/json')
    logging.getLogger('aiohttp.server').debug('Have not file')
    return web.Response()



logging.basicConfig(level=logging.DEBUG)
app = web.Application()

app.add_routes([web.get('/', handle), web.post('/correlation', handleCorrelationPost)])

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*"
    )
})

for route in list(app.router.routes()):
    cors.add(route)
