import pandas as pd


def load_and_prepare(
    path: str
) -> pd.DataFrame:

    df = pd.read_csv(path)

    return df.dropna().copy()