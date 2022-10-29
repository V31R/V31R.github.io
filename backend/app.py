import logging
import aiohttp
import re
from io import StringIO
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
from aiohttp import web
import aiohttp_cors

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
    # reader = await request.multipart()
    # p = await request.post()
    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}, {re.match(pattern, field.name, re.M)}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415)
        token = (await field.read()).decode()
        csvStringIO = StringIO(str(token))
        corr_matrix = await get_corr_matrix(csvStringIO, field.name)
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10,10))  # create figure & 1 axis
        sbn.heatmap(corr_matrix, annot=True, axes=ax)
        image_name=f"images/{field.name[:field.name.find('.csv')]}_to.png"
        fig.savefig(image_name)  # save the figure to file
        plt.close(fig)
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}')
        resp = web.FileResponse(image_name)
        return resp
        #return web.Response(text=part.filename, content_type='application/json')
    logging.getLogger('aiohttp.server').debug('Have not file')
    resp = web.FileResponse(f'im_server/pil_{key}.jpg')
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
