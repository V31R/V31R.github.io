from app import app
from aiohttp import web
from os import environ
import os

if __name__ == '__main__':
    base_path = environ.get('BASE_PATH')
    if 'images' not in os.listdir(environ.get('BASE_PATH')):
        os.mkdir(base_path+'/images')
    if 'csv' not in os.listdir(environ.get('BASE_PATH')):
        os.mkdir(base_path+'/csv')
    web.run_app(app, port=environ.get('SERVER_PORT'))
