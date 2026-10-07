from fastapi import APIRouter

from app.core.config import settings


router = APIRouter(
    tags=["health"]
)


@router.get("/health")
def health():
    return {
        "status": "ok",
        "app": "AttentionAI API",
        "environment": settings.environment,
        "tmdb_configured": bool(
            settings.tmdb_api_key
        ),
        "database_configured": bool(
            settings.supabase_url
        )
    }