export interface Project {
  id: string
  num: string
  name: string
  category: string
  image: string
  imageFallback: string
  title: string
  descriptionHtml: string
  tags: string[]
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
    descriptionHtml: `Technical QA reference across multiple product teams on 2 high-availability offline betting platforms. Owned Playwright test infrastructure, cut E2E suite runtime by <strong>44% (90 → 50 min)</strong> via parallelisation across 4 agents, and built quality metrics dashboards tracking PI velocity across 2 QA teams. Mentored QA engineers and delivered CI/CD training on versioning, pipeline integration, and alerting.<br/><br/><em>That pipeline ran 3× a day. I still have the Teams alert that woke me at 3am — it's how I knew the optimisation actually mattered.</em>`,
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
    descriptionHtml: `QA Automation Lead on the PRISM electronic invoicing project (XML/UBL). Automated <strong>1 200+ API test cases</strong> with Karate, catching <strong>15+ pre-production defects</strong> and cutting manual regression time by <strong>~70%</strong>. Ran Gatling performance tests that improved e-invoicing response times <strong>3×</strong>. Leveraged GCP (BigQuery, Cloud SQL) for test data management.<br/><br/><em>Karate for API testing is widely underrated in the French QA ecosystem. After this project, I recommend it systematically.</em>`,
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
    descriptionHtml: `QA Automation Engineer on loan origination and management modules. Designed <strong>150+ automated test cases</strong> with Katalon Studio (60% regression coverage) and cut post-deployment regression cycles from <strong>4 days to under 4 hours</strong>. Managed test data via SQL Server across 3 environments using mocks and stubs, and tracked defects end-to-end in Jira.<br/><br/><em>I would have avoided Katalon if I could — the client constraint was real. Working around a tool's limits teaches you more than working with good ones.</em>`,
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
    descriptionHtml: `Born out of frustration: I couldn't find a serious Playwright + BDD starter for production use. So I built one. It's not a portfolio piece — I use it as the base for client projects and keep updating it as the ecosystem evolves. No metrics here, just something I maintain because I think it's useful.`,
    tags: ['Playwright', 'TypeScript', 'Cucumber', 'GitHub Actions', 'Page Object Model'],
  },
]
