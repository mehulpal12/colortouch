export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className=" metallic-text capitalize">
              colorTouch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're a passionate team of digital artists and marketing strategists who believe every brand deserves to
            shine in the digital landscape.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Creative Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, ColorTouch emerged from a simple belief: digital marketing should be as vibrant and
              dynamic as the brands we represent. We've helped over 500 companies transform their online presence
              through innovative strategies and creative excellence.
            </p>

            <div className="space-y-4">
              {["Creative Excellence", "Data-Driven Results", "Client Success Focus"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full shine-btn bg-gradient-to-r from-[#00ff9d] via-[#00b3ff] to-[#0077ff]"></div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
            <img src="/creative-team-working-in-modern-office-with-orange.jpg" alt="Team collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
