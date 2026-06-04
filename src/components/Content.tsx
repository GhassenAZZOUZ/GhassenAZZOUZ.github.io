const articles = [
  {
    id: 'cicd',
    image: `${import.meta.env.BASE_URL}images/card1.png`,
    imageFallback: 'https://picsum.photos/seed/card1/700/875',
    label: 'CI/CD Insights',
    title: 'How I cut pipeline execution time in half',
  },
  {
    id: 'bdd',
    image: `${import.meta.env.BASE_URL}images/card2.png`,
    imageFallback: 'https://picsum.photos/seed/card2/700/875',
    label: 'QA Strategy',
    title: 'BDD in the real world — lessons from retail',
  },
]

export default function Content() {
  return (
    <section id="content" aria-labelledby="content-title">
      <div className="section-header reveal">
        <div>
          <p className="section-label">Beyond the terminal</p>
          <h2 id="content-title" className="section-title">Content</h2>
        </div>
        <span className="section-count" aria-label={`${articles.length} articles`}>
          ({String(articles.length).padStart(2, '0')})
        </span>
      </div>

      <div className="content-grid">
        {articles.map(a => (
          <article key={a.id} className="content-card reveal">
            <img
              src={a.image}
              alt={`${a.label} article`}
              onError={e => {
                const img = e.target as HTMLImageElement
                img.src = a.imageFallback
                img.onerror = null
              }}
            />
            <div className="content-card-overlay">
              <p className="content-card-label">{a.label}</p>
              <h3 className="content-card-title">{a.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
