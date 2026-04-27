import IncomeForm from './IncomeForm'
import IncomeList from './IncomeList'

export default function IncomeSection({ incomeSources, onAdd, onRemove }) {
  return (
    <div className="card">
      <h2>Income</h2>
      <IncomeForm onAdd={onAdd} />
      <hr className="section-divider" />
      <IncomeList incomeSources={incomeSources} onRemove={onRemove} />
    </div>
  )
}
