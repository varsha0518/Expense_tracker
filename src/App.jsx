
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Top Header */}
      <header className="header">
        <h1 className="logo">📊 Expense Tracker</h1>

        <div className="user-profile">
          <div className="avatar">V</div>
          <div>
            <h3>Varsha</h3>
            <p>My Account</p>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-layout">

        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-user">Varsha</h3>

          <nav>
            <a className="active" href="#dashboard">⌂ Dashboard</a>
            <a href="#income">↑ Income</a>
            <a href="#expenses">↓ Expenses</a>
            <a href="#profile">♙ Profile</a>
          </nav>

          <div className="sidebar-bottom">
            <a href="#support">? Support</a>
            <a href="#logout">↪ Logout</a>
          </div>
        </aside>

        {/* Dashboard Content */}
        <main className="dashboard" id="dashboard">
          <h2>Dashboard</h2>
          <p className="welcome">Welcome back!</p>

          <section className="summary-cards">
            <div className="card">
              <p>Total Balance</p>
              <h2>$0</h2>
              <span>+ $0 this month</span>
            </div>

            <div className="card">
              <p>Monthly Income</p>
              <h2>$0</h2>
              <span>Income this month</span>
            </div>

            <div className="card">
              <p>Monthly Expenses</p>
              <h2>$0</h2>
              <span>Expenses this month</span>
            </div>

            <div className="card">
              <p>Savings Rate</p>
              <h2>0%</h2>
              <span>Track your savings</span>
            </div>
          </section>

          
<section className="overview">
  <div className="overview-top">
    <div>
      <h2>Finance Dashboard</h2>
      <p>Track your income and expenses</p>
    </div>

    <button className="add-button">
      + Add Transaction
    </button>
  </div>

  <div className="time-filters">
    <button>Daily</button>
    <button>Weekly</button>
    <button className="selected">Monthly</button>
  </div>
</section>

        </main>

      </div>
    </div>
  );
}

export default App;
