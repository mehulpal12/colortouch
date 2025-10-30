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
              <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
              </button>
              <div className="absolute left-0  mt-0 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service) => (
                  <Link
                    key={service}
                    href="#"
                    className="block px-4 py-2 text-sm text-foreground  hover:bg-muted transition "
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#" className="text-foreground hover:text-primary transition ">
              Portfolio
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              Testimonials
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
