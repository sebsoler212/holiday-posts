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
          <h1 className="text-2xl pb-2">About Us</h1>
          <h2 className="pb-8">Holiday Posts is a small business created by a husband &amp; wife team that love the hoidays :)</h2>
          <h2 className="pb-8">Visit <a href="https://studiomartian.com" target="_blank" className={`underline ${theme.colors.accent}`}>Studio Martian</a> to see our other apps.</h2>
          <hr className="pb-8" />
          <h2>We'd love your feedback! Please email <a href="mailto:studiothemartian@gmail.com" className={`underline ${theme.colors.accent}`}>studiothemartian@gmail.com</a> to let us know if you'd like any additional features, if you have any template ideas etc...</h2>
        </div>

        <div className="h-10"></div>

      </main>
      <Footer />
    </ThemeProvider>
  )
}
