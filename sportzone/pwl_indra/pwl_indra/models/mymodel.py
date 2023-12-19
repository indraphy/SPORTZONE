import json
import bcrypt

from sqlalchemy import (
    Boolean,
    Column,
    Float,
    ForeignKey,
    Index,
    Integer,
    Text,
    func,
    DateTime
)

from sqlalchemy.orm import relationship

from .meta import Base


class MyModel(Base):
    __tablename__ = 'models'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    value = Column(Integer)

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement='auto')
    email = Column(Text, unique=True, nullable=False)    
    password = Column(Text, nullable=False)
    roles = Column(Boolean, default=False)
    nama_user = Column(Text, nullable=True)
    alamat_user = Column(Text, nullable=True)
    no_hp = Column(Text, nullable=True)
    createdAt = Column(DateTime, default=func.now())
    updatedAt = Column(DateTime, default=func.now(), onupdate=func.now())

    order = relationship('Order', back_populates='user')
    keranjang = relationship('Keranjang', back_populates='user')

    def __init__(self, email, password, roles=None, nama_user=None, alamat_user=None, no_hp=None):
        self.email = email
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        self.password = bcrypt.hashpw(bytes, salt)
        self.roles = roles
        self.nama_user = nama_user
        self.alamat_user = alamat_user
        self.no_hp = no_hp

    def verify_password(self, password):
        userByte = password.encode('utf-8')
        return bcrypt.checkpw(userByte, self.password)
    
    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "roles": self.roles,
            "nama_user": self.nama_user,
            "alamat_user": self.alamat_user,
            "no_hp": self.no_hp,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }
    

class Produk(Base):
    __tablename__ = 'products'
    
    id = Column(Integer, primary_key=True, autoincrement='auto')
    nama = Column(Text, nullable=False)
    quantity = Column(Integer, nullable=True, default=0)
    deskripsi = Column(Text, nullable=True)
    gambar = Column(Text, nullable=True)
    harga = Column(Float, default=0)
    createdAt = Column(DateTime, default=func.now())
    updatedAt = Column(DateTime, default=func.now(), onupdate=func.now())

    keranjang = relationship('Keranjang', back_populates='produk')
    order = relationship('Order', back_populates='produk')

    def to_dict(self):
        return {
            "id": self.id,
            "nama": self.nama,
            "quantity": self.quantity,
            "deskripsi": self.deskripsi,
            "gambar": self.gambar,
            "harga": self.harga,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt
        }

    
class Keranjang(Base):
    __tablename__ = 'keranjangs'
    
    id = Column(Integer, primary_key=True, autoincrement='auto')       
    jumlah_barang = Column(Integer, default=1)
    harga_total = Column(Float, nullable=False)
    id_user = Column(Integer, ForeignKey('users.id'))
    id_produk = Column(Integer, ForeignKey('products.id'))

    user = relationship('User', back_populates='keranjang')
    produk = relationship('Produk', back_populates='keranjang')

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.id_user,
            "produkId": self.id_produk,
            "hargaTotal": self.harga_total,
            "jumlahBarang": self.jumlah_barang,
            "user": self.user,
            "produk": self.produk
        }
    
class Order(Base):
    __tablename__ = 'pembayarans'

    id = Column(Integer, primary_key=True, autoincrement="auto")
    id_user = Column(Integer, ForeignKey('users.id'))
    id_produk = Column(Integer, ForeignKey('products.id'))
    status_order = Column(Text, nullable=False, default="Sedang dikemas")
    jumlah_barang = Column(Integer, nullable=False)
    createdAt = Column(DateTime, default=func.now())
    updatedAt = Column(DateTime, default=func.now(), onupdate=func.now())
    harga_total = Column(Float, nullable=False)

    user = relationship('User', back_populates='order')
    produk = relationship('Produk', back_populates='order')

    def to_dict(self):
        return {
            "id": self.id,
            "user": json.dumps(self.user),
            "produk": json.dumps(self.produk),
            "status": self.status_order,
            "jumlah": self.jumlah_barang,
            "hargaTotal": self.harga_total,
            "updatedAt": self.updatedAt,
            "createdAt": self.createdAt
        }

    

Index('email', User.email, unique=True, mysql_length=255)

