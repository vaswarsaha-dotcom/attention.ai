from pydantic import BaseModel, Field


class AnalysisRequest(BaseModel):
    movie_id: str
    title: str = "Unknown Movie"

    features: dict[str, float] = Field(
        default_factory=dict
    )


class PredictionResponse(BaseModel):
    movie_id: str
    attention_score: float
    confidence_score: float
    explanation: str