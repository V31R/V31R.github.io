import logging
import re
from io import StringIO
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
import json

from aiohttp import web
from utils import  save_df_from_io

async def handleClusterizationPost(request):
    if request.headers.get('Content-type').find("multipart") == -1:
        return web.Response(status=400, text='Недопустимый Content-type')

    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').debug(f'File: {field.name}, {re.match(pattern, field.name, re.M)}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415, text=f"Недопустимый формат файла")
        token = (await field.read()).decode()
        csvStringIO = StringIO(str(token))
        df=save_df_from_io(csvStringIO, field.name)
        image_name = f"{field.name[:field.name.find('.csv')]}_clusterization.png"
        response: dict = dict()
        response['image_name'] = image_name
        return web.json_response(text=json.dumps(response))
        # return web.Response(text=part.filename, content_type='application/json')
    logging.getLogger('aiohttp.server').debug('Have not file')
    return web.Response()