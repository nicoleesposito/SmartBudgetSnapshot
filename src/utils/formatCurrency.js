/**
 * Formats a number as currency with the sign before the dollar sign.
 *   formatCurrency(150)   → "$150.00"
 *   formatCurrency(-150)  → "-$150.00"  (not "$-150.00")
 */
export function formatCurrency(value) {
  const sign = value < 0 ? '-' : ''
  return `${sign}$${Math.abs(value).toFixed(2)}`
}
