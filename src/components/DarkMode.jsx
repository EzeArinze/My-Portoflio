import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 0 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  span {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const StyledIcon = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

function DarkMode() {
  const { isDarkMode, toggleDark } = useDarkMode();

  return (
    <StyledSection>
      <span>{isDarkMode ? "Dark" : "Light"}</span>
      <StyledIcon onClick={toggleDark}>
        {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
      </StyledIcon>
    </StyledSection>
  );
}

export default DarkMode;
