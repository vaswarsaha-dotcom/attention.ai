from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings, loaded from environment variables / backend/.env."""

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", extra="ignore"
    )

    app_name: str = "AttentionAI API"
    environment: str = "development"

    # Comma-separated list of allowed frontend origins (CORS)
    cors_origins: str = "http://localhost:3000"

    # Secrets: empty defaults for now; later phases will require them.
    tmdb_api_key: str = ""
    database_url: str = ""
    supabase_url: str = ""

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
