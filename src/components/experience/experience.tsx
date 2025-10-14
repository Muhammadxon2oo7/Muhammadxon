"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, Building, GraduationCap, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"



const experiences = [
  {
    company: "IT School",
    position: "Web dasturchi kursi",
    period: "01.01.2022 - 01.03.2022",
    description:
      "Web dasturlash asoslarini o'rgandim. HTML, CSS va JavaScript bo'yicha ilk loyihalarimni amalga oshirdim. Dasturlashga qiziqishim shu yerda boshlandi.",
    icon: GraduationCap,
    color: "#3B82F6", // Blue
  },
  {
    company: "Coders planet",
    position: "Web dasturchi kursi",
    period: "01.03.2022 - 01.06.2022",
    description:
      "Web dasturlash bo'yicha amaliy ko'nikmalar oldim. JavaScript bilan birinchi loyihalarimni amalga oshirdim.",
    icon: GraduationCap,
    color: "#8B5CF6", // Purple
  },
  {
    company: "Najot Ta'lim (1-marta)",
    position: "Frontend dasturchi kursi",
    period: "30.06.2022 - 30.12.2022",
    description:
      "Frontend dasturlash bo'yicha chuqur bilim oldim. HTML, CSS, JavaScript, React va boshqa zamonaviy texnologiyalarni o'rgandim. Real loyihalarda ishtirok etdim.",
    icon: GraduationCap,
    color: "#10B981", // Green
  },
  {
    company: "Tanaffus",
    position: "O'z ustimda ishlash davri",
    period: "01.2024 - 12.2024",
    description:
      "Bir yillik tanaffus davrida o'z bilimlarimni mustahkamladim, shaxsiy loyihalar ustida ishladim va yangi texnologiyalarni o'rgandim.",
    icon: Coffee,
    color: "#6B7280", // Gray
  },
  {
    company: "Najot Ta'lim (2-marta)",
    position: "Frontend dasturchi kursi",
    period: "01.2025 - 03.2025",
    description:
      "Frontend dasturlash bo'yicha bilimlarimni yanada chuqurlashtirdim. Next.js va TypeScript bo'yicha ilg'or loyihalarda ishtirok etdim.",
    icon: GraduationCap,
    color: "#10B981", // Green
  },
  {
    company: "E-Investment MChJ",
    position: "Frontend dasturchi",
    period: "11.11.2024 - Hozirgi vaqtgacha",
    description:
      "Zamonaviy web ilovalarni ishlab chiqish, foydalanuvchi interfeyslarini yaratish va optimizatsiya qilish. React, Next.js va TypeScript texnologiyalaridan foydalanib loyihalar ustida ishlash.",
    icon: Building,
    color: "#F97316", // Orange
  },
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
          {/* Timeline line with gradient pulsation */}
          <motion.div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5"
            animate={{
              background: [
                "linear-gradient(to bottom, #3B82F6, transparent)",
                "linear-gradient(to bottom, #8B5CF6, transparent)",
                "linear-gradient(to bottom, #10B981, transparent)",
                "linear-gradient(to bottom, #6B7280, transparent)",
                "linear-gradient(to bottom, #10B981, transparent)",
                "linear-gradient(to bottom, #F97316, transparent)",
                "linear-gradient(to bottom, #3B82F6, transparent)",
              ],
              transition: { duration: 4, repeat: Infinity },
            }}
          />

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
              {/* Timeline dot with pulsation */}
              <motion.div
                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: experience.color }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    `0 0 10px 3px ${experience.color}50`,
                    `0 0 15px 5px ${experience.color}80`,
                    `0 0 10px 3px ${experience.color}50`,
                  ],
                  transition: { duration: 1.5, repeat: Infinity },
                }}
              >
                <experience.icon className="h-4 w-4 text-white" />
              </motion.div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
                  className="perspective-1000"
                >
                  <Card
                    className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-[2px]  transition-all duration-300 overflow-hidden"
                    style={{
                      borderImage: `linear-gradient(to right, ${experience.color}, transparent) 1`,
                    }}
                  >
                    <CardContent className="p-6">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl font-bold mb-1"
                      >
                        {experience.company}
                      </motion.h3>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center text-slate-400 mb-4 text-sm"
                      >
                        <experience.icon className="h-4 w-4 mr-2" />
                        <span>{experience.position} </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center text-slate-400 mb-4 text-sm"
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{experience.period}</span>
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-slate-300"
                      >
                        {experience.description}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}