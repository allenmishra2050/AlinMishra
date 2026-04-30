"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"

const experiences = [
  {
    title: "Web Developer",
    company: "Midis Resources Pvt. Ltd.",
    type: "Freelancer",
    period: "Present",
    description: [
      "Developed and customized Shopify themes using Liquid, HTML, CSS, and JavaScript",
      "Built custom Shopify sections, templates, and dynamic product pages",
      "Integrated third-party apps and APIs to extend store functionality",
    ],
    color: "purple" as const,
  },
  {
    title: "Analyst",
    company: "eClerx Services Ltd.",
    period: "Apr 2024 - Apr 2025",
    description: [
      "Provided technical support and resolved customer issues across digital platforms",
      "Worked with internal teams to improve operational processes",
    ],
    color: "teal" as const,
  },
  {
    title: "Analyst",
    company: "Concentrix Services India Pvt. Ltd.",
    period: "Aug 2023 - Feb 2024",
    description: [
      "Handled customer technical support and troubleshooting requests",
      "Maintained client service KPIs and quality standards",
    ],
    color: "indigo" as const,
  },
  {
    title: "Analyst",
    company: "Teleperformance India Pvt. Ltd.",
    period: "Oct 2022 - July 2023",
    description: [
      "Managed technical support and data analysis tasks",
      "Performed troubleshooting and process optimization",
    ],
    color: "purple" as const,
  },
]

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Chandigarh University",
    period: "2021 – 2023",
  },
  {
    degree: "B.Sc. Electronics & Telecommunication",
    school: "Utkal University",
    period: "2018 – 2021",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            <span className="gradient-text">Experience & Journey</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            3+ years of helping customers succeed and building digital experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - only visible on md+ */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

          {/* Experience items */}
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 lg:pr-12 md:ml-0" : "md:pl-8 lg:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-4 left-2 md:top-6 w-4 h-4 rounded-full bg-primary hidden md:block ${
                  index % 2 === 0 ? "md:right-0 md:left-auto md:translate-x-1/2 md:-mr-2" : "md:left-0 md:-translate-x-1/2 md:-ml-2"
                }`} />
                
                {/* Mobile timeline dot */}
                <div className="absolute left-2 top-4 w-4 h-4 rounded-full bg-primary md:hidden" />
                
                <FloatingCard
                  delay={index * 0.05}
                  glowColor={exp.color}
                  floatAnimation="slow"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-xl bg-primary/10 shrink-0">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        {exp.type && (
                          <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground/70 mb-3 md:mb-4">
                        {exp.period}
                      </p>
                      <ul className="space-y-1.5 md:space-y-2">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs md:text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 lg:mt-24"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">
            <span className="gradient-text">Education</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <FloatingCard
                key={edu.degree}
                delay={index * 0.1}
                glowColor={index === 0 ? "teal" : "indigo"}
                floatAnimation="slow"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-secondary/10 shrink-0">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-secondary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm md:text-base lg:text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-muted-foreground/70">{edu.period}</p>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
