from app import app
from aiohttp import web
from os import environ
import os
import shutil

if __name__ == '__main__':
    base_path = environ.get('BASE_PATH')
    listdir: list = os.listdir(environ.get('BASE_PATH'))
    if 'images' not in listdir:
        os.mkdir(base_path+'/images')
    if 'csv' not in listdir:
        os.mkdir(base_path+'/csv')
    if 'temp_csv' not in listdir:
        os.mkdir(base_path+'/temp_csv')
    if 'temp_images' not in listdir:
        os.mkdir(base_path+'/temp_images')
    web.run_app(app, port=environ.get('SERVER_PORT'))
    shutil.rmtree(base_path + '/temp_images', ignore_errors=True)
    shutil.rmtree(base_path + '/temp_csv', ignore_errors=True)
