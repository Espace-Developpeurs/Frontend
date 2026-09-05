function ChallengePreview({ onStart }) {
  return (
    <article className="challenge-preview">
      <span className="eyebrow">TESTEZ-VOUS</span>

      <h3>
        Pouvez-vous identifier
        <br />
        ces capitales ?
      </h3>

      <p>10 questions · Niveau intermédiaire</p>

      <div className="challenge-stats">
        <span>🔥 1 204 tentatives</span>
        <span>⏱ ~3 min</span>
      </div>

      <button
        type="button"
        className="primary-button"
        onClick={onStart}
      >
        Commencer le défi
      </button>
    </article>
  )
}

export default ChallengePreview
