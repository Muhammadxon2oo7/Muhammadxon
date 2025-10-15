"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GiscusChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !giscusRef.current) return;

    if (giscusRef.current.childElementCount > 0) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "Muhammadxon2oo7/Muhammadxon");
    script.setAttribute("data-repo-id", "R_kgDOOYdAfg");
    script.setAttribute("data-category", "Ideas");
    script.setAttribute("data-category-id", "DIC_kwDOOYdAfs4CwoSR");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "purple_dark");
    
    script.setAttribute("data-lang", "uz");
    script.setAttribute("data-loading", "lazy");

    script.onload = () => {
      setTimeout(() => setIsLoaded(true), 1000);
    };

    giscusRef.current.appendChild(script);

    return () => {
      if (giscusRef.current) giscusRef.current.innerHTML = "";
      setIsLoaded(false);
    };
  }, [isOpen]);

  return (
    <>
     <motion.button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-6 left-6 z-[1000] flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md border border-white/20 dark:border-neutral-700/20 text-white hover:bg-white/20 dark:hover:bg-neutral-900/20 transition-all duration-300 group"
  whileHover={{ scale: 1.15, rotate: 10 }}
  whileTap={{ scale: 0.9 }}
  animate={{
    boxShadow: [
      "0 0 0 0 rgba(255, 255, 255, 0.3)",
      "0 0 0 8px rgba(255, 255, 255, 0.1)",
      "0 0 0 0 rgba(255, 255, 255, 0.3)",
    ],
  }}
  transition={{
    boxShadow: { repeat: Infinity, duration: 2 },
    scale: { duration: 0.2 },
    rotate: { duration: 0.2 },
  }}
>
  <motion.div
    animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
    transition={{ duration: 0.3 }}
  >
    {isOpen ? <X size={26} /> : <MessageCircle size={28} />}
  </motion.div>
  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/80 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {isOpen ? "Chatni yopish" : "Chatni ochish"}
  </div>
</motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-6 z-[999] w-[400px] p-[10px] max-w-[90vw] h-[480px] bg-white/30 dark:bg-neutral-900/30 rounded-2xl shadow-2xl overflow-hidden border border-neutral-300/50 dark:border-neutral-700/50 overflow-y-scroll backdrop-blur-md "
          >
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500"
              animate={{ y: [0, 10, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                Yozuvlar yuklanmoqda...
              </div>
            )}
            <div ref={giscusRef} className="w-full h-full text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GiscusChat;