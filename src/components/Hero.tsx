// src/components/Hero.tsx
"use client"

import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { FileUploaderInline } from "@uploadcare/react-uploader"
import { useTheme } from "./ThemeProvider"
import { HOLIDAYS } from "../utils/holidays"
import { MdOutlineFileUpload } from "react-icons/md"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

export default function Hero() {
  const { theme } = useTheme()
  const [step, setStep] = useState(0)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [holiday, setHoliday] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const steps = ["Upload", "Select Holiday", "Email"]
  const activeCircle = `${theme.colors.buttonBg} ${theme.colors.buttonText}`
  const inactiveCircle = "bg-gray-200 text-gray-600"

  const handleCheckout = async () => {

    console.log(email);
    console.log(imageUrl);
    console.log(holiday);

    /*
    const stripe = await stripePromise
    await stripe!.redirectToCheckout({
      lineItems: [{ price: "YOUR_PRICE_ID", quantity: 1 }],
      mode: "payment",
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.href,
      customerEmail: email,
      clientReferenceId: JSON.stringify({ imageUrl, holiday }),
    })
    */
  }

  // Intro screen (step 0)
  if (step === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 max-w-lg mx-auto text-center h-[350px]">
        <h2 className={`${theme.colors.accent} text-2xl font-bold mb-4 lg:px-14`}>
          Get your Holiday Posts in 3 easy steps
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <img
            src="https://via.placeholder.com/150?text=Original"
            alt="Before"
            className="rounded shadow"
          />
          <div className="text-2xl font-bold">→</div>
          <img
            src="https://via.placeholder.com/150?text=Holiday"
            alt="After"
            className="rounded shadow"
          />
        </div>
        <button
          onClick={() => setStep(1)}
          className={`
            ${theme.colors.buttonBg}
            ${theme.colors.buttonText}
            ${theme.colors.buttonHover}
            px-6 py-3 rounded-lg transition w-full
          `}
        >
          Try it now!
        </button>
      </div>
    )
  }

  // Steps 1–3 wizard (fixed height container)
  return (
    <div className="relative bg-white rounded-xl shadow max-w-lg mx-auto h-[350px]">
      {/* Step Bar Header (fixed height) */}
      <div className="h-16 p-4 flex justify-between items-center bg-white border-b z-40">
        {steps.map((label, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full mb-1 flex items-center justify-center ${
                step === i + 1 ? activeCircle : inactiveCircle
              }`}
            >
              {i + 1}
            </div>
            <span className={`text-xs ${step === i + 1 ? theme.colors.accent : "text-gray-600"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="absolute top-16 left-0 right-0 bottom-0 overflow-auto">
        {/* Step 1: Inline uploader */}
        <div
          className={`absolute inset-0 p-4 ${
            step === 1 ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"
          }`}
        >
          <FileUploaderInline
            pubkey={process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!}
            classNameUploader="uc-light"
            className="fileUploaderWrapper"
            imgOnly
            data-images-only
            multiple={false}
            onFileUploadSuccess={(fileInfo) => {
              if (fileInfo.cdnUrl) {
                setImageUrl(fileInfo.cdnUrl)
                setStep(2)
              }
            }}
          />
          <p className="text-center">
            <span className="inline-flex items-center space-x-1 whitespace-nowrap">
              <span className="pl-[15px]">or click</span>
              <MdOutlineFileUpload className="inline-block align-middle text-2xl" />
              <span>to upload</span>
            </span>
          </p>
        </div>

        {/* Step 2: Holiday Picker */}
        <div
          className={`absolute inset-0 p-4 bg-white h-full ${
            step === 2 ? "z-20 pointer-events-auto" : "z-0 pointer-events-none"
          }`}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {HOLIDAYS.map((h) => {
                const isActive = holiday === h.name
                return (
                  <div
                    key={h.slug}
                    onClick={() => {
                      setHoliday(h.name)
                      setStep(3)
                    }}
                    className={`
                      cursor-pointer rounded p-2 flex flex-col items-center
                      ${isActive ? `border-2 ${h.colors.accent}` : "border border-gray-300"}
                      hover:border-gray-400 transition
                    `}
                  >
                    <img src={h.icon} alt={h.name} className="w-full h-20 object-contain" />
                    <span
                      className={`mt-2 text-sm ${
                        isActive ? h.colors.accent : "text-gray-800"
                      }`}
                    >
                      {h.name}
                    </span>
                  </div>
                )
              })}
            </div>
            <button
              onClick={() => setStep(1)}
              className={`mt-4 text-sm ${theme.colors.accent} hover:underline transition`}
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Step 3: Email & Pay */}
        <div
          className={`absolute inset-0 p-4 bg-white h-full ${
            step === 3 ? "z-30 pointer-events-auto" : "z-0 pointer-events-none"
          }`}
        >
          <div className="space-y-4">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setStep(2)}
                className={`px-4 py-2 rounded border ${theme.colors.accent} hover:underline transition`}
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
                Get My Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
