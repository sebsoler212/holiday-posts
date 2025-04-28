import React, { createContext, useContext, useState, ReactNode } from 'react'
import { getCurrentHoliday, Holiday } from '../utils/holidays'

type ThemeContextType = {
  theme: Holiday
  setTheme: (h: Holiday) => void
}

// Create context with no default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Holiday>(getCurrentHoliday())

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* apply theme colors/icons here */}
      <div className={`${theme.colors.bg} min-h-screen`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// Custom hook that ensures context is not undefined
export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
