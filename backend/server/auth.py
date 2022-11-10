import json

from aiohttp import web

anonymous_user = 'anonymous'

async def handle_authentication(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')
    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')
    response: dict = dict()
    response['user'] = '0'
    return web.json_response(text=json.dumps(response))

async def handle_registration(request):
    login = request.rel_url.query.get('login', 'error')
    password = request.rel_url.query.get('password', 'error')
    if login == 'error' or password == 'error':
        return web.Response(status=400, text='Не указан логин или пароль')
    response: dict = dict()
    response['user'] = '0'
    return web.json_response(text=json.dumps(response))
