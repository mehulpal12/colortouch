import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
