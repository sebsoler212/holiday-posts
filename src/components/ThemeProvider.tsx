import { createContext, useContext } from 'react'
import { getCurrentHoliday, Holiday } from '../utils/holidays'

const ThemeContext = createContext<Holiday>(getCurrentHoliday())

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const theme = getCurrentHoliday()

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme.colors.bg} min-h-screen`}>
        <div className={`p-4 ${theme.colors.accent}`}>
          <img src={theme.icon} alt={theme.name} className='inline w-8 h-8 mr-2' />
          <span className='font-bold text-xl'>{theme.name} Theme</span>
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
