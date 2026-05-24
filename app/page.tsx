import Navbar             from "@/components/Navbar";
import Hero               from "@/components/Hero";
import About              from "@/components/About";
import Skills             from "@/components/Skills";
import Projects           from "@/components/Projects";
import Collaboration      from "@/components/Collaboration";
import Contact            from "@/components/Contact";
import Footer             from "@/components/Footer";
import LoadingScreen      from "@/components/LoadingScreen";
import MouseGlow          from "@/components/MouseGlow";
import ParticleBackground from "@/components/ParticleBackground";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Cinematic loading overlay */}
      <LoadingScreen />

      {/* Global visual layers */}
      <ParticleBackground />
      <MouseGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Collaboration />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
