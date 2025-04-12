import About from "@/components/about/about";
import Certificates from "@/components/certificates/sertificates";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import ScrollProgress from "@/components/scroll-progress/scroll-progress";
import Skills from "@/components/skills/skills";


export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-100 min-h-screen">
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
