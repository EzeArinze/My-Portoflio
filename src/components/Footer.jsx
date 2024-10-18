import styled from "styled-components";
import Details from "./Details";
import Socials from "./Socials";

const StyledFooter = styled.footer`
  background-color: #000;
  color: #f5f5f5;
  padding: 1.8rem;
  /* height: 200px; */
`;

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;

  display: grid;
  justify-content: center;
  grid-template-columns: 70% 30%;

  span {
    text-align: center;
    place-content: center;
    font-size: 1.2rem;
    grid-column: 1 / -1;
    border-top: 1px solid #f2f2f2;
    margin-top: 1rem;
  }

  @media (max-width: 965px) {
    grid-template-columns: 1fr;
    height: auto;
    padding: 2rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1.5rem;
  }
`;

function Footer() {
  const month = new Date();

  return (
    <StyledFooter>
      <StyledDiv>
        <Details />
        <Socials />

        <span> &copy; Copyright {`${month.getFullYear()}`} Made by Nuel</span>
      </StyledDiv>
    </StyledFooter>
  );
}

export default Footer;
