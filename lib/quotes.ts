import rawQuotes from "@/data/quotes.json";

export type QuoteLength = "short" | "medium" | "long";

const BOUNDS: Record<QuoteLength, [number, number]> = {
  short: [40, 130],
  medium: [131, 199],
  long: [200, 600],
};

// Curly quotes, dashes and ellipses can't be typed on a standard keyboard,
// which made some quotes impossible to finish. Normalise them to ASCII.
function normalise(text: string): string {
  return text
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

const QUOTES = rawQuotes.map((q) => ({
  text: normalise(q.text),
  from: q.from,
}));

export function getQuote(length: QuoteLength): {
  words: string[];
  author: string;
} {
  const [min, max] = BOUNDS[length];
  const inRange = QUOTES.filter(
    (q) => q.text.length >= min && q.text.length <= max
  );
  // Never index into an empty pool (would crash the whole test).
  const pool = inRange.length > 0 ? inRange : QUOTES;
  const quote = pool[Math.floor(Math.random() * pool.length)];
  return { words: quote.text.split(" "), author: quote.from };
}
