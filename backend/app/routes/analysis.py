from fastapi import APIRouter

from app.schemas.analysis import (
    AnalysisRequest
)


router = APIRouter(
    prefix="/analysis",
    tags=["analysis"]
)


@router.post("")
def analyze(
    payload: AnalysisRequest
):
    features = payload.features or {}

    score = (
        sum(features.values())
        / len(features)
        if features
        else 82.0
    )

    score = round(
        max(
            0,
            min(100, score)
        ),
        1
    )

    return {
        "movie_id": payload.movie_id,
        "attention_score": score,
        "confidence_score": 0.72,
        "explanation": (
            "The prediction combines pacing, "
            "emotion, suspense, music, visual "
            "activity, dialogue and action signals."
        )
    }