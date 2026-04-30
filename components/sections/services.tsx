"use client"

import { motion } from "framer-motion"
import { 
  Palette, 
  Puzzle, 
  Zap, 
  Globe, 
  MessageSquare, 
  Wrench 
} from "lucide-react"
import { FloatingCard } from "@/components/floating-card"

const services = [
  {
    icon: Palette,
    title: "Custom Shopify Themes",
    description: "Bespoke theme development from scratch or customization of existing themes to match your brand.",
    color: "pink" as const,
  },
  {
    icon: Puzzle,
    title: "App Integration",
    description: "Seamless integration of third-party apps and APIs to extend your store&apos;s functionality.",
    color: "sage" as const,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your store for better conversions and SEO with advanced optimization.",
    color: "slate" as const,
  },
  {
    icon: Globe,
    title: "Headless Commerce",
    description: "Modern headless setups using Shopify&apos;s Storefront API for ultimate flexibility.",
    color: "pink" as const,
  },
  {
    icon: MessageSquare,
    title: "Technical Support",
    description: "3+ years of customer support experience — I speak both tech and human fluently.",
    color: "sage" as const,
  },
  {
    icon: Wrench,
    title: "Maintenance & Updates",
    description: "Ongoing support to keep your store running smoothly with regular updates.",
    color: "slate" as const,
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">What I Offer</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            End-to-end solutions for your Shopify store — from concept to conversion
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FloatingCard
              key={service.title}
              delay={index * 0.08}
              glowColor={service.color}
              floatAnimation="slow"
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 w-fit mb-4 md:mb-6"
                >
                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </motion.div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground flex-1">
                  {service.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 lg:mt-20 text-center"
        >
          <div className="glass-strong rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Let&apos;s talk about your project and how I can help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm md:text-lg hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
