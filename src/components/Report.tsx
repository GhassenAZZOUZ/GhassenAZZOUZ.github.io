const suites = [
  { name: 'Authentication — E2E', tests: 64, failed: 0, time: '48s', rate: '100%' },
  { name: 'Checkout — E2E', tests: 92, failed: 3, time: '1m 54s', rate: '97%' },
  { name: 'Catalogue API — Karate', tests: 138, failed: 2, time: '1m 06s', rate: '99%' },
  { name: 'Payments contract', tests: 74, failed: 2, time: '1m 22s', rate: '97%' },
  { name: 'Smoke — CI gate', tests: 44, failed: 0, time: '52s', rate: '100%' },
]

export default function Report() {
  return (
    <section id="report" aria-labelledby="report-title">
      <div className="section-header reveal">
        <h2 id="report-title" className="section-title">Test report</h2>
        <p className="section-note">Illustrative Allure summary · not live data</p>
      </div>
      <div className="report-stats reveal">
        <div className="report-stat">
          <div className="report-stat-label">Total</div>
          <div className="report-stat-value">412</div>
        </div>
        <div className="report-stat">
          <div className="report-stat-label">Passed</div>
          <div className="report-stat-value">401</div>
        </div>
        <div className="report-stat">
          <div className="report-stat-label">Failed</div>
          <div className="report-stat-value accent">7</div>
        </div>
        <div className="report-stat">
          <div className="report-stat-label">Duration</div>
          <div className="report-stat-value">6m 12s</div>
        </div>
      </div>
      <div className="report-table reveal">
        <div className="report-row head">
          <span>Suite</span><span>Tests</span><span>Failed</span><span>Time</span><span>Pass rate</span>
        </div>
        {suites.map(s => (
          <div key={s.name} className="report-row">
            <span className="report-suite">{s.name}</span>
            <span className="report-cell">{s.tests}</span>
            <span className="report-cell">{s.failed}</span>
            <span className="report-cell">{s.time}</span>
            <span className="report-rate">
              <span className="report-rate-track"><span className="report-rate-fill" style={{ width: s.rate }} /></span>
              <span className="report-rate-value">{s.rate}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
