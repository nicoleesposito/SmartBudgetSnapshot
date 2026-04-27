export default function ChartToggle({ view, onChange }) {
  return (
    <div className="chart-toggle">
      <button
        className={`toggle-btn ${view === 'expenses' ? 'active' : ''}`}
        onClick={() => onChange('expenses')}
      >
        Expenses
      </button>
      <button
        className={`toggle-btn ${view === 'income' ? 'active' : ''}`}
        onClick={() => onChange('income')}
      >
        Income
      </button>
    </div>
  )
}
