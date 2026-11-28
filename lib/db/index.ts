import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/lib/env";

// The database is optional. When it is not configured, `db` is `null`
// and every caller must handle that (the visit counter just disappears).
function createDb() {
  if (!env.DATABASE_URL) {
    return null;
  }
  const client = createClient({
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  });
  return drizzle(client);
}

export const db = createDb();
