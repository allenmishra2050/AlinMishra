"use client"

import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 md:pt-0 md:pb-0 overflow-hidden">
      {/* Aurora background effect */}
      <div className="aurora" />
      
      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-4 md:mb-6">
          <span className="shiny-text">Alin Mishra</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-medium"
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
