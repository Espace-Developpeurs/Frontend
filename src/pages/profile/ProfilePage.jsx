import './profile.css'

function ProfilePage() {
  return (
    <section className="profile-page">
      <header className="profile-header">
        <div className="profile-avatar" aria-hidden="true">
          G
        </div>

        <div className="profile-intro">
          <span className="eyebrow">MON PROFIL</span>

          <h1>
            Votre profil
            <br />
            <span>Membre de la communauté.</span>
          </h1>

          <p>
            Découvrez votre activité, vos contributions et votre progression
            sur la plateforme.
          </p>
        </div>
      </header>

      <section className="profile-stats" aria-label="Statistiques du profil">
        <article className="profile-stat">
          <strong>24</strong>
          <span>Expériences</span>
        </article>

        <article className="profile-stat">
          <strong>18</strong>
          <span>Défis réalisés</span>
        </article>

        <article className="profile-stat">
          <strong>82%</strong>
          <span>Taux de réussite</span>
        </article>

        <article className="profile-stat">
          <strong>7</strong>
          <span>Catégories explorées</span>
        </article>
      </section>

      <section className="profile-contributions">
        <header className="section-heading">
          <span className="eyebrow">CONTRIBUTIONS</span>

          <h2>
            Vos contributions
            <br />
            <span>à la communauté.</span>
          </h2>

          <p>
            Les connaissances que vous partagez avec la communauté apparaîtront
            ici.
          </p>
        </header>

        <div className="profile-empty">
          <div className="profile-empty-icon" aria-hidden="true">
            ✦
          </div>

          <h3>Votre espace de contribution</h3>

          <p>
            Partagez une connaissance, une idée ou une découverte pour enrichir
            l'expérience des autres membres.
          </p>
        </div>
      </section>
    </section>
  )
}

export default ProfilePage