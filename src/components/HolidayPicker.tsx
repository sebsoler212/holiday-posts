// src/components/HolidayPicker.tsx
import { HOLIDAYS } from '../utils/holidays'
import { useTheme } from './ThemeProvider'

export default function HolidayPicker() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      {/* Holiday pills */}
      <div className="flex space-x-2 mb-4 overflow-x-auto">
        {HOLIDAYS.map(h => {
          const isActive = theme.slug === h.slug
          const bgClass   = isActive ? h.colors.buttonBg : 'bg-white'
          const txtClass  = isActive ? h.colors.buttonText : 'text-gray-800'
          const hoverCls  = isActive ? h.colors.buttonHover : 'hover:bg-gray-100'

          return (
            <button
              key={h.slug}
              onClick={() => setTheme(h)}
              className={`
                ${bgClass} ${txtClass} ${hoverCls}
                px-4 py-2 border rounded flex-shrink-0 transition
              `}
            >
              {h.name}
            </button>
          )
        })}
      </div>

      {/* Example grid */}
      <div className="grid grid-cols-2 gap-4">
        {[1,2,3,4].map(i => (
          <img
            key={i}
            src={`/examples/${theme.slug}/${i}.jpg`}
            alt={`${theme.name} ${i}`}
            className="w-full rounded"
          />
        ))}
      </div>
    </div>
  )
}
