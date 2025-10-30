const servicesList = [
  {
    icon: "⚡",
    title: "SEO Optimization",
    description:
      "Boost your search rankings with our advanced SEO strategies. We optimize every aspect of your online presence for maximum visibility.",
  },
  {
    icon: "🎨",
    title: "Brand Design",
    description:
      "Create a memorable brand identity that resonates with your audience. From logos to complete visual systems, we bring your vision to life.",
  },
  {
    icon: "📱",
    title: "Social Media",
    description:
      "Engage your audience across all social platforms with compelling content and strategic campaigns that drive real results.",
  },
  {
    icon: "📈",
    title: "Paid Advertising",
    description:
      "Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other premium platforms.",
  },
  {
    icon: "🌐",
    title: "Web Development",
    description:
      "Build stunning, high-performance websites that convert visitors into customers. Modern design meets powerful functionality.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Make data-driven decisions with comprehensive analytics and reporting. Track performance and optimize for continuous growth.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive digital marketing solutions designed to elevate your brand and drive meaningful engagement
            with your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
