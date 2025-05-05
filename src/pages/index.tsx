import { ThemeProvider } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import HolidayPicker from '../components/HolidayPicker'
import ReviewsWall from '../components/ReviewsWall'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <ThemeBanner />
      <main className='container space-y-12 py-4 px-4 max-w-6xl mx-auto shantell-sans-holiday'>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="pb-4">
            <Intro />
          </div>

          <div className="">
            <Hero />
          </div>
        </div>

        <Carousel />
        <HolidayPicker />
        <ReviewsWall />
        <Faq />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
