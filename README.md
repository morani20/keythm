<a name="readme-top"></a>

<img width="1440" alt="Keythm preview" src=".github/images/intro-film.png" />

<p align="center">
  <h3 align="center">Keythm</h3>
  <p align="center">
    A free typing test with realistic mechanical keyboard sounds
    <br />
    <a href="https://keythm-morani.netlify.app"><strong>Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://keythm-morani.netlify.app">Live Site</a>
    &middot;
    <a href="https://github.com/morani20/keythm">GitHub</a>
    &middot;
    <a href="https://github.com/morani20/keythm/issues">Issues</a>
    &middot;
    <a href="https://github.com/morani20/keythm/issues/new?labels=enhancement&template=FEATURE_REQUEST_TEMPLATE.md">Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://github.com/morani20">
    <img src="https://custom-icon-badges.demolab.com/badge/made%20by%20-Mohamed%20Rani-556bf2?logo=github&logoColor=white&labelColor=101827" alt="Made by Mohamed Rani">
  </a>
  <a href="https://github.com/morani20/keythm/stargazers">
    <img src="https://img.shields.io/github/stars/morani20/keythm?style=flat&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/morani20/keythm/forks">
    <img src="https://img.shields.io/github/forks/morani20/keythm?style=flat" alt="GitHub Forks">
  </a>
  <a href="https://github.com/morani20/keythm/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/morani20/keythm?color=dddddd&labelColor=000000" alt="License">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/github/languages/top/morani20/keythm?&logoColor=%23007ACC&label=TypeScript" alt="Top Language">
  </a>
  <a href="https://github.com/morani20/keythm/commits/main">
    <img src="https://img.shields.io/github/commit-activity/t/morani20/keythm?style=flat&logo=github" alt="Commits">
  </a>
  <a href="https://github.com/morani20/keythm/pulls">
    <img src="https://img.shields.io/github/issues-pr/morani20/keythm?color=brightgreen&label=PRs" alt="Pull Requests">
  </a>
  <a href="https://keythm-morani.netlify.app"><img src="https://img.shields.io/website?url=https%3A%2F%2Fkeythm-morani.netlify.app&label=Website&logo=netlify" alt="Website Status"></a>
</p>

<details>
<summary>Table of Contents</summary>

- [About](#about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Contributing](#-contributing)
- [Follow Me](#-follow-me)
- [Deployment](#-deployment)
- [Give A Star](#-give-a-star)
- [Star History](#-star-history)


</details>

## About

**Keythm** is a free online typing test with **realistic mechanical keyboard sounds** and real-time WPM tracking. Practice with timed tests, word counts, quotes, or zen mode — featuring an interactive on-screen keyboard, satisfying key sounds, and detailed accuracy stats.

## ✨ Features

| Area | What you get |
|------|----------------|
| **Test modes** | Time (15s–120s), word count, quotes (length presets), zen |
| **Mechanical key sounds** | Realistic per-key audio feedback via Web Audio; multiple keyboard themes |
| **Virtual keyboard** | Interactive on-screen keyboard that highlights keys as you type (desktop) |
| **Results** | WPM, raw speed, accuracy, character breakdown, consistency, elapsed time, WPM-over-time chart |
| **Keyboard themes** | 6 color schemes — Classic, Mint, Royal, Dolch, Sand, Scarlet — each tints the entire UI |
| **Typing fonts** | 9 fonts — Geist Mono, JetBrains Mono, Fira Code, IBM Plex Mono, Source Code Pro, Inter Tight, Space Grotesk, Nunito, Atkinson Hyperlegible |
| **Settings** | Theme (light/dark/system), accent color, font picker, show keyboard, sound volume, live WPM, ghost mode |
| **Haptics** | Optional vibration on supported hardware |

Settings persist in `localStorage`.

## 🛠 Tech Stack

<details><summary><b>Keythm</b> is built using the following technologies:</summary>

- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Next.js](https://nextjs.org/) 16: React framework with App Router.
- [React](https://react.dev/) 19: UI library.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [Base UI](https://base-ui.com/): Unstyled, accessible component primitives from MUI.
- [shadcn/ui](https://ui.shadcn.com/): Pre-styled component recipes.
- [Motion](https://motion.dev/): Animation library for React.
- [Recharts](https://recharts.org/): Composable charting library.
- [Drizzle ORM](https://orm.drizzle.team/) + LibSQL: Type-safe database layer.
- [Biome](https://biomejs.dev/): Fast linter and formatter.
- [Serwist](https://serwist.pages.dev/): PWA / service worker toolkit.
- [Netlify](https://www.netlify.com/): Deployment platform.

</details><br/>

[![Technologies Used](https://go-skill-icons.vercel.app/api/icons?i=nextjs,react,ts,tailwind,shadcn,framer,drizzle,sqlite,bun,biome,netlify&theme=dark&titles=true)](https://github.com/morani20)

## 🧰 Getting Started

1. Make sure [Git](https://git-scm.com/downloads) and [Bun](https://bun.sh/) (or Node.js 20+) are installed.
2. Fork this repository and clone **your fork**:

   ```bash
   git clone https://github.com/morani20/keythm.git
   cd keythm
   ```

3. Install dependencies and start the dev server:

   ```bash
   bun install
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `bun dev` | Development server |
| `bun run build` | Optimized production build |
| `bun start` | Serve the production build |
| `bun run lint` | Lint with Biome |
| `bun run lint:fix` | Lint and auto-fix with Biome |
| `bun run format` | Format with Biome |
| `bun run typecheck` | Type-check with TypeScript |

## 🔧 Contributing

[![contributors](https://contrib.rocks/image?repo=morani20/keythm)](https://github.com/morani20/keythm/graphs/contributors)

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the repo
2. Create a new branch (`git checkout -b improve-feature`)
3. Make the appropriate changes in the files
4. Commit your changes (`git commit -am 'Improve feature'`)
5. Push to the branch (`git push origin improve-feature`)
6. Create a Pull Request

## 🚀 Follow Me

[![GitHub](https://img.shields.io/badge/GitHub-Mohamed%20Rani-181717?style=flat&logo=github&logoColor=white)](https://github.com/morani20)
[![Instagram - Code Map](https://img.shields.io/badge/Instagram-Code%20Map-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/codee_map/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-%2B970592153483-25D366?style=flat&logo=whatsapp&logoColor=white)](https://wa.me/970592153483)

## 📃 Deployment

| Method | Description | Action |
| :----- | :---------- | :----- |
| **🔧 Manual Build** | Create an optimized production build. | `npm run build` |
| **🌐 Netlify (live)** | Deployed at https://keythm-morani.netlify.app | [![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/morani20/keythm) |
| **▲ Vercel** | Alternative host. | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmorani20%2Fkeythm) |

### Environment variables (optional)

The visit counter ("thocks and counting") needs a [Turso](https://turso.tech/) database. **The site works without it** — the counter is just hidden.

```bash
cp .env.example .env.local   # fill DATABASE_URL and DATABASE_AUTH_TOKEN
npx drizzle-kit push         # creates the `stats` table once
```

On Netlify add the same two variables under **Site configuration → Environment variables**.

For more details, check the [Next.js deployment docs](https://nextjs.org/docs/deployment).

## ⭐ Give A Star

If you found this project useful, give it a star to help more people discover it!

## 🌟 Star History

<a href="https://star-history.com/#morani20/keythm&Timeline">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=morani20/keythm&type=Timeline&theme=dark" />
  <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=morani20/keythm&type=Timeline" />
  <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=morani20/keythm&type=Timeline" />
</picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
