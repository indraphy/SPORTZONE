import json
from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound
from ..models.mymodel import Order, Produk
from sqlalchemy.orm import sessionmaker

@view_config(route_name='pembayaran', renderer='json', request_method="GET")
def get_pembayaran(request):
    DBSession = sessionmaker(bind=request.dbsession.bind)
    db_session = DBSession()
    pengemasan = db_session.query(Order).filter_by(status_order="Sedang dikemas").all()
    return { "status": "success", "data": pengemasan }

@view_config(route_name='pembayaran', renderer='json', request_method="POST")
def post_pembayaran(request):
    try:
        data = request.json_body
        id_produk = data.get('id_produk')
        jumlah_barang = data.get('quantity')

        if not id:
            raise ValueError('ID produk tidak valid')
        
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        produk = db_session.query(Produk).filter_by(id=id_produk).first().to_dict()
        new_order = Order(id_user=request.jwt_data['user_id'], id_produk=id_produk, jumlah_barang=jumlah_barang, harga_total=produk['harga'] * jumlah_barang)
        db_session.add(new_order)
        db_session.commit()

        return Response(
            json_body={ "status": "success", "message": "Berhasil membayar" },
            status=201,
            content_type="application/json"
        )
    except ValueError as e:
        print(e)
        return Response(
            json_body={ "status": "error", "message": str(e) },
            status=400,
            content_type="application/json"
        )

@view_config(route_name='pembayaran', renderer='json', request_method="OPTIONS")
def option_pembayaran(request):
    return {}
