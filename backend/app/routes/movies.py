from fastapi import APIRouter


router = APIRouter(
    prefix="/movies",
    tags=["movies"]
)


@router.get("/trending")
def trending():
    return []


@router.get("/search")
def search(q: str):
    return {
        "query": q,
        "results": []
    }


@router.get("/{movie_id}")
def movie(movie_id: str):
    return {
        "id": movie_id,
        "title": movie_id,
        "attention": 0
    }