export interface HealthResponse {
  status: string;
  app: string;
  environment: string;
  tmdb_configured: boolean;
  database_configured: boolean;
}
