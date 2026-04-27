import { useState } from 'react'
import ChartToggle from './ChartToggle'
import BudgetPieChart from './BudgetPieChart'

// Expense slices are colored by category
const CATEGORY_COLORS = {
  Housing: '#16a34a',
  Food: '#3b82f6',
  Transport: '#f97316',
  Health: '#dc2626',
  Entertainment: '#9333ea',
  Other: '#eab308',
}

// Income source slices use a rotating palette
const INCOME_SOURCE_COLORS = [
  '#2563eb',
  '#7c3aed',
  '#0891b2',
  '#db2777',
  '#d97706',
  '#059669',
]

export default function ChartSection({ expenses, incomeSources }) {
  const [view, setView] = useState('expenses')

  const expenseData = expenses.map(e => ({ name: e.name, value: e.amount }))
  const expenseColors = expenses.map(e => CATEGORY_COLORS[e.category] ?? '#16a34a')

  const incomeData = incomeSources.map(s => ({ name: s.name, value: s.amount }))

  return (
    <div className="card">
      <h2>Budget Chart</h2>
      <ChartToggle view={view} onChange={setView} />
      <BudgetPieChart
        data={view === 'expenses' ? expenseData : incomeData}
        colors={view === 'expenses' ? expenseColors : INCOME_SOURCE_COLORS}
      />
    </div>
  )
}
