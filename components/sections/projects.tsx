"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code2 } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Shopify Store Development",
    description: "Developed responsive Shopify storefronts with custom sections and product templates for optimal conversion.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    link: "https://alin-mishra.myshopify.com",
    color: "pink" as const,
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    description: "Built a responsive portfolio showcasing projects and skills using modern web technologies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    color: "sage" as const,
  },
  {
    title: "IoT Smart Safety System",
    description: "Developed an IoT-based industrial safety monitoring system for real-time hazard detection.",
    tech: ["IoT", "Sensors", "Python"],
    color: "slate" as const,
  },
  {
    title: "PoseNet AI",
    description: "Built a posture detection system using TensorFlow.js for real-time body pose estimation.",
    tech: ["TensorFlow.js", "JavaScript", "AI/ML"],
    color: "pink" as const,
  },
  {
    title: "Contact Book App",
    description: "Developed a cross-platform Android application for managing contacts with a clean UI.",
    tech: ["Flutter", "Dart", "Mobile"],
    color: "sage" as const,
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background decoration - hidden on mobile */}
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/5 blur-3xl hidden sm:block" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 rounded-full bg-secondary/5 blur-3xl hidden sm:block" />

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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From e-commerce stores to AI-powered applications — here&apos;s what I&apos;ve been building
          </p>
        </motion.div>

        {/* Featured project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12"
          >
            <FloatingCard
              delay={0}
              glowColor={project.color}
              floatAnimation="slow"
              className="md:p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 md:gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 md:gap-3 mb-3">
                    <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                      <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-muted text-muted-foreground text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <Button
                      variant="outline"
                      className="glass border-primary/30 hover:border-primary/50 text-sm md:text-base"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                        <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative w-full max-w-[200px] md:max-w-[240px] aspect-square rounded-2xl overflow-hidden glass-strong">
                    <Image
                      src="/images/shopify-store.jpg"
                      alt="Shopify Store Preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs md:text-sm text-foreground/80 font-medium">Shopify Store</p>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        ))}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.filter(p => !p.featured).map((project, index) => (
            <FloatingCard
              key={project.title}
              delay={index * 0.08}
              glowColor={project.color}
              floatAnimation="slow"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 shrink-0">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-muted text-muted-foreground text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="glass border-muted-foreground/20 hover:border-muted-foreground/40 text-sm md:text-base"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              See More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
