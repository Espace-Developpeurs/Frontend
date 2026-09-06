import { useState } from 'react'

import './challenges.css'

const answers = [
  { id: 'A', label: 'La Terre', correct: false },
  { id: 'B', label: 'Jupiter', correct: true },
  { id: 'C', label: 'Saturne', correct: false },
  { id: 'D', label: 'Neptune', correct: false },
]

function ChallengesPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [validated, setValidated] = useState(false)

  const handleSelect = (answerId) => {
    if (validated) return

    setSelectedAnswer(answerId)
  }

  const handleValidate = () => {
    if (!selectedAnswer) return

    setValidated(true)
  }

  const selectedAnswerData = answers.find(
    (answer) => answer.id === selectedAnswer,
  )

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
        <span className="category">CULTURE GÉNÉRALE</span>

        <h2>
          Quelle est la plus grande planète
          <br />
          du système solaire ?
        </h2>

        <div className="answers">
          {answers.map((answer) => {
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
          disabled={!selectedAnswer || validated}
        >
          {validated ? 'Réponse validée' : 'Valider ma réponse'}
        </button>

        {validated && selectedAnswerData && (
          <div
            className={`challenge-feedback ${
              selectedAnswerData.correct ? 'success' : 'error'
            }`}
            role="status"
          >
            {selectedAnswerData.correct
              ? '✓ Bonne réponse ! Jupiter est la plus grande planète du système solaire.'
              : '✕ Mauvaise réponse. La bonne réponse est Jupiter.'}
          </div>
        )}
      </div>
    </section>
  )
}

export default ChallengesPage
