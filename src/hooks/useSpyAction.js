import { useEffect, useRef } from "react";
import { useActive } from "../context/ActiveSectionProvider";

function useSpyAction() {
  const { setActiveSection } = useActive();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    }, options);

    const sections = [heroRef, aboutRef, toolsRef, projectRef];

    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, [setActiveSection]);

  return { heroRef, aboutRef, toolsRef, projectRef };
}

export default useSpyAction;
