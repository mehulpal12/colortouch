"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    })
  }

  return (
    <section className="pb-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="metallic-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to add color to your digital presence? Let's discuss how we can help your brand shine in the digital
            landscape.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Let's Start Something Amazing</h3>

            <div className="space-y-6">
              {/* Visit Our Office */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shine-btn bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff] rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Visit Our Office</h4>
                  <p className="text-gray-600">123 Creative Street, Design District, NY 10001</p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shine-btn bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff] rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex gap-4">
                <div className="w-12 h-12 shine-btn bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff] rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@colortouch.agency</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground ">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground ">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-foreground ">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-foreground ">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  placeholder="Your Company"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground ">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 shine-btn bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff] meta text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
