# Portfolio — CLAUDE.md

Personal portfolio site for Sajal Kumar Mishra. Statically exported Next.js site, deployable to S3/CloudFront.

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui — **base-ui variant** (`@base-ui/react`) |
| Animations | Framer Motion |
| Theme | next-themes (dark by default) |
| Blog | next-mdx-remote + gray-matter |
| Icons | lucide-react + custom brand SVGs |
| Fonts | Inter (body), JetBrains Mono (code/accents) via `next/font/google` |

---

## Critical Gotchas

### 1. shadcn Button has no `asChild`
This project uses the **base-ui variant** of shadcn, which wraps `@base-ui/react/button`. It does **not** support the `asChild` prop.

**Wrong:**
```tsx
<Button asChild><Link href="/foo">Click</Link></Button>
```
**Right:**
```tsx
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

<Link href="/foo" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>Click</Link>
```

### 2. No brand icons in lucide-react
This version of lucide-react removed `Github`, `Linkedin`, `Twitter`. Use the custom SVG components in `src/components/icons.tsx`:
```tsx
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
```

### 3. Static export constraints
- `output: "export"` is set — **no server-side APIs, no `getServerSideProps`**, no dynamic routes without `generateStaticParams`.
- Any new dynamic route (`/blog/[slug]`, etc.) must export `generateStaticParams`.
- Images must use `unoptimized: true` (already configured).

### 4. Blog: drop-in MDX
Place `.mdx` files in `content/blog/`. Required frontmatter:
```yaml
---
title: "Post title"
date: "YYYY-MM-DD"
description: "One sentence summary."
tags: ["tag1", "tag2"]
---
```
No code changes needed — `src/lib/mdx.ts` reads the directory automatically.

---

## File Structure

```
src/
  app/
    layout.tsx          # Root layout: fonts, ThemeProvider, Navbar, Footer
    page.tsx            # Home: Hero → About → Experience → Skills → Projects strip
    projects/page.tsx   # All projects grid
    blog/
      page.tsx          # Blog listing
      [slug]/page.tsx   # Individual post (MDX rendered via next-mdx-remote)
    contact/page.tsx    # Contact form (console.log only — no backend yet)
  components/
    icons.tsx           # Brand SVG icons: GitHubIcon, LinkedInIcon, XIcon
    ThemeToggle.tsx     # Dark/light toggle (client component)
    layout/
      Navbar.tsx        # Sticky nav, mobile menu
      Footer.tsx        # Social links + copyright
    sections/
      Hero.tsx          # Landing hero with CTA buttons and social links
      About.tsx         # Bio paragraph + quick-facts card
      Experience.tsx    # Work history timeline (data hardcoded from resume)
      Skills.tsx        # Skill badges grouped by category
      ProjectCard.tsx   # Reusable card used on home + /projects
      BlogCard.tsx      # Reusable card used on /blog
      ContactForm.tsx   # Client component form (submit → console.log)
    ui/                 # shadcn components (auto-generated, do not hand-edit)
  config/
    site.ts             # ← Single source of truth: name, email, socials, URL
  data/
    projects.ts         # ← Add/remove projects here (array of Project objects)
    skills.ts           # ← Add/remove skills here (array of SkillCategory)
  lib/
    mdx.ts              # getAllPosts() / getPostBySlug() — reads content/blog/
    utils.ts            # cn() helper
content/
  blog/
    hello-world.mdx     # Example post — drop new .mdx files here
```

---

## Data Files — How to Extend

### Add a project (`src/data/projects.ts`)
```ts
{
  id: "unique-kebab-id",
  title: "Project Name",
  description: "One or two sentence description.",
  tags: ["React", "TypeScript"],
  liveUrl: "https://yourproject.com",   // optional
  githubUrl: "https://github.com/MSAJAL07/repo", // optional
  thumbnail: "/images/project.png",     // optional
}
```

### Add a skill category (`src/data/skills.ts`)
```ts
{ category: "DevOps", skills: ["Docker", "AWS", "CI/CD"] }
```

### Update site metadata (`src/config/site.ts`)
All social links, name, description, and the production URL live here. Update `url` before deploying.

---

## Commands

```bash
npm run dev        # Local dev server (http://localhost:3000)
npm run build      # Static export → out/
npx serve out      # Preview the exported site locally
npm run lint       # ESLint
```

---

## Deployment (planned — not yet set up)

Static export (`out/`) will be uploaded to an S3 bucket and served via CloudFront. No backend services currently. The contact form submit handler (`ContactForm.tsx`) logs to console — wire up an API endpoint or email service when ready.

---

## Content Source of Truth

All content is derived from Sajal's resume and GitHub profile. Do not invent experience, skills, or projects. If something is genuinely unknown, add a `// TODO:` comment rather than fabricating it.

- Resume: `resume.pdf` (in project root, gitignored)
- GitHub: https://github.com/MSAJAL07
- LinkedIn: https://www.linkedin.com/in/sajal-kumar-mishra/
