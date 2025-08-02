import { useRef } from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Experience from "./pages/Experience";

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


  return (
    <>
      <Header onNavigate={scrollToSection} />
      <section ref={heroRef} id="hero"><Hero /></section>
      <section ref={aboutRef} id="about"><About /></section>
      <section ref={skillsRef} id="skills"><Skills /></section>
      <section ref={projectsRef} id="projects"><Projects /></section>
      <section ref={experienceRef} id="experience"><Experience /></section>
      <section ref={contactRef} id="contact"><Contact /></section>
      
      <Footer />
    </>
  );
}

export default App;
