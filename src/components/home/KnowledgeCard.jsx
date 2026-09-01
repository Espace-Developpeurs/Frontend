import { useState } from 'react'

function KnowledgeCard({
  category,
  title,
  description,
  creatorInitial,
  creatorName,
  creatorRole,
  views,
  likes,
  onDiscover,
}) {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved((currentValue) => !currentValue)
  }

  return (
    <article className="knowledge-card">
      <div className="card-top">
        <span className="category">{category}</span>

        <button
          type="button"
          className={`save-button ${saved ? 'saved' : ''}`}
          onClick={handleSave}
          aria-label={
            saved
              ? `Retirer "${title}" des contenus enregistrés`
              : `Enregistrer "${title}"`
          }
          aria-pressed={saved}
        >
          {saved ? '♥' : '♡'}
        </button>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="creator">
        <span className="avatar small" aria-hidden="true">
          {creatorInitial}
        </span>

        <div>
          <strong>{creatorName}</strong>
          <span>{creatorRole}</span>
        </div>
      </div>

      <div className="card-footer">
        <span>{views} vues</span>
        <span>♡ {likes}</span>
        <span>▣ Défi disponible</span>
      </div>

      <button
        type="button"
        className="primary-button full"
        onClick={onDiscover}
      >
        Découvrir
      </button>
    </article>
  )
}

export default KnowledgeCard
