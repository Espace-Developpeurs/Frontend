function ProgressBanner({ onNavigate }) {
  return (
    <button
      type="button"
      className="progress-banner"
      onClick={() => onNavigate('progression')}
      aria-label="Voir votre progression"
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
        aria-hidden="true"
      >
        <strong>68%</strong>
      </div>
    </button>
  )
}

export default ProgressBanner