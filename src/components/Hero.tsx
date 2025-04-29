// src/components/Hero.tsx
import { Widget } from '@uploadcare/react-widget'
import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useTheme } from './ThemeProvider'
import { HOLIDAYS } from '../utils/holidays'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

export default function Hero() {
  const { theme } = useTheme()
  const [step, setStep] = useState(0)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [holiday, setHoliday] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const steps = ['Upload Photo','Select Holiday','Enter Email']

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

  // Helper classes
  const activeCircle = `${theme.colors.buttonBg} ${theme.colors.buttonText}`
  const inactiveCircle = 'bg-gray-200 text-gray-600'

  // Intro
  if (step === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto text-center">
        <h2 className={`${theme.colors.accent} text-2xl font-bold mb-4`}>Turn your photos into festive holiday magic!</h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <img src="https://via.placeholder.com/150" alt="Before" className="rounded shadow"/>
          <div className="text-2xl font-bold">→</div>
          <img src="https://via.placeholder.com/150?text=Holiday" alt="After" className="rounded shadow"/>
        </div>
        <button
          onClick={() => setStep(1)}
          className={`
            ${theme.colors.buttonBg} ${theme.colors.buttonText} ${theme.colors.buttonHover}
            px-6 py-3 rounded-lg transition
          `}
        >
          Try it now!
        </button>
      </div>
    )
  }

  // Wizard
  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto">
      {/* Progress */}
      <div className="flex justify-between mb-8">
        {steps.map((label, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full mb-2 flex items-center justify-center ${
              step === i+1 ? activeCircle : inactiveCircle
            }`}>
              {i+1}
            </div>
            <span
              className={`text-xs ${step === i+1 ? theme.colors.accent : 'text-gray-600'}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Upload */}
      {step === 1 && (
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
      )}

      {/* Step 2: Holiday Select */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {HOLIDAYS.map(h => (
              <div
                key={h.slug}
                className={`border rounded p-2 cursor-pointer flex flex-col items-center ${
                  holiday === h.name ? `border-${theme.colors.accent.split('-')[1]}` : 'hover:border-gray-400'
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
            className={`
              px-4 py-2 border rounded
              ${theme.colors.buttonBg}
              ${theme.colors.buttonText}
              ${theme.colors.buttonHover}
              transition
            `}
          >
            ← Back
          </button>
        </div>
      )}

      {/* Step 3: Email & Pay */}
      {step === 3 && (
        <div className="space-y-4">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <div className="flex justify-between">
            <button
              onClick={() => setStep(2)}
              className={`
                px-4 py-2 border rounded
                ${theme.colors.buttonBg}
                ${theme.colors.buttonText}
                ${theme.colors.buttonHover}
                transition
              `}
            >
              ← Back
            </button>
            <button
              onClick={handleCheckout}
              disabled={!email}
              className={`
                ${theme.colors.buttonBg}
                ${theme.colors.buttonText}
                ${theme.colors.buttonHover}
                px-4 py-2 rounded disabled:opacity-50 transition
              `}
            >
              Generate & Pay
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
