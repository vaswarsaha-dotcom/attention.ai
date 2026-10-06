# AttentionAI — Movie Engagement & Attention Analysis System

Predicts scene-level movie engagement from measurable scene features and compares
predictions against real viewer ratings.

> **Status: Phase 0 (project skeleton).** Any scene data or model output in later
> phases built from synthetic/demo data is a prototype and will be labeled as such.

## Stack
Next.js + TypeScript + Tailwind + Framer Motion + Recharts · FastAPI · scikit-learn · Supabase (PostgreSQL + Auth) · TMDB API

## Run locally

### 1. Backend (terminal 1)
```bash
cd backend
python -m venv .venv
source .venv/bin/activate          # Windows Git Bash: source .venv/Scripts/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
Check: http://localhost:8000/api/health and http://localhost:8000/docs

### 2. Frontend (terminal 2)
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:3000 — you should see "✓ API connected".

### 3. Keys
Fill in `backend/.env` (TMDB key, Supabase DATABASE_URL / SUPABASE_URL) and
`frontend/.env.local` (Supabase URL + anon key). Never commit these files.

### Tests
```bash
cd backend && pytest
```

## Layout
```
backend/   FastAPI app (routes, services, schemas, features)
frontend/  Next.js app
ml/        datasets, preprocessing, training, evaluation, saved models
docs/      report, diagrams, viva notes
```
