import logging
import re
from sklearn.cluster import KMeans
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sbn
import json

from aiohttp import web
from utils import get_df_from_io, get_corr_matrix
from images import image_base_path


async def handle_clusterization_post(request):
    if request.headers.get('Content-type').find("multipart") == -1:
        return web.Response(status=400, text='Недопустимый Content-type')
    if request.rel_url.query.get('clusters_num') is None:
        return web.Response(status=400, text='Не задано количество кластеров')
    clusters_num: int = int(request.rel_url.query.get('clusters_num'))
    is_draw_clusters_centers: bool = False
    if request.rel_url.query.get('clusters_centers') is not None:
        is_draw_clusters_centers = request.rel_url.query.get('clusters_centers').lower() in ['true']
        logging.getLogger('aiohttp.server').debug(f"is clusters value: {request.rel_url.query.get('clusters_centers')} {is_draw_clusters_centers} {request.rel_url.query.get('clusters_centers').lower() in ['true']}")
    pattern = r".*\.csv$"
    async for field in (await request.multipart()):
        logging.getLogger('aiohttp.server').info(f'File: {field.name}')
        if re.match(pattern, field.name, re.M) is None:
            return web.Response(status=415, text=f"Недопустимый формат файла")
        data: bytearray = await field.read()
        df: pd.DataFrame = await get_df_from_io(data, field.name)
        df: pd.DataFrame = df.select_dtypes(include=np.number)
        if len([n for n in df]) <= 1:
            return web.Response(status=415, text=f"Недостаточно переменных для кластеризации")
        clusters = KMeans(n_clusters=clusters_num, init='random', n_init=10, max_iter=10)
        clusters.fit_predict(df)
        logging.getLogger('aiohttp.server').debug(f'Clusters: {clusters.cluster_centers_} {clusters.labels_}')
        corr_matrix = await get_corr_matrix(df)
        headers: list = [n for n in corr_matrix]
        i_max: int = 0
        header_max: int = 1
        for header in range(len(headers)):
            i = header + 1
            while i < len(corr_matrix):
                if corr_matrix[headers[header]][i] > corr_matrix[headers[header_max]][i_max]:
                    header_max = header
                    i_max = i
                i += 1
        logging.getLogger('aiohttp.server').info(f'The most correlated columns: {headers[header_max]} and {headers[i_max]}')
        df['clusters'] = clusters.labels_

        image_name = f"{field.name[:field.name.find('.csv')]}_clusterization.png"

        fig, ax = plt.subplots(nrows=1, ncols=1, figsize=(10, 10))  # create figure & 1 axis
        sbn.scatterplot(x=headers[header_max], y=headers[i_max], hue='clusters', ax=ax,
                        palette=sbn.color_palette("hls", clusters_num), data=df, legend="full")

        if is_draw_clusters_centers:
            logging.getLogger('aiohttp.server').info(f'Draw clusters centers')
            centers_df = pd.DataFrame()
            for i in range(len(headers)):
                centers_df[headers[i]] = [value[i] for value in clusters.cluster_centers_]
            centers_df['clusters'] = [n for n in range(clusters_num)]
            sbn.scatterplot(x=headers[header_max], y=headers[i_max], hue='clusters', ax=ax, marker="X", s=150,
                            palette=sbn.color_palette("hls", clusters_num), data=centers_df, legend=False)
        fig.savefig(image_base_path + image_name)  # save the figure to file
        plt.close(fig)

        response: dict = dict()
        response['image_name'] = image_name
        response['clusters_centers'] = clusters.cluster_centers_.tolist()
        response['clusters_labels'] = clusters.labels_.tolist()
        return web.json_response(text=json.dumps(response))
    logging.getLogger('aiohttp.server').info('Have not file')
    return web.Response()
