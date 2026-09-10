import './saved.css'

function SavedPage() {
  return (
    <section className="saved-page">
      <header className="saved-header">
        <span className="eyebrow">ENREGISTRÉS</span>

        <h1>
          Vos contenus
          <br />
          <span>enregistrés.</span>
        </h1>

        <p>
          Retrouvez ici les connaissances et contenus que vous souhaitez
          conserver pour les consulter plus tard.
        </p>
      </header>

      <section className="saved-empty" aria-label="Contenus enregistrés">
        <div className="saved-empty-icon" aria-hidden="true">
          ☆
        </div>

        <h2>Aucun contenu enregistré</h2>

        <p>
          Les contenus que vous enregistrerez apparaîtront ici.
        </p>
      </section>
    </section>
  )
}

export default SavedPage
