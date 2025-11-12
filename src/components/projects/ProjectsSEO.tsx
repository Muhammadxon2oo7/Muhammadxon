import Head from "next/head";

export default function ProjectsSEO() {
  return (
    <Head>
      <title>Dasturiy Loyihalar | Muhammadxon Toshpo‘latov Portfolio</title>
      <meta
        name="description"
        content="Muhammadxon Toshpo‘latov tomonidan yaratilgan zamonaviy web loyihalar: MEA Ekotizim, SmartQnatCraft, Uzbekhub, R3T (SpecifyPro) va boshqa innovatsion yechimlar."
      />
      <meta
        name="keywords"
        content="Master English Academy, MEA Ekotizim, SmartQnatCraft, Uzbekhub, R3T, SpecifyPro, Next.js, React, TypeScript, Shadcn, dasturchi, portfolio, web developer O‘zbekiston"
      />
      <meta property="og:title" content="Muhammadxon Toshpo‘latov — Web Loyihalar" />
      <meta
        property="og:description"
        content="Zamonaviy web loyihalar: MEA Ekotizim, SmartQnatCraft, Uzbekhub, R3T. Dasturchi Muhammadxon Toshpo‘latov tomonidan ishlab chiqilgan platformalar."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://muhammadxon.uz/projects" />
      <meta property="og:image" content="https://muhammadxon.uz/img/me.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Muhammadxon Toshpo‘latov — Web Loyihalar" />
      <meta
        name="twitter:description"
        content="O‘zbekistonlik dasturchi tomonidan yaratilgan web loyihalar to‘plami."
      />
      <meta name="twitter:image" content="https://muhammadxon.uz/img/me.png" />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammadxon Toshpo‘latov",
            url: "https://muhammadxon.uz/",
            sameAs: [
              "https://github.com/muhammadxon2oo7",
              "https://www.linkedin.com/in/mukhammadkhontoshpolatov/",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Freelance Developer",
            },
            knowsAbout: ["React.js", "Next.js", "TypeScript", "Shadcn", "Web Development"],
            hasPart: [
              {
                "@type": "CreativeWork",
                name: "MEA Ekotizim",
                url: "https://chustmaster.uz/",
                description:
                  "Master English Academy uchun zamonaviy boshqaruv tizimi.",
              },
              {
                "@type": "CreativeWork",
                name: "SmartQnatCraft",
                url: "https://qqcraft.uz/",
                description:
                  "Qoraqalpog‘iston hunarmandchiligi uchun e-commerce platforma.",
              },
              {
                "@type": "CreativeWork",
                name: "Uzbekhub",
                url: "https://uzbekhub.uz/",
                description:
                  "O‘zbekistonning zamonaviy muammolariga yechim izlovchi ekotizim.",
              },
            ],
          }),
        }}
      />
    </Head>
  );
}
