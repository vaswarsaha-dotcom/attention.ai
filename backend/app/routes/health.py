from fastapi import APIRouter

from app.core.config import get_settings

router = APIRouter(prefix="/api", tags=["health"])


@router.get("/health")
async def health() -> dict[str, str | bool]:
    """Liveness check. Reports whether secrets are configured, never their values."""
    s = get_settings()
    return {
        "status": "ok",
        "app": s.app_name,
        "environment": s.environment,
        "tmdb_configured": bool(s.tmdb_api_key),
        "database_configured": bool(s.database_url),
    }
