import logging
import os
from aiohttp import web
import  matplotlib.pyplot as plt

image_base_path = f"{os.environ.get('BASE_PATH')}/images/"
temp_image_base_path = f"{os.environ.get('BASE_PATH')}/temp_images/"

from auth import anonymous_user

async def handleImageGet(request):
    image_name = request.match_info.get('image_name', 'error')
    user = request.rel_url.query.get('user', anonymous_user)
    logging.getLogger('aiohttp.server').info(f'Response by {user}')
    if user == anonymous_user:
        if not (image_name in os.listdir(temp_image_base_path)):
            return web.Response(status=400)
        response = web.FileResponse(temp_image_base_path + image_name)
    else:
        if not (image_name in os.listdir(image_base_path)):
            return web.Response(status=400)
        response = web.FileResponse(image_base_path + image_name)
    return response

def save_figure_image(task_name: str, csv_file_name: str, user:str, fig):
    path = temp_image_base_path
    if user != anonymous_user:
        path = image_base_path
    image_name = f"{csv_file_name[:csv_file_name.find('.csv')]}_{task_name}.png"
    fig.savefig(path + image_name)
    plt.close(fig)
    return image_name