const principles = [
  'Understand the problem before selling automation as the answer.',
  'Feature files as living documentation a non-technical reviewer can read.',
  'Structure and readability are part of the answer, not an afterthought.',
]

const notDoing = [
  'Decorative QA. If the tests have no business value, I say so.',
  'Claim to master what I know at 30%.',
  'Sell automation as the answer before understanding the problem.',
]

const languages = [
  { name: 'French', level: 'C1', width: '85%' },
  { name: 'English', level: 'C1', width: '85%' },
  { name: 'Arabic', level: 'Native', width: '100%' },
]

export default function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title">
      <div className="approach-left reveal">
        <h2 id="approach-title" className="section-title">Approach</h2>
        <p className="approach-bio">
          Started in QA by accident, stayed by conviction. Five years across banking, retail, and gaming
          taught me that automation without strategy is just expensive maintenance. I build test
          infrastructure the same way I'd build product: with clear ownership, measurable outcomes,
          and zero tolerance for tests that pass but don't protect.
        </p>
        <div className="approach-list">
          {principles.map((text, i) => (
            <div key={i} className="approach-list-item">
              <span className="approach-list-num">{String(i + 1).padStart(2, '0')}</span>
              <p className="approach-list-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="approach-right">
        <div className="not-doing reveal">
          <p className="not-doing-label">What I don't do</p>
          <ul>
            {notDoing.map(text => <li key={text}>{text}</li>)}
          </ul>
        </div>
        <div className="approach-extra reveal">
          <p className="cert-label">Certification</p>
          <div className="cert-box">
            <div className="cert-title">ISTQB</div>
            <div className="cert-subtitle">Certified Tester — Foundation Level</div>
          </div>
          <div className="language-list">
            {languages.map(lang => (
              <div key={lang.name} className="language-item">
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
                <div className="language-bar">
                  <div className="language-fill" style={{ width: lang.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
