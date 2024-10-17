import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { useActive } from "../context/ActiveSectionProvider";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 570px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledLink = styled(HashLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.4rem;
    font-weight: 500;
    padding: 0 0.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active {
    border: 1px solid #727272;
    border-radius: 0.6rem;
    transition: 0.2s ease-in-out;
  }
`;

function Link() {
  // const location = useLocation();
  const { activeSection } = useActive();

  return (
    <NavList>
      <li>
        <StyledLink
          smooth
          to="/home#hero"
          className={`${activeSection === "hero" ? "active" : ""}`}
        >
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink
          smooth
          to="/home#about"
          className={`${activeSection === "about" ? "active" : ""}`}
        >
          About
        </StyledLink>
      </li>

      <li>
        <StyledLink
          smooth
          to="/home#projects"
          className={`${activeSection === "projects" ? "active" : ""}`}
        >
          Project
        </StyledLink>
      </li>
      <li>
        <StyledLink
          smooth
          to="/home#tools"
          className={`${activeSection === "tools" ? "active" : ""}`}
        >
          Contact
        </StyledLink>
      </li>
    </NavList>
  );
}

export default Link;
