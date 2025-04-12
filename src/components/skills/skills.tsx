"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Html5, Css3, Javascript, ReactLogo, Typescript, Nextjs, Vuejs, ReactNative } from "@/components/tech-icons/tech-icons"

const skills = [
  { name: "HTML", icon: Html5, level: 95 },
  { name: "CSS", icon: Css3, level: 90 },
  { name: "JavaScript", icon: Javascript, level: 85 },
  { name: "React", icon: ReactLogo, level: 80 },
  { name: "TypeScript", icon: Typescript, level: 75 },
  { name: "Next.js", icon: Nextjs, level: 80 },
  { name: "Vue.js", icon: Vuejs, level: 70 },
  { name: "React Native", icon: ReactNative, level: 65 },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Ko&apos;nikmalar</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-2.5 rounded-full bg-primary"
                  />
                </div>
                <p className="text-sm text-slate-400">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
