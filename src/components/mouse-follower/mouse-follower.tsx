"use client"

import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Don't show mouse follower on mobile devices
    if (isMobile) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener("mousemove", updatePosition)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
    }
  }, [isMobile, isVisible])

  if (isMobile) return null

  return (
    <div
      className="mouse-follower"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  )
}
