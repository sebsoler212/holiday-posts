import { HOLIDAYS } from '../utils/holidays'
import { useTheme } from './ThemeProvider'

export default function HolidayPicker() {
  const { theme, setTheme } = useTheme()
  const slug = theme.slug    // safe, always defined
  const images = [1, 2, 3, 4].map(i => ({
    src: `/examples/${slug}/${i}.jpg`,
    alt: `${theme.name} example ${i}`
  }))

  return (
    <div>
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {HOLIDAYS.map(h => {
          const isActive = theme.slug === h.slug
          const bgClass   = isActive ? h.colors.buttonBg : 'bg-white'
          const txtClass  = isActive ? h.colors.buttonText : 'text-gray-800'
          const hover     = isActive
            ? h.colors.buttonHover
            : 'hover:bg-gray-100'

          return (
            <button
              key={h.slug}
              onClick={() => setTheme(h)}
              className={`
                ${bgClass} ${txtClass} ${hover}
                px-4 py-2 border rounded flex-shrink-0 transition
              `}
            >
              {h.name}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-full rounded"
          />
        ))}
      </div>
    </div>
  )
}
