import jwt
from pyramid.response import Response

def JWTMiddleware(handler, registry):
    def tween(request):
        if request.method == 'OPTIONS':
            # Allow OPTIONS requests to pass through without JWT verification
            return handler(request)
        login_url = request.route_url('login')
        register_url = request.route_url('register')
        if request.url == login_url or request.url == register_url:
            return handler(request)
        else:
            authorization_header = request.headers.get('Authorization')
            if authorization_header and authorization_header.startswith('Bearer '):
                token = authorization_header[len('Bearer '):]
                try:
                    decoded_token = jwt.decode(token, "PWL_INDRA", algorithms=['HS256'])
                    request.jwt_data = decoded_token
                except jwt.ExpiredSignatureError:
                    # Mengembalikan respons JSON 401 jika token kedaluwarsa
                    return Response(json_body={ "status": "error", "message": "Token has expired" }, status=401, content_type='application/json')
                except jwt.InvalidTokenError:
                    # Mengembalikan respons JSON 401 jika token tidak valid
                    return Response(json_body={ "status": "error", "message": "Invalid token" }, status=401, content_type='application/json')
            else:
                # Mengembalikan respons JSON 401 jika Authorization header tidak ditemukan
                return Response(json_body={ "status": "error", "message": "Unauthorized: Missing or invalid Authorization header" }, status=401, content_type='application/json')
        
        response = handler(request)
        return response
    
    return tween