import pandas as pd
from aiohttp import web, BodyPartReader
from .handles_template import HandlesTemplate
from utils import csv_base_path, temp_csv_base_path

from auth import anonymous_user


class HandlePreprocessing(HandlesTemplate):

    def __init__(self):
        super().__init__('preprocessing')

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        df: pd.DataFrame = self.df

        df = df.dropna(axis=0)
        df = pd.get_dummies(df)
        filename = f'{self.task_name}_' + field.name
        path = temp_csv_base_path
        if self.user != anonymous_user:
            path = csv_base_path
        df.to_csv(path + filename, index=False, encoding='utf-8')
        file = open(path + filename, encoding='utf-8')
        repsonse = web.Response(body=file.read())
        return repsonse

