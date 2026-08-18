export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <p className="contact-eyebrow reveal">Open to opportunities</p>
      <h2 id="contact-title" className="contact-headline reveal">
        If quality<br />
        is expensive,<br />
        try bugs.
      </h2>
      <a href="mailto:azouz.ghassen96@outlook.fr" className="magnetic-btn reveal">
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
        <a href={`${import.meta.env.BASE_URL}GhassenAZOUZ-resumé.pdf`} download className="contact-link">Download CV</a>
      </div>
    </section>
  )
}
