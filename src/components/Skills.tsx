import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <div className="section-header reveal" style={{ paddingBottom: 0 }}>
        <h2 id="skills-title" className="section-title">Skills</h2>
      </div>
      <div className="skills-grid reveal">
        {skillCategories.map(cat => (
          <div key={cat.category} className="skills-cat">
            <div className="skills-cat-title">{cat.category}</div>
            <div className="skills-cat-list">
              {cat.skills.map(skill => (
                <div key={skill.name} className="skills-cat-item">
                  <span className="skills-cat-dot" aria-hidden="true" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
