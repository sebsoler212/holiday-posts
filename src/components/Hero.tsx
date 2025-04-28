// src/components/Hero.tsx
import { Widget } from '@uploadcare/react-widget'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { HOLIDAYS } from '../utils/holidays'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

export default function Hero() {
  const [step, setStep] = useState(0)         // 0 = intro, 1–3 = wizard
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [holiday, setHoliday] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleCheckout = async () => {
    const stripe = await stripePromise
    await stripe!.redirectToCheckout({
      lineItems: [{ price: 'YOUR_PRICE_ID', quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.href,
      customerEmail: email,
      clientReferenceId: JSON.stringify({ imageUrl, holiday }),
    })
  }

  const steps = ['Upload Photo','Select Holiday','Enter Email']

  // --- INTRO / PLACEHOLDER SCREEN ---
  if (step === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Turn your photos into festive holiday magic!</h2>
        <p className="mb-6 text-gray-700">
          Upload any photo of your loved ones and instantly get a holiday-themed version ready for cards or social posts.
        </p>
        {/* simple before/after demo */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-1/3">
            <img
              src="https://via.placeholder.com/300?text=Your+Photo"
              alt="Original"
              className="rounded shadow"
            />
          </div>
          <div className="text-2xl font-bold">→</div>
          <div className="w-1/3">
            <img
              src="https://via.placeholder.com/300?text=Holiday+Version"
              alt="Holiday Version"
              className="rounded shadow"
            />
          </div>
        </div>
        <button
          onClick={() => setStep(1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Try it now!
        </button>
      </div>
    )
  }

  // --- WIZARD STEPS 1–3 ---
  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto">
      {/* Progress bar */}
      <div className="flex justify-between mb-8">
        {steps.map((label, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${
                step === i+1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {i+1}
            </div>
            <span className={`text-xs ${step === i+1 ? 'text-blue-600' : 'text-gray-600'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 1 && (
        <div>
          <Widget
            publicKey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!}
            onChange={file => {
              if (file.cdnUrl) {
                setImageUrl(file.cdnUrl)
                setStep(2)
              }
            }}
            clearable
            previewStep={null}
          />
        </div>
      )}

      {/* Step 2: Holiday grid */}
      {step === 2 && (
        <div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {HOLIDAYS.map(h => (
              <div
                key={h.name}
                className={`border rounded p-2 cursor-pointer flex flex-col items-center ${
                  holiday === h.name ? 'border-blue-600' : 'hover:border-gray-400'
                }`}
                onClick={() => {
                  setHoliday(h.name)
                  setStep(3)
                }}
              >
                <img src={h.icon} alt={h.name} className="w-full h-20 object-contain" />
                <span className="mt-2 text-sm">{h.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStep(1)}
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Email & generate */}
      {step === 3 && (
        <div>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            onClick={handleCheckout}
            disabled={!email}
            className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
          >
            Generate & Pay
          </button>
          <button
            onClick={() => setStep(2)}
            className="mt-2 text-sm text-gray-600 hover:underline"
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  )
}
