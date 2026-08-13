import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/data";

/** Celotna enostranska vsebina – enaka za oba jezika, besedila pridejo iz lib/data.ts. */
export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <About locale={locale} />
        <Projects locale={locale} />
        <Skills locale={locale} />
        <Experience locale={locale} />
        <Education locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
