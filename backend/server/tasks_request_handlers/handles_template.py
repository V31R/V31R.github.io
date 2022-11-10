import logging
import re
import pandas as pd
from aiohttp import web, BodyPartReader

from utils import get_df_from_io

from auth import anonymous_user

from auth import check_user


class HandlesTemplate:

    def __init__(self, task_name: str):
        self.df: pd.DataFrame = None
        self.user: str = anonymous_user
        self.task_name: str = task_name
        self.data_filename: str = ''

    async def __call__(self, request: web.Request) -> web.Response:
        if request.headers.get('Content-type').find("multipart") == -1:
            return web.Response(status=400, text='Недопустимый Content-type')
        self.user = check_user(request.rel_url.query.get('user', anonymous_user))

        is_checked, response = await self.check_parameters(request)

        if not is_checked:
            return response
        logging.getLogger('aiohttp.server').info(f"Response by '{self.user}'")
        pattern = r".*\.csv$"
        async for field in (await request.multipart()):
            logging.getLogger('aiohttp.server').info(f'Get file - {field.name}')
            if re.match(pattern, field.name, re.M) is None:
                return web.Response(status=415, text=f"Недопустимый формат файла")
            data: bytearray = await field.read()
            filename: str = f"{self.task_name}_{field.name}"
            self.df, self.data_filename = await get_df_from_io(data, filename, self.user)

            return await self.work_with_df(request, field)

    async def check_parameters(self, request: web.Request) -> tuple:
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        return web.Response(status=405)
