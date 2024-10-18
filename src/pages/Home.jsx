import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";
import useSpyAction from "../hooks/useSpyAction";

function Home() {
  const { heroRef, aboutRef, projectRef, toolsRef } = useSpyAction();

  return (
    <>
      <section id="hero" ref={heroRef}>
        <Hero />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>

      <section id="projects" ref={projectRef}>
        <Project />
      </section>
      <section id="tools" ref={toolsRef}>
        <Contact />
      </section>
    </>
  );
}

export default Home;
