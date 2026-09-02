import { useState } from 'react'

import CategoryCard from '../../components/explore/CategoryCard'

import '../../components/explore/explore.css'

const categories = [
  'Culture générale',
  'Histoire',
  'Sciences',
  'Technologie',
  'Programmation',
  'Intelligence artificielle',
  'Sport',
  'Culture africaine',
  'Arts & littérature',
  'Logique',
]

function ExplorePage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!search.trim()) {
      return
    }

    setSelectedCategory(null)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setSearch('')
  }

  return (
    <section className="explore-page">
      <header className="page-header">
        <div>
          <span className="eyebrow">EXPLORER</span>

          <h1>
            Trouvez ce qui
            <br />
            <span>vous intéresse.</span>
          </h1>

          <p>
            Explorez les connaissances partagées
            par la communauté.
          </p>
        </div>
      </header>

      <form
        className="search-large"
        onSubmit={handleSubmit}
        role="search"
      >
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Que souhaitez-vous découvrir ?"
          aria-label="Rechercher une connaissance"
        />

        <button type="submit" className="primary-button">
          Rechercher
        </button>
      </form>

      {selectedCategory && (
        <p className="explore-selection" aria-live="polite">
          Catégorie sélectionnée :{' '}
          <strong>{selectedCategory}</strong>
        </p>
      )}

      <div className="section-heading">
        <div>
          <span className="eyebrow">CATÉGORIES</span>
          <h2>Explorez par sujet</h2>
        </div>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category}
            name={category}
            onSelect={handleCategorySelect}
          />
        ))}
      </div>
    </section>
  )
}

export default ExplorePage
