// src/components/ReviewsWall.tsx
import React from 'react'
import { Star } from 'lucide-react'

interface Review {
  name: string
  avatar: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    name: 'Lawrence S.',
    avatar: 'https://ucarecdn.com/bae25942-c405-48a7-a7a5-935f6fc2e419/ChatGPTImageMay5202503_20_21PM.png',
    rating: 5,
    text: 'Wow, this app is amazing! My photos look straight out of a fantasy movie. So easy to upload too!',
  },
  {
    name: 'Maria G.',
    avatar: 'https://ucarecdn.com/bae25942-c405-48a7-a7a5-935f6fc2e419/ChatGPTImageMay5202503_20_21PM.png',
    rating: 4,
    text: 'Love how simple and festive my cards turned out. Highly recommend!',
  },
  {
    name: 'Ethan C.',
    avatar: 'https://ucarecdn.com/bae25942-c405-48a7-a7a5-935f6fc2e419/ChatGPTImageMay5202503_20_21PM.png',
    rating: 5,
    text: "Such a fun experience—my friends can't stop sharing their holiday versions!",
  },
  // …add more reviews as needed
]

export default function ReviewsWall() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Wall of Love</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="relative bg-white border border-gray-300 rounded-xl shadow-md p-6"
          >
            {/* Avatar + name + stars */}
            <div className="flex items-center mb-4">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-12 h-12 rounded-lg border border-gray-400 mr-4 object-cover"
              />
              <div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">{r.name}</span>
                  <div className="flex ml-2">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Review text */}
            <p className="text-gray-800">{r.text}</p>

          </div>
        ))}
      </div>
    </div>
  )
}
