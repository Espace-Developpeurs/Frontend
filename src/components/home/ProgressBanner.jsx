function ProgressBanner() {
  return (
    <section className="progress-banner" aria-label="Votre progression">
      <div>
        <span className="small-label">VOTRE PROGRESSION</span>

        <h2>Continuez votre découverte</h2>

        <p>
          Vous avez complété 7 expériences de connaissance.
        </p>
      </div>

      <div
        className="progress-circle"
        aria-label="Progression : 68 pour cent"
      >
        <strong>68%</strong>
      </div>
    </section>
  )
}

export default ProgressBanner
