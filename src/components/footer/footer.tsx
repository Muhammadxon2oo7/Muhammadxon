"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-slate-400 text-center md:text-left cursor-target transition-all duration-300">
              &copy; 2023 Muhammadxon. Barcha huquqlar himoyalangan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <p className="text-slate-400 flex items-center justify-center cursor-target transition-all duration-300">
              <span className="mr-2 ">Muhabbat bilan yaratilgan</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
