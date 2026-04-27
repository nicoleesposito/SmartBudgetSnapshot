import { formatCurrency } from '../utils/formatCurrency'

export default function Summary({ totalIncome, totalExpenses, balance }) {
  const balanceClass = balance >= 0 ? 'positive' : 'negative'

  return (
    <div className="card summary-card">
      <h2>Summary</h2>
      <div className="summary-row">
        <span>Total Income</span>
        <span>{formatCurrency(totalIncome)}</span>
      </div>
      <div className="summary-row">
        <span>Total Expenses</span>
        <span>{formatCurrency(totalExpenses)}</span>
      </div>
      <div className={`summary-row balance-row ${balanceClass}`}>
        <span>Balance</span>
        <span className="balance-amount">{formatCurrency(balance)}</span>
      </div>
    </div>
  )
}
