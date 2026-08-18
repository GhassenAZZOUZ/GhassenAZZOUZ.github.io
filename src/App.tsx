import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Projects from './components/Projects'
import Impact from './components/Impact'
import Approach from './components/Approach'
import Report from './components/Report'
import Skills from './components/Skills'
import Availability from './components/Availability'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          revealObserver.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 4) * 0.08 + 's'
      revealObserver.observe(el)
    })

    return () => revealObserver.disconnect()
  }, [])

  return (
    <div className="site-wrap">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <Impact />
        <Approach />
        <Report />
        <Skills />
        <Availability />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
