"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Users, Award, Zap, Globe } from "lucide-react";
import SpotlightCard from "../reactBits/SpotlightCard";

const projects = [
  {
    title: "SmartQnatCraft",
    description:
      "Qoraqalpog'istonning boy madaniy merosini jonlantiruvchi innovatsion sotuv platformasi. Hunarmandchilik san'atini global tomoshabinlarga yetkazib orqali turizmni rivojlantirishga hissa qo'shdi. Bu loyiha nafaqat savdo vositasi, balki madaniy ko'prik – har bir klik orqali an'analar tiriladi.",
    image: "/craft.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Shad cn"],
    liveUrl: "https://qqcraft.uz/",
  },
  {
    title: "Uzbekhub",
    description:
      "O'zbekistonning zamonaviy muammolariga yechim izlovchi ekotizim. Dasturchilar va ijodkorlar uchun yagona platforma bo'lib, hamkorlik va innovatsiyalarni rag'batlantiradi. Bu loyiha nafaqat texnologiya, balki jamiyatni birlashtiruvchi kuch – har bir g'oya bu yerda haqiqatga aylanadi.",
    image: "/uzbekhub.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shad cn"],
    liveUrl: "https://uzbekhub.uz/",
  },
  {
    title: "R3T (SpecifyPro)",
    description:
      "AI quvvatlangan inqilobiy platforma – standart texnik topshiriqnomani bir daqiqada yaratish. Dasturchilar va startaplar uchun mo'ljallangan, loyiha maqsadlarini tahlil qilib, mukammal hujjatlarni generatsiya qiladi. Bu loyiha vaqtni tejaydi va ijodkorlikni ochib beradi – har bir g'oya endi osonlikcha amalga oshiriladi.",
    image: "/r3t.png",
    tags: ["AI/ML", "Next.js", "OpenAI", "TypeScript"],
    liveUrl: "https://r3t.uz/",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20  relative overflow-hidden"
    >
      <div className="absolute inset-0 " />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
              Loyihalar
            </span>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Men yaratgan va qatnashgan loyihalar – bu nafaqat kod, balki haqiqiy
            o'zgarishlar. Har biri orqali muammolarni hal qildik va jamiyatga
            hissa qo'shdik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            return (
           
              <SpotlightCard
                className="custom-spotlight-card"
                key={index}
                // spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="w-full ">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-[10px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className=" transition-transform duration-700 group-hover:scale-110"
                      quality={100}
                    />
                    <div className="absolute inset-0 " />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 flex-grow leading-relaxed relative z-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                        className="text-xs bg-slate-700/50 backdrop-blur-sm text-slate-300 px-3 py-1  border border-slate-600/50 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 rounded-xl"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3 relative z-10">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border-slate-600/50 transition-all duration-200 rounded-xl"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Ko'rish
                      </a>
                    </Button>
                  </div>

                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 0.1 : 0 }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </SpotlightCard>

            );
          })}
        </div>
      </div>
    </section>
  );
}
