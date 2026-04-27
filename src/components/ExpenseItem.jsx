export default function ExpenseItem({ expense, onRemove }) {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <span className="expense-name">{expense.name}</span>
        <span className="expense-category">{expense.category}</span>
      </div>
      <div className="expense-right">
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
        <button
          className="btn-delete"
          onClick={() => onRemove(expense.id)}
          aria-label={`Remove ${expense.name}`}
        >
          ×
        </button>
      </div>
    </div>
  )
}
