"use client"

import type { ReactNode } from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glowColor?: "purple" | "teal" | "indigo"
  floatAnimation?: "slow" | "medium" | "fast"
}

export function FloatingCard({
  children,
  className,
  delay = 0,
  glowColor = "purple",
  floatAnimation = "medium",
}: FloatingCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Reduced tilt intensity for more stability
    const rotateXValue = (mouseY / (rect.height / 2)) * -3
    const rotateYValue = (mouseX / (rect.width / 2)) * 3
    
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  const floatClass = {
    slow: "animate-float-slow",
    medium: "animate-float-medium",
    fast: "animate-float-fast",
  }[floatAnimation]

  const glowClass = {
    purple: "hover:glow-purple",
    teal: "hover:glow-teal",
    indigo: "hover:glow-indigo",
  }[glowColor]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("perspective-1000", floatClass)}
      style={{ animationDelay: `${delay}s` }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "glass rounded-2xl p-6 preserve-3d transition-shadow duration-300",
          glowClass,
          className
        )}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
