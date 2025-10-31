import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import AuthComponent from './components/AuthComponent'
import CalculatorComponent from './components/CalculatorComponent'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import CollaborationPanel from './components/CollaborationPanel'
import SettingsComponent from './components/SettingsComponent'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>TechCalc</h1>
          <p className="tagline">Smart Calculations for Savvy Users</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>User Authentication & Onboarding</li>
          <li>Advanced Calculation Tools (e.g., scientific, graphing)</li>
          <li>Real-time Collaboration with other users</li>
          <li>Data Analytics & Reporting</li>
          <li>Customizable User Interface</li>
          <li>Cross-platform Syncing</li>
          </ul>
        </div>
        <p>&copy; 2025 TechCalc. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App