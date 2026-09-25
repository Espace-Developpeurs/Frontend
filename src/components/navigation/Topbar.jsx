import { useState } from 'react'

function Topbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNavigate('explore')
    }
  }

  const handleMobileNavigate = (page) => {
    setMobileMenuOpen(false)
    onNavigate(page)
  }

  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">N</div>
        <span>Nom provisoire</span>
      </div>

      <div className="header-search">
        <input
          type="search"
          placeholder="Rechercher une connaissance..."
          aria-label="Rechercher une connaissance"
          onKeyDown={handleSearchKeyDown}
        />
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="icon-button"
          title="Notifications"
          aria-label="Notifications"
        >
          <span aria-hidden="true">🔔</span>
          <span className="notification-dot" />
        </button>

        <button
          type="button"
          className="profile-mini"
          onClick={() => onNavigate('profile')}
          aria-label="Mon profil"
        >
          <span className="avatar">G</span>
        </button>

        <div className="mobile-menu">
          <button
            type="button"
            className="icon-button mobile-menu-button"
            title="Ouvrir le menu"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-settings-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">⋮</span>
          </button>

          {mobileMenuOpen && (
            <div
              id="mobile-settings-menu"
              className="mobile-menu-panel"
              role="menu"
            >
              <button
                type="button"
                className="mobile-menu-item"
                role="menuitem"
                onClick={() => handleMobileNavigate('settings')}
              >
                <span aria-hidden="true">⚙</span>
                <span>Paramètres</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Topbar
