"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "E-Investment MChJ",
    position: "Frontend dasturchi",
    period: "11.11.2024 - Hozirgi vaqtgacha",
    description:
      "Zamonaviy web ilovalarni ishlab chiqish, foydalanuvchi interfeyslarini yaratish va optimizatsiya qilish. React, Next.js va TypeScript texnologiyalaridan foydalanib loyihalar ustida ishlash.",
    icon: Building,
  },
  // You can add more past experiences here if needed
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="py-20 bg-slate-900/50 relative overflow-hidden">
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
            <span className="text-gradient">Ish tajribam</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                <experience.icon className="h-4 w-4 text-white" />
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                    <div className="flex items-center text-primary mb-3">
                      <Building className="h-4 w-4 mr-2" />
                      <span>{experience.company}</span>
                    </div>
                    <div className="flex items-center text-slate-400 mb-4 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{experience.period}</span>
                    </div>
                    <p className="text-slate-300">{experience.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
