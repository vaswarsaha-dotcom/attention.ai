from pathlib import Path

import joblib
import pandas as pd

from sklearn.ensemble import (
    RandomForestRegressor
)

from sklearn.model_selection import (
    train_test_split
)

from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

from preprocessing.feature_engineering import (
    FEATURE_COLUMNS
)


DATA = (
    Path(__file__).parents[1]
    / "data"
    / "sample_engagement_dataset.csv"
)

OUT = (
    Path(__file__).parents[1]
    / "models"
    / "engagement_model.pkl"
)


def train():
    df = pd.read_csv(DATA)

    X = df[FEATURE_COLUMNS]
    y = df["engagement_score"]

    X_train, X_test, y_train, y_test = (
        train_test_split(
            X,
            y,
            test_size=0.2,
            random_state=42
        )
    )

    model = RandomForestRegressor(
        n_estimators=200,
        random_state=42,
        n_jobs=-1
    )

    model.fit(
        X_train,
        y_train
    )

    predictions = model.predict(
        X_test
    )

    print({
        "mae": mean_absolute_error(
            y_test,
            predictions
        ),
        "rmse": mean_squared_error(
            y_test,
            predictions
        ) ** 0.5,
        "r2": r2_score(
            y_test,
            predictions
        )
    })

    OUT.parent.mkdir(
        exist_ok=True
    )

    joblib.dump(
        model,
        OUT
    )


if __name__ == "__main__":
    train()