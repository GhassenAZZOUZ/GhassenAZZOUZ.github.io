import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Projects from './components/Projects'
import About from './components/About'
import Content from './components/Content'
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
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <About />
        {/* <Content /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
