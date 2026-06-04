import { Fragment } from 'react'
import { skillCategories } from '../data/skills'

function SkillStars({ level }: { level: number }) {
  return (
    <span className="skill-stars" aria-label={`${level} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`skill-star${i < level ? ' filled' : ''}`}>★</span>
      ))}
    </span>
  )
}

const languages = [
  { name: 'French',  level: 'C1', width: '85%' },
  { name: 'English', level: 'C1', width: '85%' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className="about-content">
        <h2 id="about-title" className="about-headline reveal">
          QA Engineer.<br />
          I break things<br />
          <em>before your users do.</em>
        </h2>

        <div className="skills-grid reveal" aria-label="Technical skills">
          {skillCategories.map(cat => (
            <Fragment key={cat.category}>
              <div className="skill-category">{cat.category}</div>
              {cat.skills.map(skill => (
                <div key={skill.name} className="skill-cell" data-level={skill.level}>
                  <span className="skill-dot" aria-hidden="true" />
                  {skill.name}
                  {/* <SkillStars level={skill.level} /> */}
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <div className="about-stats reveal">
          <div>
            <div className="stat-num">5<span>+</span></div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Industries</div>
          </div>
          <div>
            <div className="stat-num">44<span>%</span></div>
            <div className="stat-label">Pipeline faster — 40 min/run, 3× a day</div>
          </div>
          <div>
            <div className="stat-num">3</div>
            <div className="stat-label">Automation Frameworks mastered</div>
          </div>
        </div>

        <div className="languages reveal">
          <p className="section-label" style={{ marginBottom: '16px' }}>Languages</p>
          <div className="language-list">
            {languages.map(lang => (
              <div key={lang.name} className="language-item">
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
                <div className="language-bar">
                  <div className="language-fill" style={{ width: lang.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="not-doing reveal">
          <p className="section-label" style={{ marginBottom: '16px' }}>What I don't do</p>
          <ul>
            <li>Decorative QA. If the tests have no business value, I say so.</li>
            <li>Claim to master what I know at 30%.</li>
            <li>Sell automation as the answer before understanding the problem.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
