"use client";
import HeroBanner from "@/components/home/hero/hero";
import Projects from "@/components/home/projects/projects";
import Skills from "@/components/home/skills/skills";
import CursorTrail from "@/components/layout/CursorTrail/cursorTrail";
import Navbar from "@/components/layout/navbar/navbar";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <Navbar />
      
      <main>
        {/* Hero Section - Shows "Basim" when hovered */}
        <section data-cursor-text="Basim Thakur">
          <HeroBanner />
        </section>
        
        {/* Skills Section - Shows "my skills" when hovered */}
        <section data-cursor-text="My Skills">
          <Skills />
        </section>
        
        {/* Projects Section - Shows "my projects" when hovered */}
        <section data-cursor-text="My Projects">
          <Projects />
        </section>
      </main>
    </>
  );
}