import './progression.css'

const progressData = [
  {
    category: 'Histoire',
    value: 82,
  },
  {
    category: 'Sciences',
    value: 64,
  },
  {
    category: 'Technologie',
    value: 71,
  },
  {
    category: 'Géographie',
    value: 91,
  },
]

function ProgressionPage() {
  return (
    <section className="progression-page">
      <header className="progression-header">
        <span className="eyebrow">PROGRESSION</span>

        <h1>
          Votre parcours
          <br />
          <span>d'apprentissage.</span>
        </h1>

        <p>
          Suivez votre activité, vos réussites et votre maîtrise des
          différentes catégories.
        </p>
      </header>

      <section
        className="progression-stats"
        aria-label="Statistiques de progression"
      >
        <article className="progression-stat">
          <strong>24</strong>
          <span>Expériences complétées</span>
        </article>

        <article className="progression-stat">
          <strong>82%</strong>
          <span>Réponses correctes</span>
        </article>

        <article className="progression-stat">
          <strong>18</strong>
          <span>Défis réalisés</span>
        </article>

        <article className="progression-stat">
          <strong>7</strong>
          <span>Catégories explorées</span>
        </article>
      </section>

      <section
        className="progression-mastery"
        aria-labelledby="progression-mastery-title"
      >
        <header className="progression-section-heading">
          <span className="eyebrow">MAÎTRISE PAR CATÉGORIE</span>

          <h2 id="progression-mastery-title">
            Votre maîtrise
            <br />
            <span>par catégorie.</span>
          </h2>

          <p>
            Visualisez votre niveau de maîtrise dans les catégories que vous
            avez explorées.
          </p>
        </header>

        <div className="progression-panel">
          {progressData.map((item) => (
            <div className="progression-row" key={item.category}>
              <div className="progression-row-header">
                <span className="progression-category">
                  {item.category}
                </span>

                <strong>{item.value}%</strong>
              </div>

              <div
                className="progression-track"
                role="progressbar"
                aria-label={`Maîtrise en ${item.category}`}
                aria-valuenow={item.value}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progression-fill"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProgressionPage