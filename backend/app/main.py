from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings

from app.routes.health import (
    router as health_router
)

from app.routes.movies import (
    router as movies_router
)

from app.routes.analysis import (
    router as analysis_router
)

from app.routes.ml import (
    router as ml_router
)


app = FastAPI(
    title="AttentionAI API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        x.strip()
        for x in settings.cors_origins.split(",")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


app.include_router(
    health_router,
    prefix="/api"
)

app.include_router(
    movies_router,
    prefix="/api"
)

app.include_router(
    analysis_router,
    prefix="/api"
)

app.include_router(
    ml_router,
    prefix="/api"
)