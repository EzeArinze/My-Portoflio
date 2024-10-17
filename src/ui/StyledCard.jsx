import styled from "styled-components";

export const StyledCard = styled.li`
  text-align: center;
  list-style: none;
  padding: 1.5rem;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? "#221e2e" : "#f5f5f5"};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    /* transform: translateY(-5px);  */
    box-shadow: 0 8px 16px rgba(143, 143, 143, 0.2); /* Deeper shadow */
  }

  h4 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    /* color: #666; */
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h4 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
