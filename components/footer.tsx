"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:alinmishra02@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-8 md:py-12 px-4 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="text-xl md:text-2xl font-bold gradient-text">Alin Mishra</span>
            <p className="text-xs md:text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full glass hover:glow-purple transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground flex items-center gap-1.5"
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
            in India
          </motion.p>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Back to top ↑
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
