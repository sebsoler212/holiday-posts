import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'What file types can I upload?',
    answer:
      'You can upload JPEG, PNG, and WebP images up to 10MB in size. Animated formats (GIF, WebM) are not supported.',
  },
  {
    question: 'How long until I get my holiday version?',
    answer:
      "Right after payment you'll receive an email with your AI-generated holiday image—typically within a few minutes.",
  },
  {
    question: 'Can I request revisions?',
    answer:
      "Yes! If you're not 100% happy, reply to your delivery email within 7 days and we'll tweak it for you free of charge.",
  },
  {
    question: 'Is my original photo kept private?',
    answer:
      'Absolutely. We delete your original and generated images from our servers 24 hours after delivery.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="max-w-2xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <div
            key={i}
            className="border rounded overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-gray-100 hover:bg-gray-200"
            >
              <span className="font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === i ? 'rotate-45' : ''
                }`}
                viewBox="0 0 24 24"
              >
                <line
                  x1="12" y1="5" x2="12" y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="5" y1="12" x2="19" y2="12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
