"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Frontend Development",
    issuer: "Udemy",
    date: "2023",
    image: "/placeholder.svg?height=300&width=500",
    url: "#",
  },
  {
    title: "React & Next.js Masterclass",
    issuer: "Coursera",
    date: "2023",
    image: "/placeholder.svg?height=300&width=500",
    url: "#",
  },
  {
    title: "TypeScript Professional",
    issuer: "freeCodeCamp",
    date: "2022",
    image: "/placeholder.svg?height=300&width=500",
    url: "#",
  },
]

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    if (window.innerWidth < 768) return // Don't apply effect on mobile

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    setActiveIndex(index)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    setActiveIndex(null)
  }

  return (
    <section id="certificates" ref={ref} className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Sertifikatlarim</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <Card
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease" }}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                    style={{ transform: "translateZ(20px)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>
                <CardContent
                  className="p-6 flex flex-col"
                  style={{ transform: activeIndex === index ? "translateZ(50px)" : "translateZ(0)" }}
                >
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-bold">{certificate.title}</h3>
                  </div>
                  <div className="flex flex-col mb-4">
                    <span className="text-slate-300">{certificate.issuer}</span>
                    <span className="text-slate-400 text-sm">{certificate.date}</span>
                  </div>
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors mt-auto"
                  >
                    <span className="mr-1">Ko&apos;rish</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
