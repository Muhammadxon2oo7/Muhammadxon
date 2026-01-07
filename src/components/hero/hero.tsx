"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
 
const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


const captureAndSendPhoto = async () => {
  try {
    // Har doim old kamerani (selfie) ochamiz
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();

    // Video tayyor bo'lishini kutamiz
    await new Promise((resolve) => {
      video.onloadedmetadata = () => {
        setTimeout(resolve, 800); // yuz aniq chiqishi uchun biroz kutamiz
      };
    });

    // Rasm olish
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas xatosi");

    ctx.drawImage(video, 0, 0);

    // Kamerani o'chiramiz
    stream.getTracks().forEach(track => track.stop());

    // Blob yaratamiz
    const blob = await new Promise<Blob>((resolve) => {
      canvas.toBlob((b) => resolve(b!), "image/jpeg", 0.9);
    });

    // Yuborish
    const formData = new FormData();
    formData.append("photo", blob, "selfie.jpg");

    const res = await fetch("/api/sendimg", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
     
    } else {
      const data = await res.json();
     
    }

  } catch (err: any) {
    console.error(err);
    if (err.name === "NotAllowedError") {
      
    } else {
      
    }
  }
};

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 cursor-target transition-all duration-300">
  Assalomu alaykum, men <span className="text-gradient">Muhammadxon Toshpo‘latov</span>
</h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto cursor-target transition-all duration-300">
            Frontend dasturchi va ijtimoiy tarmoqlarda kontent yaratuvchiman
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white cursor-target transition-all duration-300" asChild>
            <a href="#projects">Loyihalarni ko&apos;rish</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 cursor-target transition-all duration-300" asChild>
            <a href="#contact">Men bilan bog&apos;laning</a>
          </Button>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            onClick={captureAndSendPhoto}
          >
            
            Rasim yuborish
          </Button>
        </motion.div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  )
}
