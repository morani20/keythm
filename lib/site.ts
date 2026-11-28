// Single source of truth for every public URL used across the app
// (metadata, sitemap, robots, JSON-LD, footer, header).
//
// NOTE: `url` is the *deployed site* (Netlify) — NOT the GitHub repo.
// Using the repo URL here was breaking canonical links, Open Graph,
// sitemap.xml and robots.txt (they were all pointing at github.com).
export const siteConfig = {
  name: "Keythm",
  shortName: "Keythm",
  description:
    "Free online typing test with realistic mechanical keyboard sounds and real-time WPM tracking. Practice with timed tests, word counts, or quotes — featuring an interactive on-screen keyboard, satisfying key sounds, and detailed accuracy stats.",
  url: "https://keythm-morani.netlify.app",
  themeColor: "#18181B",
  backgroundColor: "#ffffff",
  creator: "Mohamed Rani",
  creatorUrl: "https://github.com/morani20",
  github: "https://github.com/morani20/keythm",
  instagram: "https://www.instagram.com/codee_map/",
  whatsapp: "https://wa.me/970592153483",
} as const;
