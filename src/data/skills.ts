export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  category: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'E2E & UI Testing',
    skills: [
      { name: 'Playwright / TypeScript', level: 5 },
      { name: 'Selenium WebDriver', level: 5 },
    ],
  },
  {
    category: 'API & Performance',
    skills: [
      { name: 'Karate (API Testing)', level: 4 },
      { name: 'Gatling (Performance)', level: 2 },
    ],
  },
  {
    category: 'Test Design',
    skills: [
      { name: 'BDD / Cucumber / Gherkin', level: 5 },
      { name: 'Page Object Model', level: 4 },
    ],
  },
  {
    category: 'CI/CD & DevOps',
    skills: [
      { name: 'Jenkins / GitLab CI', level: 4 },
      { name: 'Git / Versioning', level: 4 },
      { name: 'Azure DevOps', level: 4 },
      { name: 'Google Cloud Platform', level: 4 },
    ],
  },
  {
    category: 'Test Management & Languages',
    skills: [
      { name: 'Jira / Xray', level: 4 },
      { name: 'Java / Bash', level: 3 },
      { name: 'TypeScript', level: 4 },
    ],
  },
]
