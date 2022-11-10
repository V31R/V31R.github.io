import json
import logging

from aiohttp import web

anonymous_user = 'anonymous'

def check_user(user: str) ->str:
    if user == '':
        return anonymous_user
    return user

async def get_authentication_handle(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')
    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')
    response: dict = dict()
    response['token'] = 'user'
    return web.json_response(text=json.dumps(response))

async def post_registration_handle(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')
    logging.getLogger('aiohttp.server').info(f"{login} {password}")
    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')
    response: dict = dict()
    response['token'] = 'user'
    return web.json_response(text=json.dumps(response), status=201)
