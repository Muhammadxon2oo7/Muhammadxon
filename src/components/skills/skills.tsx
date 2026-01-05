"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"

const skills = [
  {
    name: "HTML",
    icon: () => <Image src="/icons/html5.png" alt="HTML" width={84} height={84} quality={90} priority />,
    level: 95,
    color: "#E34F26",
    description: "HTML - Veb-sahifalar tuzish uchun markup tili. Barcha veb-saytlarning asosiy tuzilmasini yaratadi."
  },
  {
    name: "CSS",
    icon: () => <Image src="/icons/css3.png" alt="CSS" width={160} height={160} quality={90} priority />,
    level: 90,
    color: "#1572B6",
    description: "CSS - Veb-sahifalarni dizayn qilish va stil berish uchun ishlatiladi. Vizual jozibadorlik qo'shadi."
  },
  {
    name: "JavaScript",
    icon: () => <Image src="/icons/js.png" alt="JavaScript" width={64} height={64} quality={90} priority />,
    level: 85,
    color: "#F7DF1E",
    description: "JavaScript - Interaktiv veb-sahifalar yaratish uchun dasturlash tili. Dinamik funksiyalarni qo'shadi."
  },
  {
    name: "React",
    icon: () => <Image src="/icons/react.png" alt="React" width={64} height={64} quality={90} priority />,
    level: 80,
    color: "#61DAFB",
    description: "React - Tez va moslashuvchan UI komponentlar yaratish uchun JavaScript kutubxonasi."
  },
  {
    name: "TypeScript",
    icon: () => <Image src="/icons/typescript.png" alt="TypeScript" width={64} height={64} quality={90} priority />,
    level: 75,
    color: "#3178C6",
    description: "TypeScript - JavaScript’ning tip xavfsiz versiyasi. Katta loyihalarda xatolarni kamaytiradi."
  },
  {
    name: "Next.js",
    icon: () => <Image src="/icons/nextjs.png" alt="Next.js" width={100} height={100} quality={90} priority />,
    level: 80,
    color: "#000000",
    description: "Next.js - React’ga asoslangan framework. SSR va SEO uchun ideal."
  },
  {
    name: "Vue.js",
    icon: () => <Image src="/icons/vuejs.png" alt="Vue.js" width={64} height={64} quality={90} priority />,
    level: 70,
    color: "#4FC08D",
    description: "Vue.js - Moslashuvchan va oddiy JavaScript framework. Tez UI yaratish uchun ishlatiladi."
  },
  {
    name: "React Native",
    icon: () => <Image src="/icons/reactnative.png" alt="React Native" width={200} height={200} quality={90} priority />,
    level: 65,
    color: "#61DAFB",
    description: "React Native - Mobil ilovalar (iOS va Android) yaratish uchun React framework."
  },
]

// Realtime yozish effekti uchun komponent
const TypingEffect = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index])
        index++
      } else {
        clearInterval(interval)
      }
    }, 50) // Har bir harf 50ms da paydo bo'ladi
    return () => clearInterval(interval)
  }, [text])

  return <p className="text-sm text-white/90">{displayedText}</p>
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [clickedSkill, setClickedSkill] = useState<string | null>(null)

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
            <span className="text-gradient cursor-target transition-all duration-300">Ko'nikmalar</span>
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
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group relative cursor-target transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              onClick={() => setClickedSkill(clickedSkill === skill.name ? null : skill.name)}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
                <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="h-2.5 rounded-full "
                    style={{ background: `linear-gradient(to right, ${skill.color}, ${skill.color}80)` }}
                  />
                </div>
                <p className="text-sm text-slate-400">{skill.level}%</p>
              </div>

              {/* Futuristik Tooltip */}
              <AnimatePresence>
                {(hoveredSkill === skill.name || clickedSkill === skill.name) && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: -10, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full z-10 cursor-target transition-all duration-300"
                  >
                    {/* Tooltip konteyneri */}
                    <div className="relative">
                      <motion.div
                        className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 text-white p-4 rounded-lg shadow-lg max-w-xs text-center border border-primary/20 backdrop-blur-md"
                        animate={{
                          boxShadow: [
                            `0 0 15px 3px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.2)`,
                            `0 0 15px 8px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.4)`,
                            `0 0 15px 3px rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(skill.color.slice(3, 5), 16)}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.2)`,
                          ],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <TypingEffect text={skill.description} />
                        {/* Mobil uchun yopish tugmasi */}
                        {clickedSkill === skill.name && (
                          <button
                            onClick={() => setClickedSkill(null)}
                            className="mt-2 text-xs text-primary hover:underline"
                          >
                            Yopish
                          </button>
                        )}
                      </motion.div>

                      {/* Dumaloq nuqtalar va siniq chiziqlar */}
                      <motion.div
                        className="absolute -top-1 -left-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                          transition: { duration: 1.2, repeat: Infinity }
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                          transition: { duration: 1.2, repeat: Infinity, delay: 0.3 }
                        }}
                      />
                      <motion.div
                        className="absolute top-1/2 -left-2 w-8 h-0.5"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          width: [8, 12, 8],
                          opacity: [0.3, 0.7, 0.3],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      />
                      <motion.div
                        className="absolute top-1/2 -right-2 w-8 h-0.5"
                        style={{ backgroundColor: skill.color }}
                        animate={{
                          width: [8, 12, 8],
                          opacity: [0.3, 0.7, 0.3],
                          transition: { duration: 1.5, repeat: Infinity, delay: 0.5 }
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}