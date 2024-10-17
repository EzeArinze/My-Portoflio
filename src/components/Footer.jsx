import styled from "styled-components";
import Details from "./Details";
import Socials from "./Socials";

const StyledFooter = styled.footer`
  height: 200px;
  display: grid;
  justify-content: center;
  grid-template-columns: 70% 30%;
  background-color: #000;
  color: #f5f5f5;
  padding: 3rem;

  span {
    place-content: center;
    font-size: 1.2rem;
    grid-column: 1/-1;
    border-top: 1px solid #f2f2f2;
  }
`;

function Footer() {
  const month = new Date();

  return (
    <>
      <StyledFooter>
        <Details />
        <Socials />

        <span> &copy; Copyright {`${month.getFullYear()}`} Made by Nuel</span>
      </StyledFooter>
    </>
  );
}

export default Footer;
