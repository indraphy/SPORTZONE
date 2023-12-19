from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound
from ..models.mymodel import Order
from sqlalchemy.orm import sessionmaker

@view_config(route_name='pengiriman', renderer='json', request_method="GET")
def get_pengiriman(request):
    DBSession = sessionmaker(bind=request.dbsession.bind)
    db_session = DBSession()
    pengiriman = db_session.query(Order).filter_by(status_order="Dikirim").all()
    pengiriman = [item.to_dict() for item in pengiriman]
    return { "status": "success", "data": pengiriman }

@view_config(route_name='pengiriman', renderer='json', request_method="PATCH")
def post_pengiriman(request):
    try:
        id = request.params.get('id')

        if not id:
            raise ValueError('ID tidak valid')
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        target = db_session.query(Order).filter_by(id=id).first()
        db_session.query(Order).filter_by(id=id).update({ "status": 'Dikirim '})
        db_session.commit()

        return { "status": "success", "message": "Status order berhasil diperbarui"}
    except ValueError as e:
        print(e)
        return Response(
            json_body={ "status": "error", "message": str(e) },
            status=400,
            content_type="application/json"
        )

@view_config(route_name='pengiriman', renderer='json', request_method="OPTIONS")
def option_pengiriman(request):
    return {}