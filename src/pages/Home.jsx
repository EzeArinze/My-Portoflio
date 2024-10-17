import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Project from "../components/Projects";
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
