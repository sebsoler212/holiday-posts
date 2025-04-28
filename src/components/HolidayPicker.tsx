import { HOLIDAYS } from '../utils/holidays'
import { useState } from 'react'

export default function HolidayPicker() {
  const [selected, setSelected] = useState(HOLIDAYS[0].name)
  const images = [1, 2, 3, 4].map(n => `/examples/${selected.toLowerCase()}/${n}.jpg`)

  return (
    <div>
      <div className='flex space-x-2 mb-4'>
        {HOLIDAYS.map(h => (
          <button
            key={h.name}
            onClick={() => setSelected(h.name)}
            className='px-4 py-2 border rounded'
          >
            {h.name}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`${selected} ${idx + 1}`} />
        ))}
      </div>
    </div>
  )
}
