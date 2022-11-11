import sqlalchemy as sa
from sqlalchemy.ext.declarative import declarative_base
from os import environ



dsn = f"postgresql://{environ.get('POSTGRES_USER')}:{environ.get('POSTGRES_PASSWORD')}@{environ.get('DB_HOST')}:{environ.get('DB_PORT')}/{environ.get('POSTGRES_DB')}"

engine = sa.create_engine(dsn)
metadata = sa.MetaData()
Base = declarative_base()

class Task(Base):
    __tablename__ = "task"
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String(255))
    inner_name = sa.Column(sa.String(255))

task_table = Task.__table__

