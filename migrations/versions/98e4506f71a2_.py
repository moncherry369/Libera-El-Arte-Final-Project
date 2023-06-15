"""empty message

Revision ID: 98e4506f71a2
Revises: b595ef9f32cf
Create Date: 2023-06-14 22:39:55.492768

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '98e4506f71a2'
down_revision = 'b595ef9f32cf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('collection',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=250), nullable=True),
    sa.Column('description', sa.String(length=250), nullable=True),
    sa.Column('beloved_by', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('media',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('filename', sa.String(length=256), nullable=True),
    sa.Column('filetype', sa.Enum('image', 'video', 'audio', name='MediaType'), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('filename')
    )
    op.create_table('piece',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=250), nullable=True),
    sa.Column('description', sa.String(length=250), nullable=True),
    sa.Column('upload_date', sa.DateTime(), nullable=True),
    sa.Column('beloved_by', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('setting',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('key', sa.String(length=256), nullable=True),
    sa.Column('value', sa.JSON(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('key')
    )
    op.create_table('beloved_collections',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('collection', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['collection'], ['collection.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('beloved_pieces',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('piece', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['piece'], ['piece.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    op.create_table('collection_pieces',
    sa.Column('collection_id', sa.Integer(), nullable=True),
    sa.Column('piece_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['collection_id'], ['collection.id'], ),
    sa.ForeignKeyConstraint(['piece_id'], ['piece.id'], )
    )
    op.create_table('user_collections',
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('collection', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['collection'], ['collection.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], )
    )
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=250), nullable=False))
        batch_op.add_column(sa.Column('phone_number', sa.Integer(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('phone_number')
        batch_op.drop_column('name')

    op.drop_table('user_collections')
    op.drop_table('collection_pieces')
    op.drop_table('beloved_pieces')
    op.drop_table('beloved_collections')
    op.drop_table('setting')
    op.drop_table('piece')
    op.drop_table('media')
    op.drop_table('collection')
    # ### end Alembic commands ###