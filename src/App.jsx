
import React from 'react';
import './index.css';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="app">

      {/* Top Header */}
      <header className="header">
        <div className="brand">
          <img
            src={logo}
            alt="Expense Tracker logo"
            className="brand-logo"
          />
          <h1>Expense Tracker</h1>
        </div>

        <button className="logout-btn">
          Logout
        </button>
      </header>

      {/* Main Layout */}
      <div className="main-layout">

        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-user">Varsha</h3>

          <nav>
            <a className="active" href="#dashboard">
              <i className="fa-solid fa-house"></i> Dashboard
            </a>
            <a href="#income">
              <i className="fa-solid fa-arrow-up"></i> Income
            </a>
            <a href="#expenses">
              <i className="fa-solid fa-arrow-down"></i> Expenses
            </a>
            <a href="#profile">
              <i className="fa-regular fa-user"></i> Profile
            </a>
          </nav>

          <div className="sidebar-bottom">
            <a href="#support">
              <i className="fa-regular fa-circle-question"></i> Support
            </a>
            <a href="#logout">
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </a>
          </div>
        </aside>

        {/* Dashboard Content */}
        <main className="dashboard" id="dashboard">
          <h2>Dashboard</h2>
          <p className="welcome">Welcome back</p>

          {/* Summary Cards */}
          <div className="summary-cards">

            <div className="card">
              <div className="card-header">
                <p>Total Balance</p>
                <div className="card-icon dollar-icon">
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
              </div>
              <h2>$0</h2>
              <span>+$0 this month</span>
            </div>

            <div className="card">
              <div className="card-header">
                <p>Monthly Income</p>
                <div className="card-icon income-icon">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
              </div>
              <h2>$0</h2>
              <span>+12.5% from last month</span>
            </div>

            <div className="card">
              <div className="card-header">
                <p>Monthly Expenses</p>
                <div className="card-icon expense-icon">
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              <h2>$0</h2>
              <span>0% from last month</span>
            </div>

            <div className="card">
              <div className="card-header">
                <p>Savings Rate</p>
                <div className="card-icon savings-icon">
                  <i className="fa-solid fa-piggy-bank"></i>
                </div>
              </div>
              <h2>0%</h2>
              <span>Needs improvement</span>
            </div>

          </div>

          {/* Main Dashboard Grid */}
          <div className="dashboard-grid">

            {/* Left Side: Financial Overview */}
            <section className="panel financial-panel">
              <div className="panel-heading">
                <h3>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  Financial Overview
                  <span className="period-label">(This Month)</span>
                </h3>

                <button className="filter-button">
                  <i className="fa-solid fa-filter"></i> Filters
                </button>
              </div>

              {/* Finance Banner */}
              <div className="finance-banner">
                <div>
                  <h2>Finance Dashboard</h2>
                  <p>Track your income and expenses</p>
                </div>

                <button className="add-button">
                  <i className="fa-solid fa-plus"></i>
                  Add Transaction
                </button>

                <div className="period-filters">
                  <button>Daily</button>
                  <button>Weekly</button>
                  <button className="selected">Monthly</button>
                </div>
              </div>

              {/* Quick Summary */}
              <div className="quick-summary">

                <div className="quick-card">
                  <div className="quick-title">
                    <span className="quick-icon balance-bg">
                      <i className="fa-solid fa-wallet"></i>
                    </span>
                    <p>Total Balance</p>
                  </div>
                  <h3>$0</h3>
                  <div className="quick-badges">
                    <span className="positive-badge">+$0</span>
                    <span className="negative-badge">-$0</span>
                  </div>
                </div>

                <div className="quick-card">
                  <div className="quick-title">
                    <span className="quick-icon expense-bg">
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                    <p>This Month Expenses</p>
                  </div>
                  <h3>$0</h3>
                  <span className="expense-text">
                    <i className="fa-solid fa-arrow-trend-up"></i>
                    0% increase from last month
                  </span>
                </div>

                <div className="quick-card">
                  <div className="quick-title">
                    <span className="quick-icon savings-bg">
                      <i className="fa-solid fa-piggy-bank"></i>
                    </span>
                    <p>This Month Savings</p>
                  </div>
                  <h3>$0</h3>
                  <span className="info-text">0% of income</span>
                </div>

              </div>

              {/* Income, Spent and Savings */}
              <div className="gauge-grid">

                <div className="gauge-card">
                  <h3 className="income-color">Income</h3>
                  <div className="gauge gauge-income">
                    <div className="gauge-inner"></div>
                  </div>
                  <h2>$0</h2>
                  <p>0%</p>
                  <span>This Month data</span>
                </div>

                <div className="gauge-card">
                  <h3 className="spent-color">Spent</h3>
                  <div className="gauge gauge-spent">
                    <div className="gauge-inner"></div>
                  </div>
                  <h2>$0</h2>
                  <p>0%</p>
                  <span>This Month data</span>
                </div>

                <div className="gauge-card">
                  <h3 className="savings-color">Savings</h3>
                  <div className="gauge gauge-savings">
                    <div className="gauge-inner"></div>
                  </div>
                  <h2>$0</h2>
                  <p>0%</p>
                  <span>This Month data</span>
                </div>

              </div>
            </section>

            {/* Expense Distribution - Full Width */}
          <section className="panel distribution-panel">
            <div className="panel-heading">
              <h3>
                <i className="fa-solid fa-chart-pie distribution-icon"></i>
                Expense Distribution
                <span className="period-label">(This Month)</span>
              </h3>
            </div>

            <div className="distribution-content">
              <div className="empty-chart">
                <i className="fa-solid fa-chart-pie"></i>
                <p>No expense data available yet</p>
                <span>Add expenses to see your distribution.</span>
              </div>
            </div>
          </section>

          {/* Recent Income and Recent Expenses */}
          <div className="recent-income-grid">

            {/* Recent Income */}
            <section className="panel record-panel" id="income">
              <div className="panel-heading">
                <h3>
                  <i className="fa-solid fa-arrow-trend-up income-heading-icon"></i>
                  Recent Income
                  <span className="period-label">(This Month)</span>
                </h3>

                <span className="record-count income-count">
                  0 records
                </span>
              </div>

              <div className="record-empty">
                <div className="record-empty-icon income-empty-icon">
                  <i className="fa-solid fa-dollar-sign"></i>
                </div>
                <p>No income transactions</p>
              </div>
            </section>

          </div>

            {/* Recent Expenses */}
          <div className="recent-expens-grid">
            <section className="panel record-panel" id="expenses">
              <div className="panel-heading">
                <h3>
                  <i className="fa-solid fa-arrow-down expense-heading-icon"></i>
                  Recent Expenses
                  <span className="period-label">(This Month)</span>
                </h3>

                <span className="record-count expense-count">
                  0 records
                </span>
              </div>

              <div className="record-empty">
                <div className="record-empty-icon expense-empty-icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <p>No expense transactions</p>
              </div>
            </section>

          </div>

            {/* Right Side */}
            <div className="right-column">

              {/* Recent Transactions */}
              <section className="panel recent-panel">
                <div className="panel-heading">
                  <h3>
                    <i className="fa-regular fa-clock recent-icon"></i>
                    Recent Transactions
                  </h3>

                  <button
                    className="icon-button"
                    aria-label="Refresh transactions"
                  >
                    <i className="fa-solid fa-arrows-rotate"></i>
                  </button>
                </div>

                <p className="info-banner">
                  <i className="fa-solid fa-circle-info"></i>
                  Transactions are stacked by date (newest first)
                </p>

                <div className="empty-transactions">
                  <i className="fa-regular fa-clock"></i>
                  <p>No recent transactions</p>
                </div>
              </section>

              {/* Spending by Category */}
              <section className="panel spending-panel">
                <div className="panel-heading">
                  <h3>
                    <i className="fa-solid fa-chart-pie spending-icon"></i>
                    Spending by Category
                  </h3>
                </div>

                <div className="spending-summary">
                  <div className="income-box">
                    <p>Total Income</p>
                    <h3>$0</h3>
                  </div>

                  <div className="expenses-box">
                    <p>Total Expenses</p>
                    <h3>$0</h3>
                  </div>
                </div>
              </section>

            </div>
          </div>

          
        </main>
      </div>
    </div>
  );
}

export default App;
