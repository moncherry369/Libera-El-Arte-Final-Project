"""empty message

Revision ID: 4e769cf1cc50
Revises: 98e4506f71a2
Create Date: 2023-06-14 23:40:55.851105

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '4e769cf1cc50'
down_revision = '98e4506f71a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('settings',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('key', sa.String(length=256), nullable=True),
    sa.Column('value', sa.JSON(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('key')
    )
    op.drop_table('setting')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('setting',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('key', sa.VARCHAR(length=256), autoincrement=False, nullable=True),
    sa.Column('value', postgresql.JSON(astext_type=sa.Text()), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='setting_pkey'),
    sa.UniqueConstraint('key', name='setting_key_key')
    )
    op.drop_table('settings')
    # ### end Alembic commands ###
