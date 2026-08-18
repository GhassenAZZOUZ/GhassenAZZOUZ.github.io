import { useState } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>('playwright-bdd')

  function toggle(id: string) {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="section-header reveal">
        <div>
          <p className="hero-eyebrow" style={{ marginBottom: 12 }}>Selected Work</p>
          <h2 id="projects-title" className="section-title">Projects</h2>
        </div>
        <p className="section-note">Four projects. Each one states the problem, the decision behind the tooling, and what shipped.</p>
      </div>

      <ul className="project-list">
        {projects.map(p => {
          const isOpen = openId === p.id
          return (
            <li key={p.id} className="project-item reveal" data-open={isOpen || undefined}>
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
                <div className="project-arrow" aria-hidden="true">{isOpen ? '−' : '+'}</div>
              </div>
              <div className="project-expand" aria-hidden={!isOpen}>
                <div className="project-expand-inner">
                  <div className="project-expand-text">
                    <h4>{p.title}</h4>
                    <div className="case-study">
                      {p.blocks.map(block => (
                        <div key={block.label} className="case-block">
                          <span className="case-label">{block.label}</span>
                          <span className="case-text">{block.text}</span>
                        </div>
                      ))}
                    </div>
                    {p.opinion && (
                      <div className="project-opinion">
                        <span className="project-opinion-text">{p.opinion}</span>
                      </div>
                    )}
                  </div>
                  <div className="project-media">
                    <div className="project-media-img">
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
                    <div className="project-tags">
                      {p.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                    <div className="project-links">
                      {p.githubUrl && (
                        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="project-github-link">
                          View on GitHub ↗
                        </a>
                      )}
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="project-github-link">
                          View Live ↗
                        </a>
                      )}
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
