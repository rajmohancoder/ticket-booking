import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Events } from "@/components/Events"
import { About } from "@/components/About"
import { Testimonials } from "@/components/Testimonials"
import { Support } from "@/components/Support"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Events />
        <About />
        <Testimonials />
        <Support />
      </main>
      <Footer />
    </div>
  )
}
