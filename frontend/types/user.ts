export interface AppUser {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  role?: "user" | "admin";
}