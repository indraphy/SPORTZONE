import json
from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound
from ..models.mymodel import Produk
from sqlalchemy.orm import sessionmaker

@view_config(route_name='product', renderer='json', request_method="GET")
def get_product(request):
    DBSession = sessionmaker(bind=request.dbsession.bind)
    db_session = DBSession()
    produk = db_session.query(Produk).all()
    produk_data = [item.to_dict() for item in produk]

    for produk in produk_data:
        produk['createdAt'] = produk['createdAt'].isoformat()
        produk['updatedAt'] = produk['updatedAt'].isoformat()

    return Response(json_body={ "status": "success", "data": produk_data }, status=200, content_type="application/json")

@view_config(route_name='product', renderer='json', request_method="POST")
def post_product(request):
    try:
        data = request.json_body
        nama = data.get('nama')
        deskripsi = data.get('deskripsi')
        stok = data.get('stok')
        harga = data.get('harga')
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        new_produk = Produk(nama=nama, deskripsi=deskripsi, quantity=stok, harga=harga)
        db_session.add(new_produk)
        db_session.commit()
        return Response(
            json_body={ "status": "success", "message": "Welcome to post product API" },
            status=201,
            content_type="application/json"
        )
    except ValueError as e:
        print(e)
        response = Response(
            json_body={ "status": "error", "message": str(e) },
            content_type="application/json"
        )
        response.status_code = 400
        return response

@view_config(route_name="product", renderer="json", request_method="DELETE")
def delete_product(request):
    try:
        product_id = request.params.get('id')


        if not product_id:
            raise ValueError("ID tidak valid")
        
        
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        target = db_session.query(Produk).filter_by(id=product_id).delete()
        db_session.commit()

        return Response(
            json_body={ "status": "success", "message": "Produk berhasil dihapus" },
            status=201,
            content_type="application/json"
        )
    except ValueError as e:
        print(e)
        return Response(
            json_body={ "status": "success", "message": str(e) },
            status=400,
            content_type="application/json"
        )

@view_config(route_name="detail", renderer="json", request_method="GET")
def detail_product(request):
    try:
        product_id = request.matchdict['id']
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()

        target = db_session.query(Produk).filter_by(id=product_id).first().to_dict()

        if not target:
            raise ValueError("Tidak ada product dengan id tersebut")
        
        target["createdAt"] = target['createdAt'].isoformat()
        target["updatedAt"] = target['updatedAt'].isoformat()

        return Response(
            json_body={ "status": "success", "data": target },
            status=200,
            content_type="application/json",
        )
    except ValueError as e:
        print(e)
        response = Response(json_body={ "status": "error", "message": str(e) })
        response.status_code = 404
        return response
    
    
@view_config(route_name="detail", renderer="json", request_method="OPTIONS")
def options_detail(request):
    return {}


@view_config(route_name='product', renderer='json', request_method="OPTIONS")
def options_product(request):
    return {}
