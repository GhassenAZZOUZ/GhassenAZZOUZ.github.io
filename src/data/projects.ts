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
    image: '/images/project1.jpg',
    imageFallback: 'https://picsum.photos/seed/pmu/560/420',
    title: 'QA Platform Engineer — PMU (Jan–May 2026)',
    descriptionHtml: `Technical QA reference across multiple product teams on 2 high-availability offline betting platforms. Owned Playwright test infrastructure, cut E2E suite runtime by <strong>44% (90 → 50 min)</strong> via parallelisation across 4 agents, and built quality metrics dashboards tracking PI velocity across 2 QA teams. Mentored QA engineers and delivered CI/CD training on versioning, pipeline integration, and alerting.`,
    tags: ['Playwright', 'TypeScript', 'GitLab CI', 'SAFe', 'Parallelisation', 'Shell / Bash'],
  },
  {
    id: 'carrefour',
    num: '02',
    name: 'Carrefour E2E Suite',
    category: 'BDD · Retail · API',
    image: '/images/project2.png',
    imageFallback: 'https://picsum.photos/seed/carrefour/560/420',
    title: 'PRISM e-Invoicing QA — Carrefour (Jan 2024–Dec 2025)',
    descriptionHtml: `QA Automation Lead on the PRISM electronic invoicing project (XML/UBL). Automated <strong>1 200+ API test cases</strong> with Karate — reducing manual regression time by <strong>~70%</strong> and catching <strong>15+</strong> pre-production defects. Improved e-invoicing response times <strong>3×</strong> via Gatling performance tests. Sustained <strong>85%</strong> regression coverage across 3 sprint cycles with zero production regressions. Leveraged GCP (BigQuery, Cloud SQL) for test data management.`,
    tags: ['Selenium', 'Cucumber', 'Karate', 'Gatling', 'GCP', 'Jira Xray'],
  },
  {
    id: 'axefinance',
    num: '03',
    name: 'Axe Finance Banking QA',
    category: 'Banking · Automation',
    image: '/images/project3.jpg',
    imageFallback: 'https://picsum.photos/seed/axefinance/560/420',
    title: 'Banking QA Automation — Axe Finance (Jun 2021–Dec 2023)',
    descriptionHtml: `QA Automation Engineer on loan origination and management modules. Designed <strong>150+ automated test cases</strong> with Katalon Studio (60% regression coverage) and cut post-deployment regression cycles from <strong>4 days to under 4 hours</strong>. Managed test data via SQL Server across 3 environments using mocks and stubs, and tracked defects end-to-end in Jira.`,
    tags: ['Katalon Studio', 'SQL Server', 'Postman', 'BDD', 'Jira'],
  },
  {
    id: 'playwright-bdd',
    num: '04',
    name: 'Playwright BDD Starter',
    category: 'Open Source · Framework',
    image: '/images/project4.png',
    imageFallback: 'https://picsum.photos/seed/training/560/420',
    title: 'Playwright BDD Starter Framework — Open Source',
    descriptionHtml: `Open-source end-to-end test framework built with Playwright, TypeScript, and BDD/Cucumber. Features GitHub Actions CI integration, parallel execution, and HTML reporting — designed as a production-ready starter kit for QA teams adopting modern automation practices.`,
    tags: ['Playwright', 'TypeScript', 'Cucumber', 'GitHub Actions', 'Page Object Model'],
  },
]
