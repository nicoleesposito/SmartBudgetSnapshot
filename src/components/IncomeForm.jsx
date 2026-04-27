import { useState } from 'react'

export default function IncomeForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
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
      setError('Please enter a source name and a valid amount before adding.')
      return
    }
    onAdd(name.trim(), parsed)
    setName('')
    setAmount('')
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g. Salary, Freelance, Rental"
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
      <button
        type="submit"
        className={`btn-primary ${!isComplete ? 'btn-inactive' : ''}`}
      >
        Add Income Source
      </button>
      {error && <p className="form-error">{error}</p>}
    </form>
  )
}
