
# La Bella Cucina — Restaurant Website

A polished, fully responsive Italian restaurant website built with React, TypeScript, Vite, and Tailwind CSS.

## Overview

La Bella Cucina is a multi-page restaurant website featuring a rich hero section, a browsable menu, an about page with team profiles, and a validated reservation/contact form. All content is static — no backend required.

## Features

- **Home** — Full-viewport hero with background image, featured dishes grid, testimonials, and a reservation CTA banner
- **Menu** — Category-filtered dish cards (Starters, Mains, Desserts, Drinks) with images, descriptions, prices, and badges
- **About** — Restaurant story, key stats, team profiles, and brand values
- **Contact / Reserve** — Validated reservation form (react-hook-form + Zod) with party size, date picker, and a success confirmation state
- **Navbar** — Fixed, transparent over the hero, solid on scroll, with a mobile hamburger menu
- **Footer** — Address, opening hours, quick links, and social icons
- Fully responsive — mobile-first, breakpoints at `sm`, `md`, and `lg`
- Smooth hover animations and transitions throughout

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tooling
- **Tailwind CSS 3** — utility-first styling
- **React Router DOM 7** — client-side routing
- **react-hook-form** + **Zod** + **@hookform/resolvers** — form validation
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── components/
│   ├── Footer.tsx
│   ├── MenuCard.tsx
│   ├── Navbar.tsx
│   └── SectionHeading.tsx
├── data/
│   └── menuData.ts        # Static menu content
├── pages/
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   └── MenuPage.tsx
├── types.ts               # Shared TypeScript types
├── App.tsx                # Route definitions
├── main.tsx               # React entry point
└── index.css              # Tailwind directives
```

## Environment Variables

No environment variables are required for the base site. The Supabase client (`src/lib/supabase.ts`) is scaffolded but not used — it will only activate if `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set in `.env.local`.
  