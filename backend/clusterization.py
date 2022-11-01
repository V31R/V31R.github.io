import logging
import re
from io import StringIO
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
import json

from aiohttp import web
from utils import  get_df_from_io

async def handle_clusterization_post(request):
    if request.headers.get('Content-type').find("multipart") == -1:
        return web.Response(status=400, text='Недопустимый Content-type')

    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').info(f'File: {field.name}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415, text=f"Недопустимый формат файла")
        data: bytearray = await field.read()
        df: pd.DataFrame = await get_df_from_io(data, field.name)
        image_name = f"{field.name[:field.name.find('.csv')]}_clusterization.png"
        response: dict = dict()
        response['image_name'] = image_name
        return web.json_response(text=json.dumps(response))
        # return web.Response(text=part.filename, content_type='application/json')
    logging.getLogger('aiohttp.server').debug('Have not file')
    return web.Response()