"use client";

import { useEffect, useState } from "react";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { getVisitCount } from "@/lib/db/visits";

export function VisitCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    getVisitCount()
      .then((value) => {
        if (!cancelled) {
          setCount(value);
        }
      })
      .catch(() => {
        /* counter is optional */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Hidden when the DB isn't configured / unreachable.
  if (count === null) {
    return null;
  }

  return (
    <span className="text-muted-foreground/60 text-xs">
      <AnimatedNumber
        className="font-medium text-muted-foreground tabular-nums"
        value={count}
      />{" "}
      thocks and counting
    </span>
  );
}
