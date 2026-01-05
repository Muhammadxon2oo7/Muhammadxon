"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, Download } from "lucide-react"

const certificates = [
  {
    title: "Android Development Track",
    issuer: "Udacity (One Million Uzbek Coders)",
    date: "June 2021",
    image: "/certificates/first.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "#", // Kod: 3DHTF3R2 (URL yo‘q)
  },
  {
    title: "Front End Development Track",
    issuer: "Udacity (One Million Uzbek Coders)",
    date: "June 2021",
    image: "/certificates/second.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "#", // Kod: LAGYRCHA (URL yo‘q)
  },
  {
    title: "Full Stack Development Track",
    issuer: "Udacity (One Million Uzbek Coders)",
    date: "June 2021",
    image: "/certificates/third.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "#", // Kod: QTC9VCFK6 (URL yo‘q)
  },
  {
    title: "Digital Transformation with Google Cloud",
    issuer: "Coursera",
    date: "29.09.2023",
    image: "/certificates/fourth.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "https://coursera.org/verify/Z4HN2FPRGK9Y",
  },
  {
    title: "Tableau Public for Project Management and Beyond",
    issuer: "Coursera",
    date: "01.10.2023",
    image: "/certificates/fifth.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "https://coursera.org/verify/LPVE9TMTMLKL",
  },
  {
    title: "Accomplishment STAR Techniques for Job Interviews",
    issuer: "Coursera",
    date: "14.10.2023",
    image: "/certificates/sixth.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "https://coursera.org/verify/SEHBCEAKNNNQ",
  },
  {
    title: "Frontend ReactJS ",
    issuer: "Najot Ta'lim",
    date: "15.02.2025",
    image: "/certificates/seventh.jpg", // Agar rasm bo‘lsa, yo‘lni almashtir
    url: "#", // URL yo‘q, PDF sertifikat
  },
  {
    title: "Five Million Prompters Initiative",
    issuer: "Ministry of Digital Technologies of Uzbekistan & Dubai Future Foundation",
    date: "12.11.2025",
    image: "/certificates/five-million-prompters.jpg",
    url: "https://omp.aistudy.uz/certificate?id=a3b4bb3e-4248-4d2f-e38f-08de21ec8b7c",
  },
  {
  title: "IoT (Internet of Things), Wireless & Cloud Computing Emerging Technologies",
  issuer: "Yonsei University (via Coursera)",
  date: "13.11.2025",
  image: "/certificates/yonsei.jpg", // Sertifikat rasmini shu nom bilan joylashtir
  url: "https://www.coursera.org/verify/1E1E86WTPT7M/",
}
]

// Sertifikatlarni URL mavjudligi bo‘yicha saralash
const sortedCertificates = [
  ...[...certificates]
    .sort((a, b) => {
      const parseDate = (dateStr: string) => {
        const normalized = dateStr.includes(".")
          ? dateStr.split(".").reverse().join("-")
          : dateStr
        return new Date(normalized).getTime()
      }
      return parseDate(b.date) - parseDate(a.date)
    })
    .filter((cert) => cert.url && cert.url !== "#"), // URL mavjudlar
  ...certificates.filter((cert) => !cert.url || cert.url === "#"), // URL yo‘q sertifikatlar
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

  // Yuklab olish funksiyasi
  const handleDownload = (imageUrl: string, title: string) => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `${title}-certificate.jpg` // Fayl nomini sertifikat nomi asosida qo‘yamiz
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
            <span className="text-gradient cursor-target transition-all duration-300">Sertifikatlarim</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCertificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="perspective-1000"
            >
              <Card
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden "
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
                  {/* Yuklab olish ikonkasi */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDownload(certificate.image, certificate.title)}
                    className="absolute top-2 right-2 p-2 bg-primary/80 rounded-full text-white hover:bg-primary transition-colors"
                  >
                    <Download className="h-4 w-4" />
                  </motion.button>
                </div>
                <CardContent
                  className="p-6 flex flex-col"
                  style={{ transform: activeIndex === index ? "translateZ(50px)" : "translateZ(0)" }}
                >
                  <div className="flex items-center mb-3">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h3 className="text-xl font-bold cursor-target transition-all duration-300">{certificate.title}</h3>
                  </div>
                  <div className="flex flex-col mb-4">
                    <span className="text-slate-300 cursor-target transition-all duration-300">{certificate.issuer}</span>
                    <span className="text-slate-400 text-sm cursor-target transition-all duration-300">{certificate.date}</span>
                  </div>
                  {certificate.url && certificate.url !== "#" && (
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors mt-auto"
                    >
                      <span className="mr-1">Tekshirish</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}