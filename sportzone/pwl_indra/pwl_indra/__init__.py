from pyramid.config import Configurator
from pyramid.events import NewRequest

def add_cors_headers_response_callback(event):
    def cors_headers(request, response):
        response.headers.update({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,GET,DELETE,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, Authorization, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '1728000',
        })
    event.request.add_response_callback(cors_headers)
    
    
def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        config.add_subscriber(add_cors_headers_response_callback, NewRequest)

        config.include('pyramid_jinja2')
        config.include('.routes')
        config.include('.models')
    
        config.add_route('login', '/login')
        config.add_route('register', '/register')
        config.add_route("product", "/product")
        config.add_route("detail", "/product/detail/{id}")
        config.add_route("pemesanan", "/pemesanan")
        config.add_route("pembayaran", "/pembayaran")
        config.add_route("pengguna", "/pengguna")
        config.add_route("pengiriman", "/pengiriman")

        config.add_tween('pwl_indra.middleware.JWTMiddleware.JWTMiddleware')

        config.scan()
    return config.make_wsgi_app()
