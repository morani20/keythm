import { defineConfig } from "drizzle-kit";

// Uses the same variables as the app (lib/env.ts) so `drizzle-kit push`
// and the running site always talk to the same database.
export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});
