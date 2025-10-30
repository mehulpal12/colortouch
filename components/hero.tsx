"use client"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image (full-bleed) */}
      <img
        src="/modern-office-workspace-with-team-collaboration.jpg"
        alt="Office workspace"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-orange-50/70 z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 opacity-40 blur-2xl z-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 opacity-30 blur-3xl z-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-30 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Add <span className="metallic-text">Color</span> to Your{" "}
            <span className="metallic-text">Digital</span> <span className="metallic-text">Presence</span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Transform your brand with our creative digital marketing solutions. We blend strategy with artistry to
            deliver exceptional results.
          </p>

          <div className="flex gap-4 mb-12 ">
            <button className="px-8 py-3   font-bold bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff] text-transparent bg-clip-text rounded-lg font-semibold hover:bg-[linear-gradient(90deg,#00ff9d,#00b3ff,#0077ff,#00ff9d)] transition">
              Let's Grow Together
            </button>
            <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Get Free Audit
            </button>
          </div>
        </div>
      </div>

      {/* Make metallic-text available globally (scoped CSS in header won't apply to this component) */}
      <style jsx global>{`
        .metallic-text {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          display: inline-block;
         
        }
      `}</style>
    </section>
  )
}
