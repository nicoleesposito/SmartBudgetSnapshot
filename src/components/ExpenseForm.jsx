import { useState } from 'react'

export default function ExpenseForm({ onAdd, categories }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(categories[0])
  const [error, setError] = useState('')

  const isComplete = name.trim() !== '' && parseFloat(amount) > 0

  function handleNameChange(e) {
    setName(e.target.value)
    if (error) setError('')
  }

  function handleAmountChange(e) {
    setAmount(e.target.value)
    if (error) setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const parsed = parseFloat(amount)
    if (!name.trim() || isNaN(parsed) || parsed <= 0) {
      setError('Please enter an expense name and a valid amount before adding.')
      return
    }
    onAdd(name.trim(), parsed, category)
    setName('')
    setAmount('')
    setCategory(categories[0])
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={handleNameChange}
      />
      <div className="input-group">
        <span className="input-prefix">$</span>
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <button
        type="submit"
        className={`btn-primary ${!isComplete ? 'btn-inactive' : ''}`}
      >
        Add Expense
      </button>
      {error && <p className="form-error">{error}</p>}
    </form>
  )
}
