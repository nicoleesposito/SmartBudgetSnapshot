import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

export default function ExpenseSection({ expenses, categories, onAdd, onRemove }) {
  return (
    <div className="card">
      <h2>Expenses</h2>
      <ExpenseForm onAdd={onAdd} categories={categories} />
      <hr className="section-divider" />
      <ExpenseList expenses={expenses} onRemove={onRemove} />
    </div>
  )
}
