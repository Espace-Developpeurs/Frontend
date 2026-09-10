function ProgressBanner({ onNavigate }) {
  return (
    <section
      className="progress-banner"
      aria-label="Votre progression"
      role="button"
      tabIndex="0"
      onClick={() => onNavigate('progression')}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onNavigate('progression')
        }
      }}
    >
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