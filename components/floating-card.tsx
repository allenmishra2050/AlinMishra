"use client"

import type { ReactNode } from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import BorderGlow from "@/components/BorderGlow"

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glowColor?: "pink" | "sage" | "slate"
  floatAnimation?: "slow" | "medium" | "fast"
}

export function FloatingCard({
  children,
  className,
  delay = 0,
  glowColor = "pink",
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

  // Map palette colors to HSL and Mesh Gradient colors
  const colorSettings = {
    pink: {
      hsl: "350 45% 85%", // #EDAFB8ish
      mesh: ["#EDAFB8", "#F7E1D7", "#DEDBD2"]
    },
    sage: {
      hsl: "125 15% 75%", // #B0C4B1ish
      mesh: ["#B0C4B1", "#DEDBD2", "#F7E1D7"]
    },
    slate: {
      hsl: "190 10% 35%", // #4A5759ish
      mesh: ["#4A5759", "#B0C4B1", "#DEDBD2"]
    }
  }[glowColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("perspective-1000", floatClass)}
      style={{ animationDelay: `${delay}s` }}
    >
      <BorderGlow
        glowColor={colorSettings.hsl}
        colors={colorSettings.mesh}
        backgroundColor="rgba(247, 225, 215, 0.4)" // Semi-transparent cream
        borderRadius={16}
        glowIntensity={1.2}
        animated={true}
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX,
            rotateY,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "backdrop-blur-xl bg-white/10 p-6 preserve-3d transition-shadow duration-300",
            className
          )}
        >
          {children}
        </motion.div>
      </BorderGlow>
    </motion.div>
  )
}
