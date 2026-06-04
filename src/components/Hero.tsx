import { useState, useEffect, useRef } from 'react'

const tags = ['Playwright', 'BDD / Cucumber', 'CI/CD', 'TypeScript', 'ISTQB Certified', '5+ yrs exp.']

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handler = () => {
      if (imgRef.current)
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section id="hero" aria-label="Introduction">
      <div className="hero-left">
        <p className="hero-eyebrow">Available · Paris, France · Freelance</p>
        <h1 className="hero-name">
          <div className="line"><span className={`word${visible ? ' visible' : ''}`}>Ghassen</span></div>
          <div className="line"><span className={`word${visible ? ' visible' : ''}`}>Azouz</span></div>
        </h1>
        <div className="hero-tags" aria-label="Skills">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </div>
      <div className="hero-right" aria-hidden="true">
        <div className="hero-number">QA</div>
        <img
          ref={imgRef}
          src="/images/hero.png"
          alt="Ghassen Azouz"
          onError={e => {
            const img = e.target as HTMLImageElement
            img.src = 'https://picsum.photos/seed/hero/900/1200'
            img.onerror = null
          }}
        />
      </div>
    </section>
  )
}
