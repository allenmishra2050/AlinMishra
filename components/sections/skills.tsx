"use client"

import { motion } from "framer-motion"
import { FloatingCard } from "@/components/floating-card"
import Image from "next/image"

const skillCategories = [
  {
    title: "Shopify Development",
    skills: [
      "Shopify Liquid",
      "Theme Customization",
      "Custom Sections",
      "Product Templates",
      "Storefront API",
      "App Integrations",
    ],
    color: "purple" as const,
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "React",
      "Flutter",
    ],
    color: "teal" as const,
  },
  {
    title: "Backend & Tools",
    skills: [
      "Node.js",
      "Express.js",
      "Strapi",
      "Figma",
      "AI Tools",
      "Git",
    ],
    color: "indigo" as const,
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/skills-visual.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            From pixel-perfect frontends to powerful integrations — here&apos;s what I bring to the table
          </p>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <FloatingCard
              key={category.title}
              delay={index * 0.1}
              glowColor={category.color}
              floatAnimation="slow"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 + skillIndex * 0.03 }}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Additional soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-16 text-center"
        >
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-4 md:mb-6 text-muted-foreground">
            Also great at...
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto px-4">
            {[
              "Problem Solving",
              "Clear Communication",
              "Customer Support",
              "Technical Writing",
              "Team Collaboration",
              "Meeting KPIs",
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full glass text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
