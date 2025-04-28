import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({ loop: true })
  const { theme } = useTheme()
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const slug = theme.slug   // now safe
    setImages([1, 2, 3, 4].map(n => `/examples/${slug}/${n}.jpg`))
  }, [theme])

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide">
          <img src={src} alt={`${theme.name} example ${idx + 1}`} className="w-full" />
        </div>
      ))}
    </div>
  )
}
