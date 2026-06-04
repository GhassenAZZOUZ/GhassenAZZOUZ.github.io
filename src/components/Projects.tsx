import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-header reveal">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 id="projects-title" className="section-title">Projects</h2>
        </div>
        <span className="section-count" aria-label={`${projects.length} projects`}>
          ({String(projects.length).padStart(2, '0')})
        </span>
      </div>

      <ul className="project-list">
        {projects.map(p => {
          const isOpen = openId === p.id
          return (
            <li key={p.id} className={`project-item reveal${isOpen ? ' open' : ''}`}>
              <div
                className="project-row"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => toggle(p.id)}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggle(p.id)}
              >
                <span className="project-num">{p.num}</span>
                <span className="project-name">{p.name}</span>
                <span className="project-cat">{p.category}</span>
                <div className="project-arrow" aria-hidden="true">↗</div>
              </div>
              <div className="project-expand" aria-hidden={!isOpen}>
                <div className="project-expand-inner">
                  <div className="project-expand-img">
                    <img
                      src={p.image}
                      alt={p.name}
                      onError={e => {
                        const img = e.target as HTMLImageElement
                        img.src = p.imageFallback
                        img.onerror = null
                      }}
                    />
                  </div>
                  <div className="project-expand-text">
                    <h4>{p.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: p.descriptionHtml }} />
                    <div className="project-tags">
                      {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
