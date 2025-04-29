// src/components/ThemeProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { getCurrentHoliday, Holiday } from '../utils/holidays'

type ThemeContextType = {
  theme: Holiday
  setTheme: (h: Holiday) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Holiday>(getCurrentHoliday())

  return (
    <div className={`${theme.colors.bg} min-h-screen transition-colors duration-300`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
