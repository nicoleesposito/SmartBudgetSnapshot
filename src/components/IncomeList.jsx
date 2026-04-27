import IncomeItem from './IncomeItem'

export default function IncomeList({ incomeSources, onRemove }) {
  if (incomeSources.length === 0) {
    return <p className="empty-state">No income sources yet. Add one above.</p>
  }

  return (
    <div className="expense-list">
      {incomeSources.map(s => (
        <IncomeItem key={s.id} source={s} onRemove={onRemove} />
      ))}
    </div>
  )
}
