from models import engine

def select_from_table(query):
    with engine.connect() as connection:
        return connection.execute(query)