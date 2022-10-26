from aiohttp import web

async def handle(request):
    name = request.rel_url.query['name']
    text = "Hello, " + name
    for h in request.config_dict:
        print(h)
    return web.Response(text=text)

app = web.Application()
app.add_routes([web.get('/', handle)])