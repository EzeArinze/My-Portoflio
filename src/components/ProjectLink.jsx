/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import styled from "styled-components";
import { Tooltip } from "../ui/Tooltip";
import { useDarkMode } from "../context/useDarkModeContext";

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Link = styled.a`
  position: relative;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:active,
  &:hover {
    transform: translateY(-2px);
    transition: 0.3s;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
    font-size: 1rem;
    color: ${({ $isDarkMode }) => ($isDarkMode ? "#f5f5f5" : "")};
  }
`;

function ProjectLink({ project }) {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLink>
      <Link
        href={project?.link}
        target="_blank"
        rel="noopener noreferrer"
        $isDarkMode={isDarkMode}
      >
        <TbWorld size={25} />
        <Tooltip>View Project</Tooltip>
      </Link>

      <Link
        href={project?.github}
        target="_blank"
        rel="noopener noreferrer"
        $isDarkMode={isDarkMode}
      >
        <FaGithub size={25} />
        <Tooltip>View Code</Tooltip>
      </Link>
    </StyledLink>
  );
}

export default ProjectLink;
