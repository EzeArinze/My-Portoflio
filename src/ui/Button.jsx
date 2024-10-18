import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: #f5f5f5;
  border: 1px solid #727272;
  color: #595959;
  border-radius: 1rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 710px) {
    padding: 0.6rem 2rem;
    font-size: 1.3rem;
    font-weight: 600;
    cursor: pointer;
  }

  @media (max-width: 361px) {
    padding: 0.4rem 1.4rem;
    font-size: 1.1rem;
  }
`;
