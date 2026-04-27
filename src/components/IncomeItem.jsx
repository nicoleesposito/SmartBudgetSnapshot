export default function IncomeItem({ source, onRemove }) {
  return (
    <div className="expense-item">
      <span className="expense-name">{source.name}</span>
      <div className="expense-right">
        <span className="expense-amount">${source.amount.toFixed(2)}</span>
        <button
          className="btn-delete"
          onClick={() => onRemove(source.id)}
          aria-label={`Remove ${source.name}`}
        >
          ×
        </button>
      </div>
    </div>
  )
}
