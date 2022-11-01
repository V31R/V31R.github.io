import logging

from aiohttp import web
import aiohttp_cors
from correlation import handle_correlation_post
from images import handleImageGet
from clusterization import handle_clusterization_post

logging.basicConfig(level=logging.DEBUG)
app = web.Application()

app.add_routes([
    web.post('/correlation', handle_correlation_post),
    web.post('/clusterization', handle_clusterization_post),
    web.get('/images/{image_name}', handleImageGet)
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
