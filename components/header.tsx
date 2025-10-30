"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
              <span className="metallic-text">ColorTouch</span>         
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-foreground hover:text-blue-700 transition">
              Home
            </Link>
            <Link href="#" className="text-foreground hover:text-blue-700 transition">
              About
            </Link>

            {/* Services Dropdown (desktop uses group hover) */}
            <div className="relative group">
              <button
                aria-expanded="false"
                className="flex items-center gap-1 text-foreground hover:text-blue-700 transition"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="ml-1"
                >
                  <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
                </svg>
              </button>

              <div className="absolute left-0 mt-0 w-56 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                {services.map((service, i) => (
                  <Link
                    key={service}
                    href="#"
                    className={`block px-4 py-2 text-sm  transition metallic-text metallic-text-${i + 1}`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#" className="text-foreground hover:text-blue-700 transition">
              Portfolio
            </Link>
            <Link href="#" className="text-foreground hover:text-blue-700 transition">
              Testimonials
            </Link>
            <Link href="#" className="text-foreground hover:text-blue-700 transition">
              Contact
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.18 12 2.88 5.71 4.29 4.29 10.59 10.6 16.88 4.29z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${mobileOpen ? "block" : "hidden"} border-t border-border bg-white`}>
        <div className="px-4 py-3 space-y-1">
          <Link href="#" className="block px-3 py-2 rounded text-foreground hover:bg-muted transition">
            Home
          </Link>
          <Link href="#" className="block px-3 py-2 rounded text-foreground hover:bg-muted transition">
            About
          </Link>

          {/* Mobile Services - expandable */}
          <div>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              aria-expanded={isServicesOpen}
              className="w-full text-left flex items-center justify-between px-3 py-2 rounded text-foreground hover:bg-muted transition"
            >
              <span>Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
              </svg>
            </button>

            {isServicesOpen && (
              <div className="mt-1 space-y-1 pl-4">
                {services.map((service, i) => (
                  <Link
                    key={service}
                    href="#"
                    className={`block px-3 py-2 rounded text-sm transition hover:metallic-text hover:metallic-text-${i + 1}`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="#" className="block px-3 py-2 rounded text-foreground hover:bg-muted transition">
            Portfolio
          </Link>
          <Link href="#" className="block px-3 py-2 rounded text-foreground hover:bg-muted transition">
            Testimonials
          </Link>
          <Link href="#" className="block px-3 py-2 rounded text-foreground hover:bg-muted transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Make metallic text styles global so links and other components get the gradient */}
      <style jsx global>{`
        /* base to ensure gradient is clipped to the text and overrides Tailwind color utilities */
        .metallic-text,
        .metallic-text-1,
        .metallic-text-2,
        .metallic-text-3,
        .metallic-text-4,
        .metallic-text-5,
        .metallic-text-6,
        .metallic-text-7 {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent !important; /* Safari / Chrome */
          color: transparent !important; /* override utility classes like text-foreground */
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 200% 100%;
        }

        .metallic-text-1 { background-image: linear-gradient(90deg, #d4af37, #ffd27f); }
        .metallic-text-2 { background-image: linear-gradient(90deg, #c0c0c0, #f0f0f0); }
        .metallic-text-3 { background-image: linear-gradient(90deg, #b87333, #d99a6a); }
        .metallic-text-4 { background-image: linear-gradient(90deg, #e6c1c1, #ffd6d6); }
        .metallic-text-5 { background-image: linear-gradient(90deg, #c6e2ff, #8fbce6); }
        .metallic-text-6 { background-image: linear-gradient(90deg, #d1ffd6, #8fe59a); }
        .metallic-text-7 { background-image: linear-gradient(90deg, #f5e6ff, #d6b3ff); }

        /* subtle hover state while keeping the gradient visible */
        .metallic-text:hover,
        .metallic-text-1:hover,
        .metallic-text-2:hover,
        .metallic-text-3:hover,
        .metallic-text-4:hover,
        .metallic-text-5:hover,
        .metallic-text-6:hover,
        .metallic-text-7:hover {
          filter: brightness(0.98);
        }
      `}</style>
    </header>
  )
}
