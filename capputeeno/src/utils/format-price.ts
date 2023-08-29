export function formatValue(valueInCents: number) {
  const valueFormatted = valueInCents / 100
  return valueFormatted.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}