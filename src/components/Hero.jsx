import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import { BtnHashLink } from "../ui/LinkButton";

const HeroSection = styled.section`
  height: 90dvh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.1rem;
`;

function Hero() {
  return (
    <HeroSection>
      <Heading as="h1">
        {" "}
        <span>Hey,</span> This is Nuel
      </Heading>
      <Ptag as={"p-text"}>
        A Result-Oriented Web Developer building and managing Websites and Web
        Applications that leads to the success of the overall product
      </Ptag>
      <BtnHashLink smooth to={"#projects"}>
        Project
      </BtnHashLink>
    </HeroSection>
  );
}

export default Hero;
