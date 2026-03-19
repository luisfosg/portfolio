export const formatDate = (iso: string) => {
  if (!iso) return ''

  const d = new Date(iso)

  const formatted = new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    year: 'numeric',
  }).format(d)

  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

export const getDuration = (startIso: string, endIso?: string) => {
  const start = new Date(startIso)
  const end = endIso ? new Date(endIso) : new Date()

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  if (totalMonths < 0) totalMonths = 0

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []

  if (years) parts.push(years + (years === 1 ? ' año' : ' años'))
  if (months) parts.push(months + (months === 1 ? ' mes' : ' meses'))
  return parts.length ? parts.join(', ') : '0 meses'
}
