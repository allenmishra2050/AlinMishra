"use client"

import { StarField } from "@/components/star-field"
import { CustomCursor } from "@/components/custom-cursor"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Services } from "@/components/sections/services"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <StarField />
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
