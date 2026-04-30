"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Waves from "@/components/Waves"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pt-0 md:pb-0 overflow-hidden">
      {/* Aurora background effect */}
      <div className="aurora" />

      {/* Waves background animation */}
      <Waves
        lineColor="rgba(255, 255, 255, 0.1)"
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
      
      {/* Hero illustration - visible on larger screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-50">
          <Image
            src="/images/hero-illustration.jpg"
            alt=""
            fill
            className="object-contain rounded-full blur-sm"
            priority
          />
        </div>
      </motion.div>
      
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 md:mb-8 relative z-10"
      >
        <div className="glass rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3">
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
          <span className="text-xs md:text-sm font-medium text-foreground/90">3+ Years of Experience</span>
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-3 md:mb-4">
          <span className="gradient-text">Alin Mishra</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light"
        >
          Shopify Developer & Web Craftsman
        </motion.p>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground/80 text-center max-w-xl md:max-w-2xl px-4 relative z-10"
      >
        I build Shopify stores that actually convert. Custom themes, seamless integrations, and pixel-perfect experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 relative z-10 w-full sm:w-auto px-4 sm:px-0"
      >
        <Button
          size="lg"
          className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full w-full sm:w-auto"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get In Touch
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="glass border-primary/30 hover:border-primary/50 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-full w-full sm:w-auto"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Projects
        </Button>
      </motion.div>

      {/* Floating decorative elements - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/4 left-10 w-16 md:w-20 h-16 md:h-20 rounded-full bg-primary/20 blur-xl animate-drift hidden md:block"
        style={{ animationDelay: "0s" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-1/3 right-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-secondary/20 blur-xl animate-drift hidden md:block"
        style={{ animationDelay: "5s" }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 scroll-indicator"
      >
        <button
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1 md:gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to skills section"
        >
          <span className="text-xs md:text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </motion.div>
    </section>
  )
}
