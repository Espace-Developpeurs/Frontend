import { useState } from 'react'

import AppLayout from './layouts/AppLayout/AppLayout'
import HomePage from './pages/home/HomePage'
import ExplorePage from './pages/explore/ExplorePage'

const pageLabels = {
  home: 'Accueil',
  explore: 'Explorer',
  challenges: 'Défis',
  create: 'Créer',
  saved: 'Enregistrés',
  progress: 'Ma progression',
  profile: 'Mon profil',
  settings: 'Paramètres',
}

function PlaceholderPage({ page }) {
  return (
    <section className="page-placeholder">
      <span className="eyebrow">PLATEFORME</span>

      <h1>{pageLabels[page]}</h1>

      <p>
        Cette page sera implémentée lors de l’étape correspondante.
      </p>
    </section>
  )
}

function App() {
  const [activePage, setActivePage] = useState('home')

  const handleNavigate = (page) => {
    setActivePage(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AppLayout
      activePage={activePage}
      onNavigate={handleNavigate}
    >
      {activePage === 'home' ? (
        <HomePage onNavigate={handleNavigate} />
      ) : activePage === 'explore' ? (
        <ExplorePage />
      ) : (
        <PlaceholderPage page={activePage} />
      )}
    </AppLayout>
  )
}

export default App
