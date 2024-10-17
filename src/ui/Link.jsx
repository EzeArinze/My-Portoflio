import styled from "styled-components";

export const Link = styled.a`
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
