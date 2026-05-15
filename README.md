# sajalmishra.com

Personal portfolio site for [Sajal Kumar Mishra](https://www.linkedin.com/in/sajal-kumar-mishra/) — Senior Software Developer.

Built with Next.js 16, statically exported, and deployable to S3/CloudFront.

---

## Tech Stack

- **Framework** — Next.js 16 (App Router, TypeScript)
- **Styling** — Tailwind CSS v4
- **Components** — shadcn/ui (base-ui variant)
- **Animations** — Framer Motion
- **Theme** — next-themes (dark by default, light/dark toggle)
- **Blog** — MDX via next-mdx-remote + gray-matter
- **Icons** — lucide-react + custom brand SVGs
- **Fonts** — Inter + JetBrains Mono (via `next/font/google`)
- **Output** — Static export (`out/`) for S3/CloudFront deployment

---

## Project Structure

```
src/
  app/                    # Routes (App Router)
  components/
    layout/               # Navbar, Footer
    sections/             # Hero, About, Experience, Skills, cards, ContactForm
    ui/                   # shadcn components
    icons.tsx             # Brand SVGs (GitHub, LinkedIn, X)
    ThemeToggle.tsx
  config/
    site.ts               # Name, email, social URLs — edit this first
  data/
    projects.ts           # Project list — add new projects here
    skills.ts             # Skill categories — add new skills here
  lib/
    mdx.ts                # Blog post utilities
content/
  blog/                   # Drop .mdx files here to publish posts
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Commands

```bash
npm run dev        # Development server
npm run build      # Static export → out/
npx serve out      # Preview the exported site locally
npm run lint       # ESLint
```

---

## Adding Content

### New project

Edit [`src/data/projects.ts`](src/data/projects.ts) and add an entry to the `projects` array:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "What it does.",
  tags: ["React", "TypeScript"],
  liveUrl: "https://my-project.sajalmishra.com",
  githubUrl: "https://github.com/MSAJAL07/my-project",
}
```

### New blog post

Create a file in `content/blog/my-post.mdx`:

```mdx
---
title: "Post Title"
date: "2026-05-15"
description: "One sentence summary."
tags: ["tag"]
---

Post content here...
```

It will appear at `/blog/my-post` automatically — no code changes needed.

### New skill

Edit [`src/data/skills.ts`](src/data/skills.ts) and add to an existing category or create a new one.

### Site metadata

All name, URL, and social links live in [`src/config/site.ts`](src/config/site.ts). Update `url` before deploying.

---

## Deployment

The build produces a fully static `out/` directory. Planned deployment: **AWS S3 + CloudFront**.

```bash
npm run build   # generates out/
# then sync out/ to your S3 bucket
```

The contact form currently logs to the console — wire up a backend (API Gateway, Resend, etc.) in `src/components/sections/ContactForm.tsx` when ready.

---

## Links

- GitHub: [github.com/MSAJAL07](https://github.com/MSAJAL07)
- LinkedIn: [linkedin.com/in/sajal-kumar-mishra](https://www.linkedin.com/in/sajal-kumar-mishra/)
- Twitter/X: [@msajaldev](https://twitter.com/msajaldev)
