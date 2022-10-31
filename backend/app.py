import logging

from aiohttp import web
import aiohttp_cors
from correlation import handleCorrelationPost
from save_image import handleImageGet
from clusterization import handleClusterizationPost

logging.basicConfig(level=logging.DEBUG)
app = web.Application()

app.add_routes([
    web.post('/correlation', handleCorrelationPost),
    web.post('/clusterization', handleClusterizationPost),
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
