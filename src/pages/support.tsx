import { ThemeProvider, useTheme } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
import Footer from '../components/Footer'

export default function Support() {
  const { theme } = useTheme()

  return (
    <ThemeProvider>
      <ThemeBanner />
      <main className='container space-y-12 px-4 max-w-6xl mx-auto shantell-sans-holiday'>

        <div className="px-4 py-10 max-w-6xl mx-auto">
          <h1 className="text-2xl pb-2">Support</h1>
          <h2 className="pb-8">If you have any trouble at all please email <a href="mailto:admin@groupswap.ai" className={`underline ${theme.colors.accent}`}>admin@groupswap.ai</a></h2>
          <hr className="pb-8" />
          <h2>We'd love your feedback! Please email <a href="mailto:admin@groupswap.ai" className={`underline ${theme.colors.accent}`}>admin@groupswap.ai</a> to let us know if you'd like any additional features, if you have any template ideas etc...</h2>
        </div>

        <div className="h-10"></div>

      </main>
      <Footer />
    </ThemeProvider>
  )
}
