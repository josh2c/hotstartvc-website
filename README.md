# HotStart VC

Website for HotStart VC — a venture capital fund backing celebrity-founded consumer brands.

Built with Next.js, React, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Fonts:** Inter via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Page sections (hero, portfolio carousel, team board, etc.)
│   └── ui/           # Reusable components (buttons, cards, scroll animations)
├── lib/              # Data files and utilities
public/               # Static assets (images, logos)
```

## Key Pages

- `/` — Landing page
- `/about` — About HotStart VC
- `/portfolio` — Portfolio companies
- `/team` — Team members
- `/blog` — Blog with individual post pages
- `/contact` — Contact form
- `/hotstart-angels` — Angel investor program

## Build

```bash
npm run build
```

All pages are statically generated at build time.
