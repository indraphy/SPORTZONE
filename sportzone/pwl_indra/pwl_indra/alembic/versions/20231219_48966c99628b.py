"""init

Revision ID: 48966c99628b
Revises: 
Create Date: 2023-12-19 03:13:56.504265

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '48966c99628b'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('models',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=True),
    sa.Column('value', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_models'))
    )
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nama', sa.Text(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('deskripsi', sa.Text(), nullable=True),
    sa.Column('gambar', sa.Text(), nullable=True),
    sa.Column('harga', sa.Float(), nullable=True),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_products'))
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.Text(), nullable=False),
    sa.Column('password', sa.Text(), nullable=False),
    sa.Column('roles', sa.Boolean(), nullable=True),
    sa.Column('nama_user', sa.Text(), nullable=True),
    sa.Column('alamat_user', sa.Text(), nullable=True),
    sa.Column('no_hp', sa.Text(), nullable=True),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_users')),
    sa.UniqueConstraint('email', name=op.f('uq_users_email'))
    )
    op.create_index('email', 'users', ['email'], unique=True, mysql_length=255)
    op.create_table('keranjangs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('jumlah_barang', sa.Integer(), nullable=True),
    sa.Column('harga_total', sa.Float(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_produk', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['id_produk'], ['products.id'], name=op.f('fk_keranjangs_id_produk_products')),
    sa.ForeignKeyConstraint(['id_user'], ['users.id'], name=op.f('fk_keranjangs_id_user_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_keranjangs'))
    )
    op.create_table('pembayarans',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_user', sa.Integer(), nullable=True),
    sa.Column('id_produk', sa.Integer(), nullable=True),
    sa.Column('status_order', sa.Text(), nullable=False),
    sa.Column('jumlah_barang', sa.Integer(), nullable=False),
    sa.Column('createdAt', sa.DateTime(), nullable=True),
    sa.Column('updatedAt', sa.DateTime(), nullable=True),
    sa.Column('harga_total', sa.Float(), nullable=False),
    sa.ForeignKeyConstraint(['id_produk'], ['products.id'], name=op.f('fk_pembayarans_id_produk_products')),
    sa.ForeignKeyConstraint(['id_user'], ['users.id'], name=op.f('fk_pembayarans_id_user_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_pembayarans'))
    )
    # ### end Alembic commands ###

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('pembayarans')
    op.drop_table('keranjangs')
    op.drop_index('email', table_name='users', mysql_length=255)
    op.drop_table('users')
    op.drop_table('products')
    op.drop_table('models')
    # ### end Alembic commands ###
