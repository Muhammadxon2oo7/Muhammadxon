"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 bg-slate-900/50 relative overflow-hidden">
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
            <span className="text-gradient">Men haqimda</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full md:h-[500px] overflow-hidden rounded-lg parallax-container">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg parallax-card">
                <Image
                  src="/img/me.png"
                  alt="Muhammadxon"
                  fill
                  className="object-cover rounded-lg"
                  quality={90} // Sifatni oshirish
  priority={true} // Tez yuklash uchun
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-primary rounded-full flex items-center justify-center">
              <span className="font-bold text-lg">2+</span>
              <span className="text-xs ml-1">yil</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Men Muhammadxonman – frontend dasturchi va kontent yaratuvchi</h3>

            <p className="text-slate-300 mb-6">
              Hozirda 2+ yillik tajribaga ega bo&apos;lgan dasturchiman. HTML, CSS, JavaScript, React va Next.js kabi
              texnologiyalar bilan ishlayman. Texnologiya va kreativlikni birlashtirib, ilhomlantiruvchi loyihalar
              yarataman.
            </p>

            <p className="text-slate-300 mb-8">
              Dasturchilik — bu faqat kod yozish emas, balki fikrni ifoda qilish, odamlarga foyda keltirish va
              o&apos;zingizni ko&apos;rsatish imkoniyati hamdir.
            </p>

            <Button className="bg-primary hover:bg-primary/90 text-white" asChild variant={"ghost"}>
              <a href="#" download>
                <FileText className="mr-2 h-4 w-4" /> Rezumeni yuklash
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
