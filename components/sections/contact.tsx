"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { FloatingCard } from "@/components/floating-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "alinmishra02@gmail.com",
    href: "mailto:alinmishra02@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7751805453",
    href: "tel:+917751805453",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Athgarh, Cuttack, Odisha",
    href: null,
  },
]

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background decorations - hidden on mobile */}
      <div className="absolute top-1/4 right-0 w-48 md:w-80 h-48 md:h-80 rounded-full bg-primary/5 blur-3xl hidden sm:block" />
      <div className="absolute bottom-1/4 left-0 w-56 md:w-96 h-56 md:h-96 rounded-full bg-secondary/5 blur-3xl hidden sm:block" />

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
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind? Drop me a message and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 md:space-y-6 order-2 lg:order-1"
          >
            <div className="mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                Get in Touch
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid gap-3 md:gap-4">
              {contactInfo.map((info, index) => (
                <FloatingCard
                  key={info.label}
                  delay={index * 0.1}
                  glowColor={["purple", "teal", "indigo"][index] as "purple" | "teal" | "indigo"}
                  floatAnimation="slow"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-xl bg-primary/10 shrink-0">
                      <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium truncate block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm md:text-base text-foreground font-medium truncate">{info.value}</p>
                      )}
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>

            {/* Portfolio link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 md:pt-6"
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">View my Shopify work:</p>
              <a
                href="https://alin-mishra.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                alin-mishra.myshopify.com
              </a>
              <p className="text-xs text-muted-foreground/60 mt-1">Password: alin</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <FloatingCard
              glowColor="purple"
              floatAnimation="slow"
              className="p-5 md:p-8"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 md:py-12 text-center"
                >
                  <div className="p-3 md:p-4 rounded-full bg-primary/10 mb-4 md:mb-6">
                    <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="bg-background/50 border-border/50 focus:border-primary resize-none text-sm md:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 md:py-6 text-sm md:text-lg rounded-xl"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 md:w-5 md:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
