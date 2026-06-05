# Ghassen Azouz — Portfolio

> QA Automation Engineer · Paris · Open to contract  
> **Live → [ghassenazouz.vercel.app](https://ghassenazouz.vercel.app)**  
> Mirror → [ghassenazzouz.github.io/monportfolio](https://ghassenazzouz.github.io/monportfolio/)

---

## Stack

| Layer | Choice | Why |
|---|---|---|
| UI | React 19 + TypeScript | Component isolation, typed data |
| Build | Vite 6 | Sub-second HMR, clean output |
| Styles | Vanilla CSS | Zero runtime, full control |
| Deploy | Vercel (primary) + GitHub Pages (mirror) | Both auto-deploy on push to `main` |

No CSS framework. No routing library. No state manager. Everything that moves is a `useEffect` or a CSS animation.

---

## Project structure

```
src/
├── components/         # One file per section
│   ├── Cursor.tsx      # Custom animated cursor (desktop only)
│   ├── Header.tsx      # Fixed nav with scroll glassmorphism
│   ├── Hero.tsx        # Name slide-up + parallax image
│   ├── Ticker.tsx      # Auto-looping stats strip
│   ├── Projects.tsx    # Expandable project list
│   ├── About.tsx       # Skills grid, stats, languages
│   ├── Contact.tsx     # Magnetic CTA button
│   └── Footer.tsx
├── data/
│   ├── projects.ts     # Add a project here → renders automatically
│   └── skills.ts       # Skill categories and proficiency levels
├── App.tsx             # Mounts components, runs IntersectionObserver reveals
├── main.tsx
└── index.css           # All styles — no CSS modules
public/
├── images/             # Static assets (hero, project screenshots)
└── GhassenAZOUZ-resumé.pdf
```

---

## Local development

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview dist/ locally
```

---

## Deployment

| Target | Trigger | Base path | URL |
|---|---|---|---|
| Vercel | push to `main` | `/` | ghassenazouz.vercel.app |
| GitHub Pages | push to `main` | `/monportfolio/` | ghassenazzouz.github.io/monportfolio/ |
| PR preview | open PR → `main` | `/pr-{n}/` | ghassenazzouz.github.io/pr-{n}/ |

Base path is resolved at build time via `process.env.VERCEL` (Vercel) or `BASE_PATH` env var (GitHub Actions). See [`vite.config.ts`](vite.config.ts).

### GitHub Actions workflows

| File | Runs on | Does |
|---|---|---|
| [`deploy.yml`](.github/workflows/deploy.yml) | push to `main` or manual | Builds + deploys to `gh-pages` branch |
| [`pr.yml`](.github/workflows/pr.yml) | PR opened / updated / closed | Builds preview, posts URL as PR comment, cleans up on close |

---

## Adding a project

Open [`src/data/projects.ts`](src/data/projects.ts) and append an object to the `projects` array:

```ts
{
  id: 'my-project',
  num: '05',
  name: 'Project Name',
  category: 'Category · Tags',
  image: `${import.meta.env.BASE_URL}images/my-project.png`,
  imageFallback: 'https://picsum.photos/seed/my-project/560/420',
  title: 'Full title — Context (dates)',
  descriptionHtml: `Description with optional <strong>bold metrics</strong>.<br/><br/><em>Personal take on it.</em>`,
  tags: ['Tool', 'Framework'],
  githubUrl: 'https://github.com/...',  // optional
}
```

Drop the image in `public/images/`. That's it.
