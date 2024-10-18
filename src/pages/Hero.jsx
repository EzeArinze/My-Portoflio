import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import { BtnHashLink } from "../ui/LinkButton";
import { BackGround } from "../ui/BackGround";
import SocialIcons from "../components/SocialIcons";

const HeroSection = styled.section`
  margin: 0 auto;
  width: 80%;
  height: 100dvh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.1rem;
`;

const IconSpan = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0.2rem;
  background-color: #bdbdbd37;
  padding: 2rem 0.8rem;

  @media (max-width: 570px) {
    display: none;
  }
`;

function Hero() {
  return (
    <BackGround>
      <IconSpan>
        <SocialIcons layout={"column"} />
      </IconSpan>
      <HeroSection>
        <Heading as="h1">
          {" "}
          <span>Hey,</span> This is Nuel
        </Heading>
        <Ptag as={"p-header"}>
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </Ptag>
        <BtnHashLink smooth to={"#projects"}>
          Project
        </BtnHashLink>
      </HeroSection>
    </BackGround>
  );
}

export default Hero;
