export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      image: "/modern-ecommerce-website.png",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "Branding",
      image: "/luxury-brand-logo-and-identity-design.jpg",
    },
    {
      id: 3,
      title: "Restaurant Branding",
      category: "Branding",
      image: "/restaurant-brand-design-with-warm-colors.jpg",
    },
    {
      id: 4,
      title: "Mobile App UI",
      category: "UI/UX",
      image: "/colorful-mobile-app-interface-design.jpg",
    },
    {
      id: 5,
      title: "Social Campaign",
      category: "Marketing",
      image: "/vibrant-social-media-campaign-design.jpg",
    },
    {
      id: 6,
      title: "Tech Startup",
      category: "Web Design",
      image: "/modern-tech-startup-website.jpg",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent metallic-text">
              Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our successful projects and see how we've helped brands achieve remarkable digital transformations.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-orange-300 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
