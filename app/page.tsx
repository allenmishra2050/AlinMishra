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
import Waves from "@/components/Waves"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <StarField />
      <CustomCursor />
      <div className="fixed inset-0 z-0">
        <Waves
          lineColor="rgba(255, 255, 255, 0.08)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

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
