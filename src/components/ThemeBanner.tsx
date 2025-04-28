// src/components/ThemeBanner.tsx
import { useTheme } from './ThemeProvider'

export default function ThemeBanner() {
  const { theme } = useTheme()
  return (
    <div className={`p-4 ${theme.colors.accent}`}>
      <img src={theme.icon} alt={theme.name} className="inline w-8 h-8 mr-2" />
      <span className="font-bold text-xl">Holiday Posts</span>
    </div>
  )
}
