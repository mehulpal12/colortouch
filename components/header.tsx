"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    "Digital Strategy",
    "Search Engine Optimization",
    "Social Media Marketing",
    "PPC & Media Buying",
    "Website Designing",
    "Influencer Marketing",
    "Content Marketing",
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-orange-500">Color</span>
              <span className="text-yellow-500">Touch</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-foreground hover:text-primary transition">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service}
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#" className="text-foreground hover:text-primary transition">
              Portfolio
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              Testimonials
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-medium hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
