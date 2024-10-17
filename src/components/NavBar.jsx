import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import DarkMode from "./DarkMode";
import Avatar from "./Avatar";
import Link from "./NavLink";
import { useDarkMode } from "../context/DarkModeContext";
import Hamburger from "./Hamburger";
import { NavLinks } from "../ui/NavLinks";

const scheme = {
  dark: css`
    color: #fff0ff;
  `,
  light: css`
    color: #727272;
  `,
};

const scrolled = {
  dark: css`
    background-color: #1a1a1a; /* Darker background for scrolled dark mode */
    color: #e0e0e0;
  `,
  light: css`
    background-color: #f2f2f2; /* Darker gray for scrolled light mode */
    color: #333;
  `,
};

const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;
  ${(props) => scheme[props.color]} /* Apply mode-specific default colors */
  ${(props) =>
    props.$scroll &&
    scrolled[props.color]} /* Apply mode-specific scrolled colors */

/* @media (max-width: 768px) {
    display: none;
  } */
`;

const StyledNav = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

function NavBar() {
  const { isDarkMode } = useDarkMode();
  const [navBar, setNavBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  const changeBack = () => {
    setNavBar(window.scrollY > 0); // Set to true if scrolled
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBack);
    return () => {
      window.removeEventListener("scroll", changeBack); // Cleanup on unmount
    };
  }, []);

  return (
    <StyledNavBar color={isDarkMode ? "dark" : "light"} $scroll={navBar}>
      <StyledNav>
        <Avatar />

        <NavLinks $isOpen={isOpen} $isDarkMode={isDarkMode}>
          <Link />
        </NavLinks>

        <StyledDiv>
          <DarkMode />
          <Hamburger $isOpen={isOpen} onClick={toggleNav}>
            <div />
            <div />
            <div />
          </Hamburger>
        </StyledDiv>
      </StyledNav>
    </StyledNavBar>
  );
}

export default NavBar;
