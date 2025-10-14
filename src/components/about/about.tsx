"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Metadata } from "next"

// about.tsx
export const metadata: Metadata = {
  title: "Muhammadxon Haqida | Frontend Dasturchi",
  description:
    "Muhammadxon Toshpo‘latov haqida – 2+ yillik tajribaga ega frontend dasturchi, React va Next.js loyihalari bilan ishlaydi.",
};
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
                  alt="Muhammadxon Toshpo‘latov – Frontend Dasturchi"
                  fill
                  className="object-cover rounded-lg"
                  quality={90} // Sifatni oshirish
  priority={true} // Tez yuklash uchun
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>
            </div>

        <div className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full flex items-center justify-center 
  backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
  <div className="flex flex-col items-center justify-center">
    <span className="font-bold text-lg text-white">2+</span>
    {/* <span className="text-xs text-slate-200">yil</span> */}
  </div>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Men Muhammadxon  – frontend dasturchi va kontent yaratuvchi</h3>

            <p className="text-slate-300 mb-6">
              Hozirda 2 yillik tajribaga ega bo&apos;lgan dasturchiman. HTML, CSS, JavaScript, React va Next.js kabi
              texnologiyalar bilan ishlayman. Texnologiya va kreativlikni birlashtirib, ilhomlantiruvchi loyihalar
              yarataman.
            </p>

            <p className="quote-style">
  Dasturchilik — bu faqat kod yozish emas, balki fikrni ifoda qilish, odamlarga foyda keltirish va o'zingizni ko'rsatish imkoniyati hamdir.
</p>

           
          </motion.div>
        </div>
      </div>

<section className="mt-10">
      <div className="giscus" />
      <script src="https://giscus.app/client.js"
        data-repo="Muhammadxon2oo7/Muhammadxon"
        data-repo-id="R_kgDOOYdAfg"
        data-category="Ideas"
        data-category-id="DIC_kwDOOYdAfs4CwoSR"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="uz"
        crossOrigin="anonymous"
        async>
</script>
    </section>
    </section>
  )
}
