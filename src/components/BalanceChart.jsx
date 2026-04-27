import BudgetPieChart from './BudgetPieChart'
import { formatCurrency } from '../utils/formatCurrency'

const COLORS = ['#dc2626', '#16a34a']

export default function BalanceChart({ totalIncome, totalExpenses, balance }) {
  const hasData = totalIncome > 0 || totalExpenses > 0

  // Colors are embedded in each entry rather than relied on by index position.
  // BudgetPieChart filters out zero-value slices, which shifts index-based
  // color arrays — embedding the color ensures each slice always gets the
  // right color regardless of which slices are present.
  const data = [
    { name: 'Expenses', value: totalExpenses, color: '#dc2626' },
    { name: 'Remaining', value: Math.max(balance, 0), color: '#16a34a' },
  ]

  const spentPercent = totalIncome > 0
    ? Math.min((totalExpenses / totalIncome) * 100, 100).toFixed(1)
    : null

  const ratioLabel = totalIncome === 0
    ? null
    : balance >= 0
      ? `${spentPercent}% of income spent`
      : `Over budget by ${formatCurrency(Math.abs(balance))}`

  const ratioClass = balance >= 0 ? 'ratio-label positive' : 'ratio-label negative'

  return (
    <div className="card">
      <h2>Income vs Expenses</h2>
      {!hasData ? (
        <p className="empty-state">Add income and expenses to see the breakdown.</p>
      ) : (
        <>
          {ratioLabel && <p className={ratioClass}>{ratioLabel}</p>}
          <BudgetPieChart data={data} colors={COLORS} />
          <div className="balance-stats">
            <div className="balance-stat">
              <span>Total Income</span>
              <span className="stat-positive">{formatCurrency(totalIncome)}</span>
            </div>
            <div className="balance-stat">
              <span>Total Expenses</span>
              <span className="stat-negative">{formatCurrency(totalExpenses)}</span>
            </div>
            <div className="balance-stat balance-stat-total">
              <span>Remaining</span>
              <span className={balance >= 0 ? 'stat-positive' : 'stat-negative'}>
                {formatCurrency(balance)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
