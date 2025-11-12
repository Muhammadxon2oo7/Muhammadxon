// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Github, ExternalLink, Users, Award, Zap, Globe } from "lucide-react";
// import SpotlightCard from "../reactBits/SpotlightCard";

// const projects = [
//   {
//     title: "SmartQnatCraft",
//     description:
//       "Qoraqalpog'istonning boy madaniy merosini jonlantiruvchi innovatsion sotuv platformasi. Hunarmandchilik san'atini global tomoshabinlarga yetkazib orqali turizmni rivojlantirishga hissa qo'shdi. Bu loyiha nafaqat savdo vositasi, balki madaniy ko'prik – har bir klik orqali an'analar tiriladi.",
//     image: "/craft.png",
//     tags: ["React.js", "TypeScript", "Tailwind CSS", "Shad cn"],
//     liveUrl: "https://qqcraft.uz/",
//   },
//   {
//     title: "Uzbekhub",
//     description:
//       "O'zbekistonning zamonaviy muammolariga yechim izlovchi ekotizim. Dasturchilar va ijodkorlar uchun yagona platforma bo'lib, hamkorlik va innovatsiyalarni rag'batlantiradi. Bu loyiha nafaqat texnologiya, balki jamiyatni birlashtiruvchi kuch – har bir g'oya bu yerda haqiqatga aylanadi.",
//     image: "/uzbekhub.png",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shad cn"],
//     liveUrl: "https://uzbekhub.uz/",
//   },
//   {
//     title: "R3T (SpecifyPro)",
//     description:
//       "AI quvvatlangan inqilobiy platforma – standart texnik topshiriqnomani bir daqiqada yaratish. Dasturchilar va startaplar uchun mo'ljallangan, loyiha maqsadlarini tahlil qilib, mukammal hujjatlarni generatsiya qiladi. Bu loyiha vaqtni tejaydi va ijodkorlikni ochib beradi – har bir g'oya endi osonlikcha amalga oshiriladi.",
//     image: "/r3t.png",
//     tags: ["AI/ML", "Next.js", "OpenAI", "TypeScript"],
//     liveUrl: "https://r3t.uz/",
//   },
// ];

