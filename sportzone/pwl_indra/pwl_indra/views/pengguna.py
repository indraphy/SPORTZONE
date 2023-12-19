import json
from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.orm import sessionmaker
from ..models.mymodel import User

@view_config(route_name='pengguna', renderer='json', request_method="GET")
def get_pengguna(request):
    try:
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        users = db_session.query(User).filter_by(roles=False).all()
        print(request.jwt_data)
        if request.jwt_data['role']:
            user_list = []
            for user in users:
                user_dict = user.to_dict()
                user_dict['createdAt'] = user_dict['createdAt'].isoformat()
                user_dict['updatedAt'] = user_dict['updatedAt'].isoformat()
                user_list.append(user_dict)

            return Response(
                json_body={ "data": user_list },
                status=200,
                content_type="application/json"
            )
        else:
            raise ValueError("Hanya bisa diakses admin")
    except ValueError as e:
        print(e)
        response = Response(
            json_body={ "status": "error", "message": str(e) },
            status=401,
            content_type="application/json"
        )
        return response
    
@view_config(route_name='pengguna', renderer='json', request_method="DELETE")
def delete_pengguna(request):
    try:
        id = request.params.get('id')

        if not id:
            raise ValueError('ID pengguna tidak valid')
        
        if request.jwt_data['role']:
            DBSession = sessionmaker(bind=request.dbsession.bind)
            db_session = DBSession()
            target = db_session.query(User).filter_by(id=id).first()
            email = target.email
            if target:
                db_session.query(User).filter_by(id=id).delete()
                db_session.commit()
                return { "status": "success", "message": f"Akun {email} berhasil dihapus" }
        else:
            raise ValueError("Hanya bisa diakses admin")
        
    except ValueError as e:
        print(e)
        return Response(
            json_body={ "status": "error", "message": str(e) },
            status=400,
            content_type="application/json"
        )

@view_config(route_name='pengguna', renderer='json', request_method="OPTIONS")
def option_pengguna(request):
    return {}
    