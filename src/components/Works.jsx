import styled from "styled-components";
import { projects } from "../data/projects";
import { StyledCard } from "../ui/StyledCard";
import ProjectImg from "../ui/ProjectImg";
import ProjectLink from "./ProjectLink";
import { useDarkMode } from "../context/DarkModeContext";

const StyledWorks = styled.section`
  padding: 4rem 1.5rem; /* Add some padding */
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsive grid */
  gap: 2rem; /* Space between grid items */
`;

function Works() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledWorks>
      {projects.map((project) => (
        <StyledCard key={project.title} $isDarkMode={isDarkMode}>
          <ProjectImg src={project.image} alt={project.title} />
          <h4>{project.title}</h4>
          <ProjectLink project={project} />
        </StyledCard>
      ))}
    </StyledWorks>
  );
}

export default Works;
