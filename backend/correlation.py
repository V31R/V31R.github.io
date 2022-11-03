import logging
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sbn
from matplotlib.colors import LinearSegmentedColormap
import json
from aiohttp import web, BodyPartReader

from HandlesTemplate import HandlesTemplate
from images import image_base_path
from utils import get_corr_matrix

colors = ["#eae3f1", "#8f39eb"]
cmap_name = 'purples_haze'
purples_haze_cmap = LinearSegmentedColormap.from_list(cmap_name, colors)


class HandleCorrelation(HandlesTemplate):

    def __init__(self):
        super().__init__()
        self.colormap = purples_haze_cmap

    async def check_parameters(self, request: web.Request) -> tuple:
        self.colormap = purples_haze_cmap
        if request.rel_url.query.get('colormap') and request.rel_url.query.get('colormap') != '':
            try:
                test_fig, test_ax = plt.subplots(figsize=(1, 1))
                sbn.heatmap(data=[[1]], annot=True, axes=test_ax, cmap=request.rel_url.query.get('colormap'))
                plt.close(test_fig)
            except Exception as e:
                logging.getLogger('aiohttp.server').error(e)
                return False, web.Response(status=400,
                                           text=f"'{request.rel_url.query.get('colormap')}' недопустимый colormap")
            self.colormap = request.rel_url.query.get('colormap')
        return True, None

    async def work_with_df(self, request: web.Request, field: BodyPartReader) -> web.Response:
        corr_matrix: pd.DataFrame = await get_corr_matrix(self.df)
        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))
        sbn.heatmap(corr_matrix, annot=True, axes=ax, cmap=self.colormap)
        image_name = f"{field.name[:field.name.find('.csv')]}_correlation.png"
        fig.savefig(image_base_path + image_name)
        plt.close(fig)
        response: dict = dict()
        response['image_name'] = image_name
        response['names'] = corr_matrix.columns
        response['values'] = []
        for i in range(0, len(corr_matrix)):
            for n in response['names']:
                response['values'].append(corr_matrix[n][i])
        return web.json_response(text=json.dumps(response))


post_correlation_handler = HandleCorrelation()
