export type Holiday = {
  name: string
  slug: string           // NEW
  start: { month: number; day: number }
  colors: { bg: string; accent: string }
  icon: string
}

export const HOLIDAYS: Holiday[] = [
  {
    name: 'Thanksgiving',
    slug: 'thanksgiving',                   // NEW
    start: { month: 11, day: 22 },
    colors: { bg: 'bg-orange-100', accent: 'text-orange-600' },
    icon: '/icons/turkey.svg'
  },
  {
    name: 'Christmas',
    slug: 'christmas',                      // NEW
    start: { month: 12, day: 1 },
    colors: { bg: 'bg-green-100', accent: 'text-red-600' },
    icon: '/icons/tree.svg'
  }
  // …and so on for each holiday
]

export function getCurrentHoliday(): Holiday {
  const today = new Date()
  const sorted = HOLIDAYS.map(h => ({
    ...h,
    date: new Date(today.getFullYear(), h.start.month - 1, h.start.day)
  })).sort((a, b) => a.date.getTime() - b.date.getTime())

  return sorted.find(h => h.date >= today) || sorted[0]
}
