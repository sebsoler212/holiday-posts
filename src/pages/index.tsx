import { useRef, useState } from 'react'
import { ThemeProvider } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import HolidayPicker from '../components/HolidayPicker'
import ReviewsWall from '../components/ReviewsWall'
import Faq from '../components/Faq'
import TryNow from '../components/TryNow'
import Footer from '../components/Footer'

export default function Home() {

  const [heroStep, setHeroStep] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // scroll + set step
  const handleTryNow = () => {
    setHeroStep(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ThemeProvider>
      <ThemeBanner />
      <main className='container space-y-12 px-4 max-w-6xl mx-auto shantell-sans-holiday'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="pb-4 pt-4">
            <Intro />
          </div>

          <div ref={heroRef} className="">
            <Hero step={heroStep} setStep={setHeroStep} />
          </div>
        </div>

        <HolidayPicker />

        <TryNow tryNow={handleTryNow} />

        <ReviewsWall />

        <Faq />

        <TryNow tryNow={handleTryNow} />

        <div className="h-10"></div>

      </main>
      <Footer />
    </ThemeProvider>
  )
}
