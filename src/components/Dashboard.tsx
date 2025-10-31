import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'advanced_calculation_tools_(e.g.,_scientific,_graphing)' ? 'active' : ''}
          onClick={() => setActiveTab('advanced_calculation_tools_(e.g.,_scientific,_graphing)')}
        >
          Advanced Calculation Tools (E.G., Scientific, Graphing)
        </button>
        <button 
          className={activeTab === 'real_time_collaboration_with_other_users' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_collaboration_with_other_users')}
        >
          Real Time Collaboration With Other Users
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'advanced_calculation_tools_(e.g.,_scientific,_graphing)' && (
          <div className="tab-content">
            <h2>Advanced Calculation Tools (e.g., scientific, graphing)</h2>
            <p>Manage your advanced calculation tools (e.g., scientific, graphing) here.</p>
          </div>
        )}

        {activeTab === 'real_time_collaboration_with_other_users' && (
          <div className="tab-content">
            <h2>Real-time Collaboration with other users</h2>
            <p>Manage your real time collaboration with other users here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard