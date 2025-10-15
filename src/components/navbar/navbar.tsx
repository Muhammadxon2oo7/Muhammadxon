"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Bosh sahifa", href: "#hero" },
  { name: "Men haqimda", href: "#about" },
  { name: "Ko'nikmalar", href: "#skills" },
  { name: "Tajriba", href: "#experience" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Sertifikatlar", href: "#certificates" },
  { name: "Bog'lanish", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile menyuni animatsiyasi uchun variants
const mobileMenuVariants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
  closed: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg py-3"
          : "bg-gradient-to-r from-slate-900/70 to-slate-800/70 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#hero"
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
          >
            Muhammadxon
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-white hover:text-indigo-300 transition-colors group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white hover:bg-indigo-500/20 rounded-full"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 360 : 0, scale: mobileMenuOpen ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
         <motion.div
  variants={mobileMenuVariants}
  initial="closed"
  animate="open"
  exit="closed"
  className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 z-40 md:hidden flex flex-col justify-center items-center"
>
            {/* Yopish tugmasi */}
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="text-white hover:bg-purple-500/20 rounded-full"
              >
                <X className="h-8 w-8" />
              </Button>
            </div>

            {/* Menyu elementlari */}
            <nav className="flex flex-col items-center space-y-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-bold text-white hover:text-purple-300 transition-colors tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}