export type Holiday = {
  name: string
  slug: string
  start: { month: number; day: number }
  colors: {
    bg: string         // page background
    accent: string     // accent text / headings
    buttonBg: string   // primary button background
    buttonText: string // primary button text color
    buttonHover: string// hover state for that button
    faqHover: string
  }
  icon: string
}

export const HOLIDAYS: Holiday[] = [
  {
    name: 'Thanksgiving',
    slug: 'thanksgiving',
    start: { month: 11, day: 22 },
    icon: '/icons/turkey.svg',
    colors: {
      bg: 'bg-orange-100',
      accent: 'text-orange-600',
      buttonBg: 'bg-orange-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-orange-700',
      faqHover: 'hover:bg-orange-600'
    },
  },
  {
    name: 'Christmas',
    slug: 'christmas',
    start: { month: 12, day: 1 },
    icon: '/icons/tree.svg',
    colors: {
      bg: 'bg-green-200',
      accent: 'text-red-600',
      buttonBg: 'bg-red-600',
      buttonText: 'text-white',
      buttonHover: 'hover:bg-red-700',
      faqHover: 'hover:bg-red-600'
    },
  },
  // …add more holidays with their own button styles
]

export function getCurrentHoliday(): Holiday {
  const today = new Date()
  const sorted = HOLIDAYS.map(h => ({
    ...h,
    date: new Date(today.getFullYear(), h.start.month - 1, h.start.day)
  })).sort((a, b) => a.date.getTime() - b.date.getTime())

  return sorted.find(h => h.date >= today) || sorted[0]
}
