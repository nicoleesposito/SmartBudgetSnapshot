# SmartBudget

A lightweight personal budgeting app built with React. Track your income sources and expenses, visualize your spending with interactive pie charts, and see your remaining balance update in real time — all without a backend or account required.

## Features

### Income Tracking
- Add multiple named income sources (e.g. Salary, Freelance, Rental)
- Remove individual sources at any time
- Total income is calculated automatically from all sources

### Expense Tracking
- Add expenses with a name, amount, and category
- Categories: Housing, Food, Transport, Health, Entertainment, Other
- Filter the expense list by category
- Remove individual expenses at any time

### Budget Summary
- Displays total income, total expenses, and remaining balance
- Balance color codes green when within budget and red when over budget
- Negative balances display correctly as `-$150.00`

### Charts
- **Budget Chart** — toggle between two views:
  - *Expenses:* each expense as its own slice, colored by category
  - *Income:* each income source as its own slice
- **Income vs Expenses** — donut chart showing what portion of income has been spent vs what remains, with a live percentage label and stat breakdown

### Data Persistence
- All income and expenses are saved to `localStorage`
- Data is restored automatically on page refresh — no data loss on close

### Form Validation
- Submit buttons are grayed out until all required fields are filled
- Clicking the grayed button shows an inline error message explaining what is missing

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at 'http://localhost:5173' by default.

