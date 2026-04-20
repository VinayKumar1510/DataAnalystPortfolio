import { ScrollTraceLine } from "@/components/ScrollTraceLine";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_10%_10%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(700px_500px_at_90%_25%,rgba(168,85,247,0.10),transparent_55%),radial-gradient(900px_700px_at_50%_110%,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,1))]" />
      </div>

      <ScrollTraceLine />
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-6 pb-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
        <footer className="pt-10 text-xs text-white/40">
          © {new Date().getFullYear()} Vinay Kumar. Built with Next.js.
        </footer>
      </main>
    </div>
  );
}
