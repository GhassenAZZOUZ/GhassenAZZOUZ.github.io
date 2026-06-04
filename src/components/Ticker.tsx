const items = [
  { value: '5',     label: 'Years Experience' },
  { value: '3',     label: 'Industries' },
  { value: '44%',   label: 'Pipeline Time Saved' },
  { value: 'ISTQB', label: 'Certified' },
  { value: '1200+', label: 'API Tests Automated' },
  { value: '4',     label: 'Parallel Agents' },
]

export default function Ticker() {
  // Double the items for a seamless CSS loop
  const doubled = [...items, ...items]

  return (
    <div id="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="ticker-item">
            <strong>{item.value}</strong>
            {item.label}
            <div className="ticker-sep" />
          </div>
        ))}
      </div>
    </div>
  )
}
