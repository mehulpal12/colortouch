"use client"

import { useState } from "react"

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "The ColorTouch team delivered exceptional results for our fitness app launch. Their comprehensive digital marketing strategy helped us reach 50,000 downloads in just three months. Their creativity and expertise are unmatched.",
    author: "Emily Chen",
    title: "Founder, FitLife App",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    rating: 5,
    text: "Working with ColorTouch transformed our brand presence. Their strategic approach to social media marketing increased our engagement by 300% in just two months. Highly recommended!",
    author: "Marcus Johnson",
    title: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    rating: 5,
    text: "ColorTouch's web development and design services exceeded our expectations. They created a stunning website that not only looks amazing but also converts visitors into customers.",
    author: "Sarah Williams",
    title: "Marketing Director, Fashion Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear what our clients say about their experience working with ColorTouch and the results we've achieved
            together.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 shadow-lg text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <span key={i} className="text-3xl">
                ⭐
              </span>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">"{current.text}"</p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
            />
            <div className="text-left">
              <h4 className="font-bold text-foreground text-lg">{current.author}</h4>
              <p className="text-gray-600 text-sm">{current.title}</p>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
