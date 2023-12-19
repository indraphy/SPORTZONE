from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.orm import sessionmaker
from ..models.mymodel import User

@view_config(route_name='register', renderer='json', request_method="GET")
def get_register(request):
    return { "status": "success", "message": "Welcome to register API" }

@view_config(route_name='register', renderer='json', request_method="POST")
def post_register(request):
    try:
        data = request.json_body
        email = data.get('email')
        password = data.get('password')
        alamat = data.get('alamat')
        nomor_hp = data.get('nomorHp')
        nama = data.get('nama')
        
        if not email or not password:
            raise ValueError("Email and password are required")
        
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        
        user = db_session.query(User).filter_by(email=email).first()
        if user:
            raise ValueError("Email already exists.")
        
        new_user = User(email, password, alamat_user=alamat, no_hp=nomor_hp, nama_user=nama)
        db_session.add(new_user)
        db_session.commit()
        
        return Response(
            json_body={ "status": "success", "message": "Email " + email + " berhasil didaftarkan"},
            status=201,
            content_type="application/json"
        )
        
    except ValueError as e:
        print(e)
        response = Response(json_body={ "status": "error", "message": str(e) })
        response.status_code = 400
        return response

@view_config(route_name='register', renderer='json', request_method="OPTIONS")
def option_register(request):
    return {}