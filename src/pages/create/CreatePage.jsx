import './create.css'

function CreatePage() {
  return (
    <section className="create-page">
      <header className="page-header">
        <span className="eyebrow">CONTRIBUER</span>

        <h1>
          Partagez ce que
          <br />
          <span>vous savez.</span>
        </h1>

        <p>
          Une passion, une découverte, une compétence : transformez-la en
          expérience pour les autres.
        </p>
      </header>

      <div className="create-options">
        <button type="button" className="create-option">
          <span className="create-icon" aria-hidden="true">
            ✦
          </span>

          <strong>Nouvelle contribution</strong>

          <small>
            Partager une connaissance, une idée ou une découverte.
          </small>
        </button>

        <button type="button" className="create-option">
          <span className="create-icon" aria-hidden="true">
            ◆
          </span>

          <strong>Créer un défi</strong>

          <small>
            Transformer une connaissance en expérience interactive.
          </small>
        </button>
      </div>

      <div className="creator-info">
        <span className="eyebrow">CRÉATEUR</span>

        <h2>
          Votre connaissance peut
          <br />
          aider quelqu'un.
        </h2>

        <p>
          Les contributions utiles et appréciées par la communauté pourront
          progressivement être mises en avant.
        </p>
      </div>
    </section>
  )
}

export default CreatePage
