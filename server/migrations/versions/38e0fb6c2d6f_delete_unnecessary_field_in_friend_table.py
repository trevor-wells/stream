"""delete unnecessary field in Friend table

Revision ID: 38e0fb6c2d6f
Revises: e1e27d0dde53
Create Date: 2023-06-02 13:19:10.573952

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '38e0fb6c2d6f'
down_revision = 'e1e27d0dde53'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('friends', schema=None) as batch_op:
        batch_op.drop_column('rating')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('friends', schema=None) as batch_op:
        batch_op.add_column(sa.Column('rating', sa.INTEGER(), nullable=True))

    # ### end Alembic commands ###