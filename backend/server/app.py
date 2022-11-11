import logging

from aiohttp import web
import aiohttp_cors
from images import get_image_handle
from auth import get_authentication_handle, post_registration_handle
from tasks_request_handlers import post_distribution_handler, post_regression_handler, post_clusterization_handler, \
    post_correlation_handler, post_preprocessing_handler

logging.basicConfig(level=logging.DEBUG)
app = web.Application()

app.add_routes([
    web.post('/distribution', post_distribution_handler),
    web.post('/regression', post_regression_handler),
    web.post('/preprocessing', post_preprocessing_handler),
    web.post('/clusterization', post_clusterization_handler),
    web.post('/correlation', post_correlation_handler),
    web.get('/images/{image_name}', get_image_handle),
    web.get('/authentication', get_authentication_handle),
    web.post('/authentication', post_registration_handle)
])

cors = aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
        allow_credentials=True,
        expose_headers="*",
        allow_headers="*"
    )
})

for route in list(app.router.routes()):
    cors.add(route)
