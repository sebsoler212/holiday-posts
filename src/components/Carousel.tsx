import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function Carousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({ loop: true, slides: { perView: 1 } })
  const { name } = useTheme()
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // assuming public/examples/{holiday}/{1..4}.jpg
    setImages([1, 2, 3, 4].map(n => `/examples/${name.toLowerCase()}/${n}.jpg`))
  }, [name])

  return (
    <div ref={sliderRef} className='keen-slider'>
      {images.map((src, idx) => (
        <div key={idx} className='keen-slider__slide'>
          <img src={src} alt={`${name} example ${idx + 1}`} />
        </div>
      ))}
    </div>
  )
}
