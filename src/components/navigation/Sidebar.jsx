const navigationSections = [
  [
    { id: 'home', icon: '⌂', label: 'Accueil' },
    { id: 'explore', icon: '◉', label: 'Explorer' },
    { id: 'challenges', icon: '◆', label: 'Défis' },
    { id: 'create', icon: '＋', label: 'Créer' },
  ],
  [
    { id: 'saved', icon: '▢', label: 'Enregistrés' },
    { id: 'progress', icon: '↗', label: 'Ma progression' },
  ],
]

const bottomNavigation = [
  { id: 'profile', icon: '○', label: 'Mon profil' },
  { id: 'settings', icon: '⚙', label: 'Paramètres' },
]

function Sidebar({ activePage, onNavigate }) {
  return (
    <nav className="sidebar" aria-label="Navigation principale">
      {navigationSections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="nav-section">
            {section.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`nav-item ${
                  activePage === item.id ? 'active' : ''
                }`}
                onClick={() => onNavigate(item.id)}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {sectionIndex < navigationSections.length - 1 && (
            <div className="nav-divider" />
          )}
        </div>
      ))}

      <div className="sidebar-bottom">
        {bottomNavigation.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${
              activePage === item.id ? 'active' : ''
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar