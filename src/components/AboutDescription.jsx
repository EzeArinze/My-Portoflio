import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import { Button } from "../ui/Button";
import styled from "styled-components";

const StyledDescription = styled.div`
  padding-top: 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

function AboutDescription() {
  return (
    <>
      <StyledDescription>
        <Heading as={"h3"}>Get to Know me!</Heading>
        <Ptag as={"p-3"}>
          I&apos;m a <strong> Frontend Focused Web Developer</strong> Frontend
          Focused Web Developer building and managing the Front-end of Websites
          and Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </Ptag>
        <Ptag as={"p-3"}>
          I also like sharing content related to the stuff that I have learned
          over the years in Web Development so it can help other people of the
          Dev Community.
        </Ptag>
        <Ptag as={"p-3"}>
          I&apos;m <strong>open to Job opportunities</strong> where I can
          contribute, learn and grow. If you have a good opportunity that
          matches my skills and experience then don&apos;t hesitate to contact
          me.
        </Ptag>
        <span>
          <Button>Contact</Button>
        </span>
      </StyledDescription>
    </>
  );
}

export default AboutDescription;
