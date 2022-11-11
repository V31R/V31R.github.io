import logging
from sqlalchemy.sql import select
import sqlalchemy as sa

from models import task_table, engine, Base
from tasks_request_handlers import tasks_dict

def fill_tasks():
    logging.getLogger('database').info("Fill table 'task'")
    engine.execute(
        task_table.insert(),
        [{"name": translate, "inner_name": name } for name, translate in tasks_dict.items()]
    )

def create_task_table():
    if not sa.inspect(engine).has_table('task'):
        logging.getLogger('database').info("Create table 'task'")
        Base.metadata.create_all(bind=engine, tables=[task_table])
        fill_tasks()
        with engine.connect() as connection:
            s = select(task_table)
            result = connection.execute(s)
            logging.getLogger('database').info(result)
    else:
        with engine.connect() as connection:
            s = select(task_table)
            result = connection.execute(s)
            items_number = len([row for row in result])
            if items_number != len(tasks_dict):
                fill_tasks()


def init_db():
    create_task_table()
    logging.getLogger('database').info(f"Inited tables {[n for n in Base.metadata.sorted_tables]}")