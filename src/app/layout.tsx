import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import MouseFollower from "@/components/mouse-follower/mouse-follower";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammadxon | Frontend Dasturchi va Kontent Yaratuvchi",
  description:
    "Muhammadxon Toshpo‘latovning shaxsiy portfolio sayti. Frontend dasturchi sifatida React, Next.js va TypeScript loyihalari, tajriba va ko‘nikmalar haqida ma’lumot.",
  keywords: [
    "Muhammadxon",
    "Muhammadxon Toshpo‘latov",
    "frontend dasturchi",
    "React dasturchi",
    "Next.js loyihalari",
    "O‘zbekiston dasturchi",
    "portfolio",
    "sayt",
    "dasturchi",
    "Muhammad",
    "Latifxonovich",
    "coder",
  ],
  authors: [{ name: "Muhammadxon Toshpo‘latov" }],
  openGraph: {
    title: "Muhammadxon | Frontend Dasturchi",
    description:
      "Muhammadxonning shaxsiy portfolio sayti – React, Next.js va TypeScript bo‘yicha loyihalar va tajribalar.",
    url: "https://muhammadxon.uz",
    siteName: "Muhammadxon Portfolio",
    images: [
      {
        url: "/img/me.png",
        width: 1200,
        height: 630,
        alt: "Muhammadxon Portfolio",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammadxon | Frontend Dasturchi",
    description:
      "Muhammadxon Toshpo‘latovning portfolio sayti – frontend dasturlash loyihalari va ko‘nikmalar.",
    images: ["/img/me.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Favicon teglari (avvalgi qo‘shilganlar) */}
  
        {/* Rasmdagi qo‘shimcha meta teg */}
        <meta name="apple-mobile-web-app-title" content="Muhammadxon Portfolio" />
        {/* Qo‘shimcha meta teglar (ixtiyoriy, lekin foydali) */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* Schema.org skripti */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammadxon Toshpo‘latov",
              "jobTitle": "Frontend Dasturchi",
              "description": "Muhammadxon Toshpo‘latov – React, Next.js va TypeScript bo‘yicha tajribali frontend dasturchi.",
              "url": "https://muhammadxon.uz",
              "sameAs": [
                "https://t.me/wdhuman",
                "https://instagram.com/wd.human/",
                "https://linkedin.com/in/mukhammadkhontoshpolatov/",
                "https://github.com/muhammadxon2oo7"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toshkent",
                "addressCountry": "O‘zbekiston"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MouseFollower />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}