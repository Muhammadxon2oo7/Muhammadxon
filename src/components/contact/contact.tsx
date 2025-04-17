"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Telegram bot konfiguratsiyasi
  const BOT_TOKEN = "8029308056:AAG9v2bAm7qEjP1OR5DtpPhZSSpePCTzI-8"; // BotFather dan olingan token
  const CHAT_ID = "6407499097"; // Sizning chat yoki guruh IDingiz

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get("name")?.toString() || ""
    const telegramUsername = formData.get("telegramUsername")?.toString() || ""
    const subject = formData.get("subject")?.toString() || ""
    const message = formData.get("message")?.toString() || ""

    const telegramMessage = `
      🌟 Yangi xabar: 🌟
      👤 Ism: ${name}
      📱 Telegram Username: ${telegramUsername}
      📌 Mavzu: ${subject}
      💬 Xabar: ${message}
    `.trim()

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: telegramMessage,
        }),
      })

      if (!response.ok) {
        throw new Error("Xabar yuborishda xatolik yuz berdi")
      }

      setIsSubmitted(true)
      setIsSubmitting(false)

      // 3 soniyadan keyin forma qayta ochiladi
      setTimeout(() => {
        setIsSubmitted(false)
        // Forma maydonlarini tozalash
        const form = e.target as HTMLFormElement
        form.reset()
      }, 3000) // 3 soniya kutish

    } catch (error) {
      console.error("Xatolik:", error)
      setIsSubmitting(false)
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.")
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Men bilan bog'laning</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Bog'lanish ma'lumotlari</h3>

            <div className="space-y-6">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 mb-1">Telefon</h4>
                    <a href="tel:+998886888207" className="text-lg">+998 88 688 82 07</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 mb-1">Email</h4>
                    <a href="mailto:muhammadxon0709@gmail.com" className="text-lg">muhammadxon0709@gmail.com</a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardContent className="p-6 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 mb-1">Manzil</h4>
                    <p className="text-lg">Toshkent, O'zbekiston</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Ijtimoiy tarmoqlar</h4>
              <div className="flex space-x-4">
                <a
                  href="https://t.me/wdhuman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">T</span>
                </a>
                <a
                  href="https://instagram.com/wd.human/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">I</span>
                </a>
                <a
                  href="https://linkedin.com/in/mukhammadkhontoshpolatov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">L</span>
                </a>
                <a
                  href="https://github.com/muhammadxon2oo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-slate-800 hover:bg-primary/20 flex items-center justify-center transition-colors"
                >
                  <span className="text-lg">G</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Xabar yuborish</h3>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Xabaringiz yuborildi!</h4>
                    <p className="text-slate-300">Tez orada siz bilan bog'lanamiz.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-2">
                          Ismingiz
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Ismingizni kiriting"
                          required
                          className="bg-slate-900/50 border-slate-700"
                        />
                      </div>
                      <div>
                        <label htmlFor="telegramUsername" className="block text-sm mb-2">
                          Telegram Username
                        </label>
                        <Input
                          id="telegramUsername"
                          name="telegramUsername"
                          placeholder="@username"
                          required
                          className="bg-slate-900/50 border-slate-700"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm mb-2">
                        Mavzu
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Xabar mavzusini kiriting"
                        required
                        className="bg-slate-900/50 border-slate-700"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-2">
                        Xabar
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Xabaringizni kiriting"
                        required
                        className="bg-slate-900/50 border-slate-700 min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Yuborilmoqda...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Yuborish
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}