import styled from "styled-components";
import Details from "./Details";
import Socials from "./Socials";

// const StyledFooter = styled.footer`
//   height: 200px;
//   display: grid;
//   justify-content: center;
//   grid-template-columns: 70% 30%;
//   background-color: #000;
//   color: #f5f5f5;
//   padding: 3rem;

//   span {
//     place-content: center;
//     font-size: 1.2rem;
//     grid-column: 1/-1;
//     border-top: 1px solid #f2f2f2;
//   }
// `;

const StyledFooter = styled.footer`
  display: grid;
  justify-content: center;
  grid-template-columns: 70% 30%;
  background-color: #000;
  color: #f5f5f5;
  padding: 3rem;
  height: 200px;

  @media (max-width: 965px) {
    grid-template-columns: 1fr;
    height: auto; /* Auto-adjust height for content */
    padding: 2rem; /* Reduce padding */

    div {
      width: 80%;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem; /* Further reduce padding for mobile */
  }

  span {
    text-align: center;
    place-content: center;
    font-size: 1.2rem;
    grid-column: 1 / -1;
    border-top: 1px solid #f2f2f2;
    margin-top: 1rem;
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
