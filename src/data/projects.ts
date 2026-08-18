export interface CaseBlock {
  label: string
  text: string
}

export interface Project {
  id: string
  num: string
  name: string
  category: string
  image: string
  imageFallback: string
  title: string
  blocks: CaseBlock[]
  opinion: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 'playwright-bdd',
    num: '01',
    name: 'Playwright BDD Starter',
    category: 'Open Source · Active',
    image: `${import.meta.env.BASE_URL}images/project4.png`,
    imageFallback: 'https://picsum.photos/seed/training/560/420',
    title: 'Playwright BDD Starter Framework — Open Source (ongoing)',
    blocks: [
      { label: 'Problem',  text: 'Every new Playwright + BDD project starts with the same 2-day setup: wire Cucumber to Playwright, configure TypeScript, get CI running, set up HTML reports. No production-quality starter existed for this combination.' },
      { label: 'Decision', text: 'Page Object Model for maintainability. cucumber-playwright for native BDD integration — not a wrapper, no abstraction leaks. GitHub Actions for zero-config CI out of the box.' },
      { label: 'Built',    text: 'POM structure, parallel execution config, Allure + HTML reports, GitHub Actions pipeline, TypeScript strict mode throughout. Used as the base for 2 client projects.' },
      { label: 'Status',   text: 'Actively maintained. Updated as the Playwright and Cucumber ecosystems evolve.' },
    ],
    opinion: 'Born out of frustration. It\'s not a portfolio piece — I actually use it.',
    tags: ['Playwright', 'TypeScript', 'Cucumber', 'GitHub Actions', 'Page Object Model'],
    githubUrl: 'https://github.com/GhassenAZZOUZ/PlaywrightBDD-framework',
  },
  {
    id: 'selenium-bdd',
    num: '02',
    name: 'SauceDemo BDD Suite',
    category: 'BDD · Java · Technical Test',
    image: `${import.meta.env.BASE_URL}images/project4.png`,
    imageFallback: 'https://picsum.photos/seed/saucedemo/560/420',
    title: 'E2E BDD Suite — SauceDemo (Technical Test)',
    blocks: [
      { label: 'Context',  text: 'Technical test for a client interview. Requirement: build an automated E2E suite against the SauceDemo app with no constraints on tooling.' },
      { label: 'Decision', text: 'Java + Selenium + Cucumber. Maven for dependency management and CI-ready execution. BDD chosen deliberately — feature files as living documentation a non-technical reviewer can read.' },
      { label: 'Built',    text: 'Full coverage of login, product catalogue, cart, and checkout flows. Page Object Model structure. Gherkin scenarios written to be readable without technical context.' },
      { label: 'Note',     text: 'Source is public — the structure shows how I approach a greenfield automation project from scratch.' },
    ],
    opinion: 'A technical test is a constrained problem: no existing codebase, no context, time pressure. I treat the structure and readability of the solution as part of the answer.',
    tags: ['Java', 'Selenium', 'Cucumber', 'Maven', 'BDD', 'Page Object Model'],
    githubUrl: 'https://github.com/GhassenAZZOUZ/saucedemo',
  },
  {
    id: 'testify',
    num: '03',
    name: 'Testify — QA Test Hub',
    category: 'Product · EdTech · QA',
    image: `${import.meta.env.BASE_URL}images/project5.png`,
    imageFallback: 'https://picsum.photos/seed/testify/560/420',
    title: 'Testify — Hands-On QA Learning Platform (ongoing)',
    blocks: [
      { label: 'Problem',  text: 'QA engineers learn tools like Playwright, Karate, or Gatling from scattered docs and disconnected tutorials, with no structured, progress-tracked way to practice real scenarios.' },
      { label: 'Decision', text: 'Supabase over a custom backend — Postgres, auth, and storage in one, no infra to run myself. React + Vite + Tailwind for a fast, iterable frontend; all app state in React Context rather than pulling in a state library for a scope this size.' },
      { label: 'Built',    text: '20+ scenario-based exercises across E2E (Playwright, Selenium), API (Karate, Postman), performance (Gatling, NeoLoad), and CI/CD (GitHub Actions, Jenkins), each with hints, difficulty tiers, and acceptance criteria. Progress tracking, streak calendar, bookmarks, PDF certificates on completion, and a Pro tier gated via Stripe.' },
      { label: 'Result',   text: 'Live product with working auth, submissions, and a full free/Pro split — built and shipped solo, end to end from schema to deployment.' },
    ],
    opinion: 'I built the tool I wished existed when I was learning these frameworks myself.',
    tags: ['React', 'Vite', 'Supabase', 'Tailwind CSS', 'Stripe', 'Vercel'],
    liveUrl: 'https://qa-devops-lab.vercel.app/',
  },
  {
    id: 'nutriplan',
    num: '04',
    name: 'NutriPlan',
    category: 'Product · Mobile · Nutrition',
    image: `${import.meta.env.BASE_URL}images/project6.png`,
    imageFallback: 'https://picsum.photos/seed/nutriplan/560/420',
    title: 'NutriPlan — Adaptive Meal Planning (ongoing)',
    blocks: [
      { label: 'Problem',  text: 'Generic calorie targets and static meal plans ignore individual metabolism and don\'t adapt as actual weight trends diverge from the plan — most apps just track, they don\'t correct.' },
      { label: 'Decision', text: 'FastAPI + Postgres for the nutrition engine, Expo/React Native for a single iOS/Android codebase. Greedy per-slot generation with portion rebalancing instead of an ILP solver — the candidate pool is small, sub-200ms matters, and day-to-day variety matters as much as macro precision.' },
      { label: 'Built',    text: 'Katch-McArdle/Mifflin-St Jeor BMR engine with safety floors on calories and fat. Adaptive calorie correction driven by linear regression on weight trend (not raw deltas) rather than one bad weigh-in triggering a swing, bounded to ±10% with a 7-day cooldown. Cascading recipe sourcing (seed data → Spoonacular → LLM generation) with Atwater-equation validation on any LLM-generated macros, plus barcode lookup via Open Food Facts.' },
      { label: 'Result',   text: 'Meal plans measured at under 7% deviation from target daily calories — below the noise floor of nutrition data itself. 68 backend tests covering the nutrition engine.' },
    ],
    opinion: 'The adaptive loop was the interesting part — a plan is only as good as its ability to correct itself when reality disagrees.',
    tags: ['FastAPI', 'SQLModel', 'PostgreSQL', 'Expo', 'React Native', 'Docker'],
  },
]
