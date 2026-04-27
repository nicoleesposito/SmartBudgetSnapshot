import { useState } from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses, onRemove }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const presentCategories = ['All', ...new Set(expenses.map(e => e.category))]
  const filter = presentCategories.includes(activeFilter) ? activeFilter : 'All'
  const filtered = filter === 'All' ? expenses : expenses.filter(e => e.category === filter)

  if (expenses.length === 0) {
    return <p className="empty-state">No expenses yet. Add one above.</p>
  }

  return (
    <>
      <div className="filter-bar">
        {presentCategories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="empty-state">No expenses in this category.</p>
      ) : (
        <div className="expense-list">
          {filtered.map(e => (
            <ExpenseItem key={e.id} expense={e} onRemove={onRemove} />
          ))}
        </div>
      )}
    </>
  )
}
