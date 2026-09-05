const mobileNavigation = [
  { id: 'home', icon: '⌂', label: 'Accueil' },
  { id: 'explore', icon: '◉', label: 'Explorer' },
  { id: 'challenges', icon: '◆', label: 'Défis' },
  { id: 'create', icon: '＋', label: 'Créer' },
  { id: 'profile', icon: '○', label: 'Profil' },
]

function MobileNav({ activePage, onNavigate }) {
  return (
    <nav className="mobile-nav" aria-label="Navigation mobile">
      {mobileNavigation.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`mobile-nav-item ${
            activePage === item.id ? 'active' : ''
          }`}
          onClick={() => onNavigate(item.id)}
        >
          <span aria-hidden="true">{item.icon}</span>
          <small>{item.label}</small>
        </button>
      ))}
    </nav>
  )
}

export default MobileNav