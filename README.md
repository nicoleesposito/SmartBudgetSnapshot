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

## Tech Stack

- [React 19](https://react.dev/) — UI and state management
- [Vite 8](https://vite.dev/) — dev server and build tool
- [Recharts](https://recharts.org/) — pie/donut chart rendering
- [Poppins](https://fonts.google.com/specimen/Poppins) — typography via Google Fonts
- `localStorage` — client-side persistence, no backend required

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

The dev server runs at `http://localhost:5173` by default.

## Deploying to Netlify

### Option 1 — Netlify UI (recommended for first deploy)

1. Push this repository to GitHub
2. Log in to [netlify.com](https://netlify.com) and click **Add new site → Import an existing project**
3. Connect your GitHub account and select this repository
4. Set the following build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Netlify will automatically redeploy on every push to `main`.

### Option 2 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### SPA Routing Note

This app uses only a single route so no `_redirects` file is needed. If you add client-side routing in the future, create `public/_redirects` with:

```
/*  /index.html  200
```

## Project Structure

```
src/
├── components/
│   ├── IncomeSection.jsx     # Combined income form + list card
│   ├── IncomeForm.jsx        # Add income source form
│   ├── IncomeList.jsx        # Income sources list
│   ├── IncomeItem.jsx        # Single income source row
│   ├── ExpenseSection.jsx    # Combined expense form + list card
│   ├── ExpenseForm.jsx       # Add expense form
│   ├── ExpenseList.jsx       # Expense list with category filter
│   ├── ExpenseItem.jsx       # Single expense row
│   ├── Summary.jsx           # Income / expenses / balance card
│   ├── ChartSection.jsx      # Togglable expenses / income pie chart
│   ├── BudgetPieChart.jsx    # Recharts donut chart wrapper
│   ├── ChartToggle.jsx       # Expenses / Income toggle buttons
│   └── BalanceChart.jsx      # Income vs expenses overview chart
└── utils/
    └── formatCurrency.js     # Formats numbers as -$0.00 currency strings
```
