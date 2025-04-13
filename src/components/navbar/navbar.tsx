"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mobile menyuni animatsiyasi uchun variants
  const mobileMenuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  }

  // Orqa fon overlay uchun handler
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <a href="#hero" className="text-2xl font-bold text-gradient">
            Muhammadxon
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a href={item.href} className="px-3 py-2 text-sm rounded-md hover:bg-slate-800 transition-colors">
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="hover:bg-primary/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation va Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Orqa fon overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-100"
            onClick={handleOverlayClick}
          />

          {/* Mobile Menyu */}
          <motion.div
            initial="closed"
            animate={mobileMenuOpen ? "open" : "closed"}
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-lg p-6 z-50"
          >
            <div className="flex justify-end mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="hover:bg-primary/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-md hover:bg-slate-800 transition-colors text-lg font-medium text-white"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </header>
  )
}