export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-orange-50">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              We Add <span className="text-orange-500">Color</span> to Your{" "}
              <span className="text-red-500">Digital</span> <span className="text-yellow-500">Presence</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Transform your brand with our creative digital marketing solutions. We blend strategy with artistry to
              deliver exceptional results.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12">
              <button className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-50 transition">
                Let's Grow Together
              </button>
              <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
                Get Free Audit
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl opacity-50"></div>
            <img
              src="/modern-office-workspace-with-team-collaboration.jpg"
              alt="Office workspace"
              className="relative z-10 w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
