from pyramid.view import view_config
from pyramid.response import Response
from pyramid.httpexceptions import HTTPNotFound
from ..models.mymodel import Keranjang, Produk
from sqlalchemy.orm import sessionmaker

@view_config(route_name='pemesanan', renderer='json', request_method="GET")
def get_product(request):
    DBSession = sessionmaker(bind=request.dbsession.bind)
    db_session = DBSession()
    pemesanan = db_session.query(Keranjang).filter_by(id_user=request.jwt_data['user_id']).all()
    keranjang_data = []
    for item in pemesanan:
        keranjang_dict = item.to_dict()

        # Handle konversi objek User
        user_dict = {
            # "id": keranjang_dict["user"].id,
            "email": keranjang_dict["user"].email
        }
        keranjang_dict["user"] = user_dict

        # Handle konversi objek Produk
        produk_dict = {
            # "id": keranjang_dict["produk"].id,
            "nama": keranjang_dict["produk"].nama,
            "gambar": keranjang_dict["produk"].gambar
        }
        keranjang_dict["produk"] = produk_dict

        keranjang_data.append(keranjang_dict)
    return { "status": "success", "data": keranjang_data}

@view_config(route_name='pemesanan', renderer='json', request_method="POST")
def post_pemesanan(request):
    try:
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()

        data = request.json_body
        produk = data.get('id_product')
        produk_dict = db_session.query(Produk).filter_by(id=produk).first().to_dict() 
        if not produk_dict:
            raise ValueError("Tidak ada produk dengan id tersebut")
        quantity = data.get('quantity')
        id_user = request.jwt_data['user_id']

        new_keranjang = Keranjang(jumlah_barang=quantity, harga_total=produk_dict['harga'] * quantity, id_user=id_user, id_produk=produk)
        db_session.add(new_keranjang)
        db_session.commit()

        return Response(
            json_body={ "status": "success", "message": f"{produk_dict['nama']} ditambahkan sebanyak {quantity}"},
            status=201,
            content_type="application/json"
        )

    except ValueError as e:
        response = Response(
            json_body={ "status": "error", "message": str(e) },
            status=400,
            content_type="application/json"
        )
        return response
    
@view_config(route_name='pemesanan', renderer='json', request_method="DELETE")
def delete_pemesanan(request):
    try:
        id = request.params.get('id')

        if not id:
            raise ValueError("Invalid id")
        
        DBSession = sessionmaker(bind=request.dbsession.bind)
        db_session = DBSession()
        target = db_session.query(Keranjang).filter_by(id=id).first()

        if not target:
            raise ValueError("Tidak ada pemesanan tersebut")
        
        db_session.query(Keranjang).filter_by(id=id).delete()
        db_session.commit()

        return Response(
            json_body={ "status": "success", "message": "Item berhasil dihapus"},
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

@view_config(route_name='pemesanan', renderer='json', request_method="OPTIONS")
def options_pemesanan(request):
    return {}
