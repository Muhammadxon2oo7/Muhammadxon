import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import MouseFollower from "@/components/mouse-follower/mouse-follower";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi va Kontent Yaratuvchi",
  description:
    "Muhammadxon Toshpo‘latov – O‘zbekistondagi tajribali frontend dasturchi. React, Next.js, TypeScript bo‘yicha loyihalar, blog va ko‘nikmalar.",
  keywords: [
    "Muhammad",
    "Muhammadxon",
    "MrMuhammadxon",
    "Muhammadxon Toshpo‘latov",
    "Frontend",
    "Frontend dasturchi",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Google frontend developer",
    "dasturchi",
    "O‘zbekiston dasturchi",
    "Toshkent dasturchi",
    "web developer Uzbekistan",
    "coder",
    "veb dasturlash",
    "portfolio",
    "frontend engineer",
    "uzbek programmer",
    "Frontend mentor",
  ],
  authors: [{ name: "Muhammadxon Toshpo‘latov", url: "https://muhammadxon.uz" }],
  openGraph: {
    title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi",
    description:
      "Muhammadxon Toshpo‘latov – React, Next.js va TypeScript bo‘yicha tajribali frontend dasturchi. Portfolio, blog va loyihalar.",
    url: "https://muhammadxon.uz",
    siteName: "Muhammadxon Portfolio",
    images: [
      {
        url: "https://muhammadxon.uz/img/me.png",
        width: 1200,
        height: 630,
        alt: "Muhammadxon Toshpo‘latov Portfolio – Frontend Dasturchi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammadxon Toshpo‘latov | Frontend Dasturchi",
    description:
      "Muhammadxon Toshpo‘latov – React va Next.js asosidagi portfolio. O‘zbekistonda frontend dasturlash bo‘yicha blog va loyiha namunalari.",
    images: [
      {
        url: "https://muhammadxon.uz/img/me.png",
        alt: "Muhammadxon Toshpo‘latov Twitter Card Preview",
      },
    ],
    site: "@mrmuhammadxon",
    creator: "@mrmuhammadxon",
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // ← bu yerga Google Search Console’dan olingan kodni qo‘ying
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        {/* Favicon va Apple uchun ikonlar */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="Muhammadxon Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/img/favicon/ms-icon-144x144.png" />
        <meta name="geo.region" content="UZ-Toshkent" />
        <meta name="geo.placename" content="Toshkent, O‘zbekiston" />
        <meta name="geo.position" content="41.2995;69.2401" />
        <meta name="ICBM" content="41.2995, 69.2401" />
        <link rel="canonical" href="https://muhammadxon.uz" />
        <meta name="language" content="Uzbek" />

        {/* Light va Dark mode uchun meta */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />

        {/* Schema.org Structured Data */}
        <Script id="schema-json-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammadxon Toshpo‘latov",
            alternateName: ["Muhammadxon", "MrMuhammadxon"],
            jobTitle: "Frontend Dasturchi",
            description:
              "Muhammadxon Toshpo‘latov – React, Next.js va TypeScript bo‘yicha O‘zbekistonda faoliyat yurituvchi frontend dasturchi.",
            url: "https://muhammadxon.uz",
            image: "https://muhammadxon.uz/img/me.png",
            sameAs: [
              "https://t.me/wdhuman",
              "https://instagram.com/wd.human/",
              "https://linkedin.com/in/mukhammadkhontoshpolatov/",
              "https://github.com/muhammadxon2oo7",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toshkent",
              addressCountry: "O‘zbekiston",
            },
            knowsLanguage: ["Uzbek", "English", "Russian"],
            memberOf: {
              "@type": "Organization",
              name: "O‘zbekiston Dasturchilar Jamiyati",
            },
          })}
        </Script>

        <Script id="schema-json-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Muhammadxon Toshpo‘latov Portfolio",
            url: "https://muhammadxon.uz",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://muhammadxon.uz/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
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
