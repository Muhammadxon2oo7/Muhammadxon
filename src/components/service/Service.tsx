"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Video,
  Image,
  BarChart3,
  Sparkles,
} from "lucide-react";
import GlassIcons from "../reactBits/GlassIcons";
import SpotlightCard from "../SpotlightCard";
import { label } from "framer-motion/client";

const services = [
  {
    id: 1,
    name: "Veb-sayt tayyorlash",
    iconSet: [{ icon: <Code2 />, color: "blue" ,label:""}],
    description: "Zamonaviy, tezkor va foydalanuvchiga qulay veb-saytlar yaratamiz",
  },
  {
    id: 2,
    name: "Platforma tayyorlash",
    iconSet: [{ icon: <Code2 />, color: "lime",label:"" }],
    description: "Kuchli va moslashuvchan tizimlar va platformalar ishlab chiqamiz",
  },
  {
    id: 3,
    name: "Video montaj",
    iconSet: [{ icon: <Video />, color: "orange",label:"" }],
    description: "Professional video montaj va vizual effektlar xizmatlari",
  },
  {
    id: 4,
    name: "Rasimlar bilan ishlash",
    iconSet: [{ icon: <Image />, color: "purple",label:"" }],
    description: "Rasmlar, bannerlar va grafik dizayn bilan ishlaymiz",
  },
  {
    id: 5,
    name: "Ma'lumotlar bilan ishlash",
    iconSet: [{ icon: <BarChart3 />, color: "indigo",label:"" }],
    description: "Ma'lumotlarni tahlil qilish va boshqarish xizmatlarini taqdim etamiz",
  },
  {
    id: 6,
    name: "Boshqa",
    iconSet: [{ icon: <Sparkles />, color: "red",label:"" }],
    description: "Siz uchun maxsus yechimlarni ishlab chiqamiz",
  },
];

// 💡 rang nomiga qarab rgba qaytaruvchi helper
const colorMap: Record<string, string> = {
  blue: "rgba(59,130,246,0.25)",
  lime: "rgba(132,204,22,0.25)",
  orange: "rgba(249,115,22,0.25)",
  purple: "rgba(168,85,247,0.25)",
  indigo: "rgba(99,102,241,0.25)",
  red: "rgba(239,68,68,0.25)",
};

const ServiceCard: React.FC<{
  service: typeof services[0];
  isSelected: boolean;
}> = ({ service, isSelected }) => {
  const spotlightColor =
    colorMap[service.iconSet[0].color] || "rgba(255,255,255,0.2)";

  return (
    <SpotlightCard className="backgraund-transparent  bg-card" spotlightColor={spotlightColor}>
      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          backgroundColor: "rgba(255,255,255,0.15)",
        }}
        whileTap={{ scale: 0.95 }}
        className={`cursor-pointer rounded-2xl overflow-hidden backdrop-blur-lg border border-white border-opacity-20 relative ${
          isSelected
            ? "bg-[#10172A] bg-opacity-70 text-white"
            : "bg-white bg-opacity-10 text-white"
        }`}
      >
        <Card className="border-none bg-transparent">
          <CardContent className="p-4 relative">
            {/* --- GlassIcons ichida chiqadi --- */}
            <div className="h-32 relative mb-4">
              <GlassIcons items={service.iconSet} className="absolute inset-0" />
            </div>

            <CardTitle className="text-xl font-bold mb-2">{service.name}</CardTitle>
            <p className="text-sm opacity-90">{service.description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </SpotlightCard>
  );
};

const Service: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="text-white p-8 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isSelected={selectedService?.id === service.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
