/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import styled from "styled-components";
import { Tooltip } from "../ui/Tooltip";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "../ui/Link";

const StyledLink = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
