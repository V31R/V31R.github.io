import logging

from aiohttp import web
import aiohttp_cors

from correlation import post_correlation_handler
from distribution import post_distribution_handler
from images import handleImageGet
from clusterization import post_clusterization_handler

logging.basicConfig(level=logging.DEBUG)
app = web.Application()

app.add_routes([
    web.post('/distribution', post_distribution_handler),
    web.post('/clusterization', post_clusterization_handler),
    web.post('/correlation', post_correlation_handler),
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
