const items = [
  { num: '5', suffix: '+', label: 'Years of experience' },
  { num: '3', suffix: '', label: 'Industries — banking, retail, gaming' },
  { num: '44', suffix: '%', label: 'Pipeline faster — 40 min/run, 3× a day' },
  { num: '1200', suffix: '+', label: 'API tests automated' },
  { num: '3', suffix: '', label: 'Automation frameworks mastered' },
]

export default function Impact() {
  return (
    <section id="impact" aria-labelledby="impact-title">
      <div className="section-header reveal" style={{ paddingBottom: 0 }}>
        <h2 id="impact-title" className="section-title">Impact</h2>
      </div>
      <div className="impact-grid reveal">
        {items.map((item, i) => (
          <div key={i} className="impact-cell">
            <div className="impact-num">{item.num}<span>{item.suffix}</span></div>
            <div className="impact-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
