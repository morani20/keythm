"use server";

import { eq, sql } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import { stats } from "@/lib/db/schema";

const KEY = "total_visits";
const COOKIE_NAME = "kz-visit";
const THROTTLE_SECONDS = 120;

// Cached read — revalidates every 300s. Returns `null` when the database is
// not configured or unreachable so the UI can simply hide the counter.
const readVisitCount = unstable_cache(
  async () => {
    if (!db) {
      return null;
    }
    const row = await db.select().from(stats).where(eq(stats.key, KEY)).get();
    return row?.value ?? 0;
  },
  ["visit-count"],
  { revalidate: 300 }
);

// "use server" files may only export async functions, so the cached reader
// is wrapped instead of being exported directly.
export async function getVisitCount(): Promise<number | null> {
  try {
    return await readVisitCount();
  } catch {
    return null;
  }
}

// Server Action — called from the client on mount
export async function recordVisit() {
  if (!db) {
    return;
  }

  try {
    const cookieStore = await cookies();
    if (cookieStore.get(COOKIE_NAME)) {
      return;
    }

    cookieStore.set(COOKIE_NAME, "1", {
      maxAge: THROTTLE_SECONDS,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    await db
      .insert(stats)
      .values({ key: KEY, value: 1 })
      .onConflictDoUpdate({
        target: stats.key,
        set: { value: sql`${stats.value} + 1` },
      });
  } catch {
    // Analytics must never break the page.
  }
}
