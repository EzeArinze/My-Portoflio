import styled from "styled-components";

export const NavLinks = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 570px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-end;
    padding: 1.6rem 3rem;
    position: absolute;
    top: 36px;
    left: 0;
    right: 0;
    background-color: ${({ $isDarkMode }) =>
      $isDarkMode ? "#191622" : "#f2f2f2"};
    background-color: transparent;
    backdrop-filter: blur(25px);
    opacity: 2;
  }
`;
