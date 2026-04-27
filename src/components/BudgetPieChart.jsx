import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function BudgetPieChart({ data, colors }) {
  const hasData = data && data.length > 0 && data.some(d => d.value > 0)

  if (!hasData) {
    return <p className="empty-state">No data to display yet.</p>
  }

  const filteredData = data.filter(d => d.value > 0)

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={filteredData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={95}
          paddingAngle={3}
          dataKey="value"
        >
          {filteredData.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={entry.color ?? colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip formatter={value => [`$${value.toFixed(2)}`, '']} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
