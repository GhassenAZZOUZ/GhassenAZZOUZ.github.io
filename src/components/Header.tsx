export default function Header() {
  return (
    <header id="header">
      <div className="header-logo">
        <span className="header-logo-name">GHASSEN AZOUZ</span>
        <span className="header-logo-role">QA Automation Engineer</span>
      </div>
      <nav aria-label="Primary navigation">
        <a href="#projects">Work</a>
        <a href="#impact">Impact</a>
        <a href="#approach">Approach</a>
        <a href="#report">Report</a>
        <a href="#skills">Skills</a>
        <a href="mailto:azouz.ghassen96@outlook.fr" className="header-cta">Contact <span>↗</span></a>
      </nav>
    </header>
  )
}
