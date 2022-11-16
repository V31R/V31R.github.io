import json
import logging
from aiohttp import web
from aiohttp import BasicAuth
from database_api import find_user_by_login, create_user, add_user
from models import User

anonymous_user = 'anonymous'

def check_user(user: str) ->str:
    if user == '':
        return anonymous_user
    return user

def __check_unique_user__(user: User):
    result = find_user_by_login(user.login)
    if len(result) > 0:
        return False
    return True

def __check_user__(user: User):
    result = find_user_by_login(user.login)
    if len(result) != 1:
        return None
    result = result[0]
    if result[2] != user.password:
        return None
    logging.getLogger('aiohttp.server').debug(f"{result}")
    return result[0]

def __get_user_from_basic_auth__(request: web.Request):
    auth: BasicAuth = BasicAuth.decode(request.headers.get('Authorization'))
    return create_user(auth.login, auth.password)

def get_user_from_auth(request: web.Request):
    user = request.headers.get('Authorization')
    return check_user(user)

async def get_authentication_handle(request: web.Request) -> web.Response:
    if request.headers.get('Authorization') is None:
        return web.Response(status=400)
    user = __check_user__(__get_user_from_basic_auth__(request))
    if user == None:
        return web.Response(status=400, text='Неверно указан логин или пароль!')
    response: dict = dict()
    response['token'] = user
    return web.json_response(text=json.dumps(response))


async def post_registration_handle(request: web.Request) -> web.Response:
    if request.headers.get('Authorization') is None:
        return web.Response(status=400)

    user = __get_user_from_basic_auth__(request)

    if __check_unique_user__(user):
        id = add_user(user)
    else:
        return web.Response(status=409, text='Такой пользователь уже существует!')
    response: dict = dict()
    response['token'] = id
    return web.json_response(text=json.dumps(response), status=201)
