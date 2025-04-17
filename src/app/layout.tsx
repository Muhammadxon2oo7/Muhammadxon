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
  title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi va Kontent Yaratuvchi",
  description:
    "Muhammadxon Toshpo‘latovning shaxsiy portfolio sayti. O‘zbekistonda React, Next.js va TypeScript bo‘yicha tajribali frontend dasturchi. Loyihalar, tajriba va ko‘nikmalar haqida ma’lumot.",
  keywords: [
    "Muhammadxon",
    "Muhammadxon Toshpo‘latov",
    "Muhammad",
    "frontend dasturchi",
    "React dasturchi",
    "Next.js loyihalari",
    "TypeScript dasturchi",
    "O‘zbekiston dasturchi",
    "portfolio",
    "veb dasturlash",
    "dasturchi Toshkent",
    "Muhammad Latifxonovich",
    "coder",
    "web developer Uzbekistan",
  ],
  authors: [{ name: "Muhammadxon Toshpo‘latov" }],
  openGraph: {
    title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi",
    description:
      "Muhammadxon Toshpo‘latovning shaxsiy portfolio sayti – O‘zbekistonda React, Next.js va TypeScript bo‘yicha loyihalar va tajribalar.",
    url: "https://muhammadxon.uz",
    siteName: "Muhammadxon Portfolio",
    images: [
      {
        url: "https://muhammadxon.uz/img/me.png",
        width: 1200,
        height: 630,
        alt: "Muhammadxon Toshpo‘latov Portfolio",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi",
    description:
      "Muhammadxon Toshpo‘latovning portfolio sayti – O‘zbekistonda frontend dasturlash loyihalari va ko‘nikmalar.",
    images: ["https://muhammadxon.uz/img/me.png"],
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
  alternates: {
    canonical: "https://muhammadxon.uz",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Google Search Console'dan oling
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Favicon teglari (avvalgi qo‘shilganlar saqlanadi) */}
        <link rel="canonical" href="https://muhammadxon.uz" />
        <meta name="apple-mobile-web-app-title" content="Muhammadxon Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png" />
        {/* Qo‘shimcha SEO meta teglar */}
        <meta name="geo.region" content="UZ-Toshkent" />
        <meta name="geo.placename" content="Toshkent, O‘zbekiston" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <meta name="ICBM" content="41.2995, 69.2401" />
        {/* Schema.org skripti (kengaytirilgan) */}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammadxon Toshpo‘latov",
              "alternateName": ["Muhammadxon", "Muhammad"],
              "jobTitle": "Frontend Dasturchi",
              "description": "Muhammadxon Toshpo‘latov – O‘zbekistonda React, Next.js va TypeScript bo‘yicha tajribali frontend dasturchi va kontent yaratuvchi.",
              "url": "https://muhammadxon.uz",
              "image": "https://muhammadxon.uz/img/me.png",
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
              },
              "knowsLanguage": ["Uzbek", "English", "Russian"],
              "memberOf": {
                "@type": "Organization",
                "name": "O‘zbekiston Dasturchilar Jamiyati"
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