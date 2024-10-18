import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import AboutDescription from "../components/AboutDescription";
import Skills from "../components/Skills";

const StyledAbout = styled.section`
  /* min-height: 95dvh; */

  margin: 0 auto;
  width: 80%;
  padding: 6rem 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 0.2rem;

  span {
    font-weight: 600;
    font-size: 2rem;
    color: #39324d;
  }

  @media (max-width: 768px) {
    /* padding-top: 4rem; */
  }

  @media (max-width: 576px) {
    padding-top: 3rem;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    /* text-align: center; */
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 576px) {
    padding-top: 0.5rem;
    gap: 1.5rem;
  }
`;

function About() {
  return (
    <>
      <StyledAbout>
        <Heading as={"h2"}>About Me</Heading>
        <span>&mdash;</span>
        <Ptag as={"p-text"}>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Ptag>

        <StyledDiv>
          <AboutDescription />
          <Skills />
        </StyledDiv>
      </StyledAbout>
    </>
  );
}

export default About;
