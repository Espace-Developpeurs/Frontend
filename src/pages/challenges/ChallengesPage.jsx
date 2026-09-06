import { useState } from 'react'

import './challenges.css'

const challenges = [
  {
    id: 1,
    category: 'CULTURE GÉNÉRALE',
    question: 'Quelle est la plus grande planète du système solaire ?',
    answers: [
      { id: 'A', label: 'La Terre', correct: false },
      { id: 'B', label: 'Jupiter', correct: true },
      { id: 'C', label: 'Saturne', correct: false },
      { id: 'D', label: 'Neptune', correct: false },
    ],
    explanation:
      'Jupiter est la plus grande planète du système solaire. Son diamètre est environ 11 fois supérieur à celui de la Terre.',
  },
  {
    id: 2,
    category: 'SCIENCES',
    question: 'Quelle planète est la plus proche du Soleil ?',
    answers: [
      { id: 'A', label: 'Vénus', correct: false },
      { id: 'B', label: 'Mars', correct: false },
      { id: 'C', label: 'Mercure', correct: true },
      { id: 'D', label: 'La Terre', correct: false },
    ],
    explanation:
      'Mercure est la planète la plus proche du Soleil. Elle effectue une révolution autour du Soleil en seulement 88 jours terrestres.',
  },
  {
    id: 3,
    category: 'HISTOIRE',
    question: 'Combien de continents compte-t-on généralement sur Terre ?',
    answers: [
      { id: 'A', label: '5', correct: false },
      { id: 'B', label: '6', correct: false },
      { id: 'C', label: '7', correct: true },
      { id: 'D', label: '8', correct: false },
    ],
    explanation:
      'On compte généralement 7 continents : Afrique, Amérique, Antarctique, Asie, Europe, Océanie et Amérique du Nord/Sud selon la convention utilisée.',
  },
]

function ChallengesPage() {
  const [challengeIndex, setChallengeIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [result, setResult] = useState(null)

  const challenge = challenges[challengeIndex]

  const handleSelect = (answerId) => {
    if (result) return

    setSelectedAnswer(answerId)
  }

  const handleValidate = () => {
    if (!selectedAnswer) return

    const selectedAnswerData = challenge.answers.find(
      (answer) => answer.id === selectedAnswer,
    )

    setResult(selectedAnswerData?.correct ? 'success' : 'error')
  }

  const handleNextChallenge = () => {
    setChallengeIndex(
      (currentIndex) => (currentIndex + 1) % challenges.length,
    )
    setSelectedAnswer(null)
    setResult(null)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleCloseModal = () => {
    setResult(null)
  }

  return (
    <section className="challenges-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">APPRENDRE EN PRATIQUANT</span>

          <h1>
            Testez ce que
            <br />
            <span>vous savez.</span>
          </h1>

          <p>
            Les défis permettent de transformer
            <br />
            la connaissance en expérience.
          </p>
        </div>
      </header>

      <div className="challenge-main">
        <span className="category">{challenge.category}</span>

        <h2>{challenge.question}</h2>

        <div className="answers">
          {challenge.answers.map((answer) => {
            const isSelected = selectedAnswer === answer.id

            return (
              <button
                key={answer.id}
                type="button"
                className={`answer ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelect(answer.id)}
                aria-pressed={isSelected}
              >
                {answer.id} — {answer.label}
              </button>
            )
          })}
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={handleValidate}
          disabled={!selectedAnswer || result !== null}
        >
          Valider ma réponse
        </button>
      </div>

      {result && (
        <div
          className="challenge-modal-backdrop"
          role="presentation"
          onClick={handleCloseModal}
        >
          <div
            className={`challenge-modal ${
              result === 'success' ? 'success' : 'error'
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="challenge-result-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="challenge-modal-close"
              onClick={handleCloseModal}
              aria-label="Fermer"
            >
              ×
            </button>

            <div className="challenge-modal-icon" aria-hidden="true">
              {result === 'success' ? '🎉' : '💡'}
            </div>

            <span className="challenge-modal-eyebrow">
              {result === 'success' ? 'DÉFI RÉUSSI' : 'CONTINUEZ À APPRENDRE'}
            </span>

            <h2 id="challenge-result-title">
              {result === 'success'
                ? 'Excellent !'
                : 'Pas cette fois, mais vous progressez !'}
            </h2>

            <p className="challenge-modal-message">
              {result === 'success'
                ? 'Bravo, vous avez trouvé la bonne réponse.'
                : 'La bonne réponse était '}
              {result === 'error' && (
                <strong>
                  {challenge.answers.find((answer) => answer.correct)?.label}
                </strong>
              )}
            </p>

            <div className="challenge-modal-explanation">
              <span>💡 À retenir</span>
              <p>{challenge.explanation}</p>
            </div>

            <div className="challenge-modal-actions">
              <button
                type="button"
                className="primary-button challenge-next-button"
                onClick={handleNextChallenge}
              >
                🎯 Nouveau défi
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={handleCloseModal}
              >
                Revoir ma réponse
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ChallengesPage