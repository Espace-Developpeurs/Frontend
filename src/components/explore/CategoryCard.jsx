function CategoryCard({ name, onSelect }) {
  return (
    <button
      type="button"
      className="category-card"
      onClick={() => onSelect(name)}
    >
      <strong>{name}</strong>
      <span>Découvrir</span>
    </button>
  )
}

export default CategoryCard
