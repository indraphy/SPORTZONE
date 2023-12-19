from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.orm import sessionmaker
from ..models.mymodel import User
import jwt

@view_config(route_name='login', renderer='json', request_method="GET")
def get_login(request):
    product_list = ["Produk 1", "Produk 2", "Produk 3"]
    return { "status": "success", "message": product_list }

@view_config(route_name='login', renderer='json', request_method="POST", )
def post_login(request):
    # handle form submit
    try:
        data = request.json_body
        email = data.get('email')
        password = data.get('password')
        
        if not email or not password:
            raise ValueError("Username and password are required")
        
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        
        user = db_session.query(User).filter_by(email=email).first()
        
        if user:
            if user.verify_password(password):
                encoded_jwt = jwt.encode({ "ISS": "IndraJaya", "email": user.email, "user_id": user.id, "role": user.roles }, "PWL_INDRA", algorithm="HS256")
                return { "status": "success", "message": "Login berhasil", "accessToken": encoded_jwt }
            else:
                raise ValueError("Invalid credentials")
        else:
            raise ValueError("Email tidak terdaftar")
        
    except ValueError as e:
        print(e)
        response = Response(json_body={ "status": "error", "message": str(e) })
        response.status_code = 401
        return response
    
@view_config(route_name='login', renderer='json', request_method="OPTIONS")
def options_login(request):
    return {}
