import { useState } from 'react'

import './settings.css'

function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <section className="settings-page">
      <header className="settings-header">
        <span className="eyebrow">PARAMÈTRES</span>

        <h1>
          Gérez votre espace
          <br />
          <span>et vos préférences.</span>
        </h1>

        <p>
          Personnalisez votre compte et les préférences de votre expérience
          sur la plateforme.
        </p>
      </header>

      <div className="settings-sections">
        <section
          className="settings-section"
          aria-labelledby="settings-account-title"
        >
          <header className="settings-section-heading">
            <span className="eyebrow">COMPTE</span>
            <h2 id="settings-account-title">Votre compte</h2>
          </header>

          <div className="settings-panel">
            <button type="button" className="settings-row">
              <span className="settings-row-content">
                <strong>Profil</strong>
                <span>
                  Votre nom et vos informations personnelles
                </span>
              </span>

              <span
                className="settings-row-action"
                aria-hidden="true"
              >
                →
              </span>
            </button>

            <button type="button" className="settings-row">
              <span className="settings-row-content">
                <strong>Mot de passe</strong>
                <span>
                  Sécurisez votre compte avec un nouveau mot de passe
                </span>
              </span>

              <span
                className="settings-row-action"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </section>

        <section
          className="settings-section"
          aria-labelledby="settings-preferences-title"
        >
          <header className="settings-section-heading">
            <span className="eyebrow">PRÉFÉRENCES</span>
            <h2 id="settings-preferences-title">
              Votre expérience
            </h2>
          </header>

          <div className="settings-panel">
            <div className="settings-row settings-row-static">
              <span className="settings-row-content">
                <strong>Notifications</strong>
                <span>
                  Recevez les informations importantes de la plateforme
                </span>
              </span>

              <button
                type="button"
                className={`settings-toggle ${
                  notificationsEnabled ? 'active' : ''
                }`}
                aria-pressed={notificationsEnabled}
                aria-label={
                  notificationsEnabled
                    ? 'Désactiver les notifications'
                    : 'Activer les notifications'
                }
                onClick={() =>
                  setNotificationsEnabled((enabled) => !enabled)
                }
              >
                <span className="settings-toggle-thumb" />
              </button>
            </div>

            <div className="settings-row settings-row-static">
              <span className="settings-row-content">
                <strong>Langue</strong>
                <span>
                  Langue d'affichage de la plateforme
                </span>
              </span>

              <span className="settings-value">
                Français
              </span>
            </div>
          </div>
        </section>

        <section
          className="settings-section settings-session"
          aria-labelledby="settings-session-title"
        >
          <header className="settings-section-heading">
            <span className="eyebrow">SESSION</span>
            <h2 id="settings-session-title">Votre session</h2>
          </header>

          <div className="settings-panel">
            <div className="settings-row settings-row-static settings-logout-row">
              <span className="settings-row-content">
                <strong>Déconnexion</strong>
                <span>
                  Quitter votre session actuelle
                </span>
              </span>

              <button
                type="button"
                className="settings-danger-button"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default SettingsPage