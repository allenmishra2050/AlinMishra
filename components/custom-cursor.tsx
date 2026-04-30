"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovering(true)
      }
    }

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("a, button, [role='button'], input, textarea")) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseover", handleHoverStart)
    document.addEventListener("mouseout", handleHoverEnd)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseover", handleHoverStart)
      document.removeEventListener("mouseout", handleHoverEnd)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="custom-cursor-dot hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
        }}
      />
    </>
  )
}
