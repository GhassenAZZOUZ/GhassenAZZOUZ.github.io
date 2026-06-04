import { useEffect, useRef } from 'react'

export default function Contact() {
  const btnRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect()
      const x = e.clientX - r.left  - r.width  / 2
      const y = e.clientY - r.top   - r.height / 2
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`
    }
    const onLeave = () => {
      btn.style.transform = 'translate(0,0)'
      btn.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1), color .3s'
    }
    const onEnter = () => {
      btn.style.transition = 'transform .1s linear, color .3s'
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    btn.addEventListener('mouseenter', onEnter)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
      btn.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <section id="contact" aria-labelledby="contact-title">
      <p className="contact-eyebrow reveal">Open to opportunities</p>
      <h2 id="contact-title" className="contact-headline reveal">
        Let's build<br />
        <em>quality</em><br />
        together.
      </h2>
      <a
        ref={btnRef}
        href="mailto:azouz.ghassen96@outlook.fr"
        className="magnetic-btn reveal"
        id="cta-btn"
      >
        <span>Contact me</span>
        <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-links reveal">
        <a href="mailto:azouz.ghassen96@outlook.fr" className="contact-link">
          azouz.ghassen96@outlook.fr
        </a>
        <a
          href="https://linkedin.com/in/ghassen-azzouz96"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a href={`${import.meta.env.BASE_URL}cv.pdf`} download className="contact-link">Download CV</a>
      </div>
    </section>
  )
}
