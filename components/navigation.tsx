"use client"

import { useState, useEffect } from "react"
import PillNav from "./PillNav"

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeHref, setActiveHref] = useState("#top")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveHref("#top")
        return
      }

      const sections = navItems.map(item => item.href.replace("#", "")).filter(s => s !== "top")
      let currentSection = "#top"
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            currentSection = `#${section}`
          }
        }
      }
      setActiveHref(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <PillNav
      items={navItems}
      activeHref={activeHref}
      baseColor="#F7E1D7"
      pillColor="#4A5759"
      hoveredPillTextColor="#F7E1D7"
      pillTextColor="#4A5759"
    />
  )
}
