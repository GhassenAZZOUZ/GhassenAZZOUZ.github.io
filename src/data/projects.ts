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
}

export const projects: Project[] = [
  {
    id: 'pmu',
    num: '01',
    name: 'PMU Offline Betting',
    category: 'CI/CD · Infrastructure',
    image: `${import.meta.env.BASE_URL}images/project1.jpg`,
    imageFallback: 'https://picsum.photos/seed/pmu/560/420',
    title: 'QA Platform Engineer — PMU (Jan–May 2026)',
    blocks: [
      { label: 'Problem',  text: 'E2E suite taking 90 min on a pipeline that ran 3× a day — QA was consuming 4.5h of CI time daily across 2 teams. No shared visibility on quality trends between sprints.' },
      { label: 'Decision', text: 'Playwright over Cypress: better native parallelisation model, no iframe issues on the betting UI, first-class TypeScript. GitLab CI was already in the stack — no new tooling overhead.' },
      { label: 'Built',    text: 'Suite split across 4 parallel agents with shared fixture state. Quality dashboard tracking PI velocity, pass rate, and flaky test trends. CI/CD training delivered to 6 engineers.' },
      { label: 'Result',   text: 'Runtime: 90 → 50 min (44% faster). 40 min saved per run × 3 runs/day = 2h of CI time recovered daily. Zero reliability regression after the split.' },
    ],
    opinion: 'That pipeline ran 3× a day. I still have the Teams alert that woke me at 3am — it\'s how I knew the optimisation actually mattered.',
    tags: ['Playwright', 'TypeScript', 'GitLab CI', 'SAFe', 'Parallelisation', 'Shell / Bash'],
  },
  {
    id: 'carrefour',
    num: '02',
    name: 'Carrefour E2E Suite',
    category: 'BDD · Retail · API',
    image: `${import.meta.env.BASE_URL}images/project2.png`,
    imageFallback: 'https://picsum.photos/seed/carrefour/560/420',
    title: 'PRISM e-Invoicing QA — Carrefour (Jan 2024–Dec 2025)',
    blocks: [
      { label: 'Problem',  text: '1 200+ XML/UBL invoice validation cases run manually before each release. 3-day regression cycles blocking delivery. No performance baseline for invoice endpoints.' },
      { label: 'Decision', text: 'Karate over REST-assured: BDD syntax readable by business stakeholders, no Java boilerplate, built-in HTML reports, runs inside the existing Maven pipeline. Gatling for perf — same JVM stack, no new runtime.' },
      { label: 'Built',    text: 'Full Karate API test suite across invoice creation, validation, and rejection flows. Gatling scenarios for load and response time benchmarking. GCP BigQuery for test data traceability across environments.' },
      { label: 'Result',   text: 'Manual regression time cut by ~70%. 15+ defects caught pre-production. Invoice response times improved 3× after perf findings were acted on.' },
    ],
    opinion: 'Karate for API testing is widely underrated in the French QA ecosystem. After this project, I recommend it systematically.',
    tags: ['Selenium', 'Cucumber', 'Karate', 'Gatling', 'GCP', 'Jira Xray'],
  },
  {
    id: 'axefinance',
    num: '03',
    name: 'Axe Finance Banking QA',
    category: 'Banking · Automation',
    image: `${import.meta.env.BASE_URL}images/project3.jpg`,
    imageFallback: 'https://picsum.photos/seed/axefinance/560/420',
    title: 'Banking QA Automation — Axe Finance (Jun 2021–Dec 2023)',
    blocks: [
      { label: 'Problem',  text: '4-day manual regression cycle after every deployment on loan origination and management modules. Complex SQL state across 3 environments made test data setup slow and error-prone.' },
      { label: 'Decision', text: 'Katalon Studio — client mandate, not my first choice. Used its built-in SQL executor and Postman-style API layer to cover the most risk with the least friction inside the constraint.' },
      { label: 'Built',    text: '150+ automated test cases across loan origination, approval, and management flows. SQL-based test data setup using mocks and stubs across dev, staging, and UAT. Full defect lifecycle in Jira.' },
      { label: 'Result',   text: 'Regression cycle: 4 days → under 4 hours. 60% automated coverage on critical loan flows.' },
    ],
    opinion: 'I would have avoided Katalon if I could — the client constraint was real. Working around a tool\'s limits teaches you more than working with good ones.',
    tags: ['Katalon Studio', 'SQL Server', 'Postman', 'BDD', 'Jira'],
  },
  {
    id: 'playwright-bdd',
    num: '04',
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
    num: '05',
    name: 'SauceDemo BDD Suite',
    category: 'BDD · Java · Technical Test',
    image: `${import.meta.env.BASE_URL}images/project4.png`,
    imageFallback: 'https://picsum.photos/seed/saucedemo/560/420',
    title: 'E2E BDD Suite — SauceDemo (Technical Test · LINXEA)',
    blocks: [
      { label: 'Context',  text: 'Technical test for LINXEA. Requirement: build an automated E2E suite against the SauceDemo app with no constraints on tooling.' },
      { label: 'Decision', text: 'Java + Selenium + Cucumber. Maven for dependency management and CI-ready execution. BDD chosen deliberately — feature files as living documentation a non-technical reviewer can read.' },
      { label: 'Built',    text: 'Full coverage of login, product catalogue, cart, and checkout flows. Page Object Model structure. Gherkin scenarios written to be readable without technical context.' },
      { label: 'Note',     text: 'Source is public — the structure shows how I approach a greenfield automation project from scratch.' },
    ],
    opinion: 'A technical test is a constrained problem: no existing codebase, no context, time pressure. I treat the structure and readability of the solution as part of the answer.',
    tags: ['Java', 'Selenium', 'Cucumber', 'Maven', 'BDD', 'Page Object Model'],
    githubUrl: 'https://github.com/GhassenAZZOUZ/saucedemo',
  },
]
