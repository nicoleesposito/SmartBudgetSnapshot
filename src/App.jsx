import { useState, useEffect } from 'react'
import IncomeSection from './components/IncomeSection'
import ExpenseSection from './components/ExpenseSection'
import Summary from './components/Summary'
import ChartSection from './components/ChartSection'
import BalanceChart from './components/BalanceChart'
import './App.css'

const CATEGORIES = ['Housing', 'Food', 'Transport', 'Health', 'Entertainment', 'Other']

const STORAGE_KEYS = {
  incomeSources: 'smartbudget_income_sources',
  expenses: 'smartbudget_expenses',
}

function App() {
  const [incomeSources, setIncomeSources] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.incomeSources) ?? '[]')
    } catch {
      return []
    }
  })
  const [expenses, setExpenses] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.expenses) ?? '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.incomeSources, JSON.stringify(incomeSources))
  }, [incomeSources])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.expenses, JSON.stringify(expenses))
  }, [expenses])

  // Round to 2 decimal places after accumulation to prevent floating point
  // drift (e.g. 0.1 + 0.2 = 0.30000000000000004) from corrupting balance
  // comparisons and color logic downstream.
  const totalIncome = Math.round(incomeSources.reduce((sum, s) => sum + s.amount, 0) * 100) / 100
  const totalExpenses = Math.round(expenses.reduce((sum, e) => sum + e.amount, 0) * 100) / 100
  const balance = Math.round((totalIncome - totalExpenses) * 100) / 100

  function addIncomeSource(name, amount) {
    setIncomeSources(prev => [...prev, { id: crypto.randomUUID(), name, amount }])
  }

  function removeIncomeSource(id) {
    setIncomeSources(prev => prev.filter(s => s.id !== id))
  }

  function addExpense(name, amount, category) {
    setExpenses(prev => [...prev, { id: crypto.randomUUID(), name, amount, category }])
  }

  function removeExpense(id) {
    setExpenses(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>SmartBudget</h1>
      </header>
      <main className="app-main">
        <div className="left-column">
          <IncomeSection
            incomeSources={incomeSources}
            onAdd={addIncomeSource}
            onRemove={removeIncomeSource}
          />
          <ExpenseSection
            expenses={expenses}
            categories={CATEGORIES}
            onAdd={addExpense}
            onRemove={removeExpense}
          />
        </div>
        <div className="right-column">
          <Summary
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
          <ChartSection
            expenses={expenses}
            incomeSources={incomeSources}
          />
          <BalanceChart
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
        </div>
      </main>
    </div>
  )
}

export default App
