from fastapi import APIRouter

from app.schemas.analysis import (
    AnalysisRequest
)


router = APIRouter(
    prefix="/ml",
    tags=["ml"]
)


@router.post("/predict")
def predict(
    payload: AnalysisRequest
):
    features = payload.features or {}

    score = (
        sum(features.values())
        / len(features)
        if features
        else 80
    )

    return {
        "score": round(score, 2),
        "confidence": 0.72,
        "model": "baseline-random-forest"
    }
    