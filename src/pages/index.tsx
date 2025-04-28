import { ThemeProvider } from '../components/ThemeProvider'
import ThemeBanner from '../components/ThemeBanner'
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
      <main className='container mx-auto space-y-16 py-8 px-4'>
        <Hero />
        <Carousel />
        <HolidayPicker />
        <ReviewsWall />
        <Faq />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
