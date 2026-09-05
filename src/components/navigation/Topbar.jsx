function Topbar({ onNavigate }) {
  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNavigate('explore')
    }
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
      </div>
    </header>
  )
}

export default Topbar