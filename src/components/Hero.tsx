import { useState, useEffect } from 'react'

const tags = ['Playwright', 'TypeScript', 'BDD / Cucumber', 'CI/CD', 'ISTQB Certified', 'Agility', '5+ yrs exp.']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-left">
        <p className="hero-eyebrow">Available · Paris, France · Freelance · Open to contract</p>
        <h1 className="hero-name">
          <div className="line"><span className={`word${visible ? ' visible' : ''}`}>Ghassen</span></div>
          <div className="line"><span className={`word${visible ? ' visible' : ''}`}>Azouz</span></div>
        </h1>
        <p className="hero-intro">
          I break things before your users do. Five years building test infrastructure across banking, retail and gaming.
        </p>
        <div className="hero-tags" aria-label="Skills">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <div className="hero-meta-label">Based</div>
            <div className="hero-meta-value">Paris, FR</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-label">Status</div>
            <div className="hero-meta-value accent">Available</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-label">Certified</div>
            <div className="hero-meta-value">ISTQB CTFL</div>
          </div>
          <div className="hero-meta-item">
            <div className="hero-meta-label">Languages</div>
            <div className="hero-meta-value">FR · EN · AR</div>
          </div>
        </div>
      </div>
      <div className="hero-right" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}images/hero.png`}
          alt=""
          onError={e => {
            const img = e.target as HTMLImageElement
            img.src = 'https://picsum.photos/seed/hero/900/1200'
            img.onerror = null
          }}
        />
        <div className="hero-stamp">QA</div>
      </div>
    </section>
  )
}
