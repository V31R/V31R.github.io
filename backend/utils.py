from io import StringIO
import logging
import pandas as pd

async def save_df_from_io(csvStringIO: StringIO, filename: str, sep=',', encoding='windows-1251') -> pd.DataFrame:
    logging.getLogger('aiohttp.server').info(f'Start save {filename}')
    file = open(filename, 'w')
    file.writelines(csvStringIO)
    file.close()
    logging.getLogger('aiohttp.server').info(f'Saved {filename}')
    df: pd.DataFrame = pd.read_csv(filename, sep=sep, encoding=encoding)
    logging.getLogger('aiohttp.server').info(f'Loaded {filename} to DataFrame')
    return df