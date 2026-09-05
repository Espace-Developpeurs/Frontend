import Sidebar from '../../components/navigation/Sidebar'
import Topbar from '../../components/navigation/Topbar'
import MobileNav from '../../components/navigation/MobileNav'

import './AppLayout.css'
import '../../components/navigation/navigation.css'

function AppLayout({ activePage, onNavigate, children }) {
  return (
    <div className="app-layout">
      <Topbar onNavigate={onNavigate} />

      <Sidebar
        activePage={activePage}
        onNavigate={onNavigate}
      />

      <main className="main-content">
        {children}
      </main>

      <MobileNav
        activePage={activePage}
        onNavigate={onNavigate}
      />
    </div>
  )
}

export default AppLayout