// export default function Projects() {
//   const ref = useRef<HTMLDivElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="py-20  relative overflow-hidden"
//     >
//       <div className="absolute inset-0 " />
//       <div className="container mx-auto px-4 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500">
//               Loyihalar
//             </span>
//             <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full" />
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto">
//             Men yaratgan va qatnashgan loyihalar – bu nafaqat kod, balki haqiqiy
//             o'zgarishlar. Har biri orqali muammolarni hal qildik va jamiyatga
//             hissa qo'shdik
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => {
//             return (
           
//               <SpotlightCard
//                 className="custom-spotlight-card"
//                 key={index}
//                 // spotlightColor="rgba(0, 229, 255, 0.2)"
//               >
//                 <div className="w-full ">
//                   <div className="relative h-[300px] w-full overflow-hidden rounded-xl mb-[10px]">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className=" transition-transform duration-700 group-hover:scale-110"
//                       quality={100}
//                     />
//                     <div className="absolute inset-0 " />
//                   </div>

//                   <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 relative z-10">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-300 mb-4 flex-grow leading-relaxed relative z-10">
//                     {project.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2 mb-6 relative z-10">
//                     {project.tags.map((tag) => (
//                       <motion.span
//                         key={tag}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={
//                           isInView
//                             ? { opacity: 1, scale: 1 }
//                             : { opacity: 0, scale: 0.8 }
//                         }
//                         transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
//                         className="text-xs bg-slate-700/50 backdrop-blur-sm text-slate-300 px-3 py-1  border border-slate-600/50 hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 rounded-xl"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </div>

//                   <div className="flex gap-3 relative z-10">
//                     <Button
//                       size="sm"
//                       variant="ghost"
//                       className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 border-slate-600/50 transition-all duration-200 rounded-xl"
//                       asChild
//                     >
//                       <a
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink className="h-4 w-4 mr-2" /> Ko'rish
//                       </a>
//                     </Button>
//                   </div>

//                   <motion.div
//                     className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: isInView ? 0.1 : 0 }}
//                     style={{
//                       background:
//                         "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
//                     }}
//                   />
//                 </div>
//               </SpotlightCard>

//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles, Globe, Zap } from "lucide-react";
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import Tilt from "react-parallax-tilt";
import clsx from "clsx";

const projects = [
  {
    title: "SmartQnatCraft",
    description:
      "Qoraqalpog‘istonning boy madaniy merosini jonlantiruvchi innovatsion sotuv platformasi. Hunarmandchilik san‘atini global tomoshabinlarga yetkazib, turizmni rivojlantirishga hissa qo‘shdi.",
    image: "/craft.png",
    tags: ["React.js", "TypeScript", "Tailwind", "Shadcn"],
    liveUrl: "https://qqcraft.uz/",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Uzbekhub",
    description:
      "O‘zbekistonning zamonaviy muammolariga yechim izlovchi ekotizim. Dasturchilar va ijodkorlar uchun yagona platforma – hamkorlik va innovatsiyalarni rag‘batlantiradi.",
    image: "/uzbekhub.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
    liveUrl: "https://uzbekhub.uz/",
    gradient: "from-purple-500 to-pink-600",
  },
  {
  title: "MEA Ekotizim",
  description:
    "Master English Academy uchun maxsus ishlab chiqilgan zamonaviy boshqaruv tizimi. Davomat, uy vazifalari, to‘lovlar, IELTS mock test natijalari va o‘quvchi profillarini bir joyda boshqarish imkonini beradi. Raqamli transformatsiya orqali o‘quv jarayonini soddalashtirib, vaqtni tejaydi va natijalarni oshiradi.",
  image: "/bayroq.jpg", // Agar rasm bo'lmasa, keyin qo'shasiz
  tags: ["Next.js", "TypeScript", "Tailwind","Frame motion","Shadcn", "Zod"],
  liveUrl: "https://chustmaster.uz/", // yoki demo link
  gradient: "from-amber-500 to-orange-600",
},
  {
    title: "R3T (SpecifyPro)",
    description:
      "AI quvvatlangan inqilobiy platforma – standart texnik topshiriqnomani 1 daqiqada yaratish. Loyiha maqsadlarini tahlil qilib, mukammal hujjatlar generatsiya qiladi.",
    image: "/r3t.png",
    tags: ["AI/ML", "Next.js", "OpenAI", "TypeScript"],
    liveUrl: "https://r3t.uz/",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


  const [emblaRef, emblaApi]: UseEmblaCarouselType = useEmblaCarousel({
  loop: true,
  align: "start",
  dragFree: true,
  containScroll: "trimSnaps",
  
  
},
[Autoplay({ delay: 3000, stopOnInteraction: false })]
);


  return (
    <section id="projects" ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 " />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
            transition={{ delay: i * 0.2, duration: 2 }}
            style={{
              
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <Badge variant="outline" className="border-purple-500 text-purple-400">
              So'nggi loyihalar
            </Badge>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mening Loyihalarim
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Har bir loyiha – bu nafaqat kod, balki jamiyat uchun haqiqiy o‘zgarish.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={2000}
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <Card
                  className={clsx(
                    "group relative overflow-hidden h-full border-0 shadow-2xl",
                    "bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl",
                    "ring-1 ring-white/10"
                  )}
                >
              

                  <div className="relative z-10 p-6">
                    {/* Image */}
                    <div className="relative h-56 w-full mb-5 overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 mb-5 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                          className={clsx(
                            "text-xs px-3 py-1 rounded-full font-medium",
                            "bg-white/5 border border-white/10",
                            "text-slate-300 backdrop-blur-sm",
                            "hover:bg-white/10 hover:border-purple-500/50 transition-all"
                          )}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1  text-white border-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/40 hover:to-purple-600/40 transition-all duration-200"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Globe className="w-4 h-4" /> Ko‘rish
                        </a>
                      </Button>
                    </div>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 pointer-events-none"
                      layoutId={`glow-${index}`}
                    />
                  </div>
                </Card>
              </motion.div>
            </Tilt>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 px-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-none w-[85vw] max-w-sm"
                  onClick={() => setSelectedIndex(index)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="bg-slate-900/90 backdrop-blur-xl border-white/10 shadow-xl h-full">
                      <div className="p-5">
                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-white/10"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          size="sm"
                                                  
                          className="border  bg-transparent w-full text-white rounded-xl hover:bg-transparent"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-1" /> Ko‘rish
                          </a>
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          
          
        </div>
      </div>

      {/* Modal for Mobile Details */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 lg:hidden"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-3">
                {projects[selectedIndex].title}
              </h3>
              <p className="text-slate-300 mb-5">
                {projects[selectedIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {projects[selectedIndex].tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-transparent border- rounded-xl">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="w-full bg-transparent border text-white h-[50px] rounded-xl" asChild>
                <a href={projects[selectedIndex].liveUrl} target="_blank">
                  <Globe className="w-4 h-4 mr-2" /> Saytga o‘tish
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}