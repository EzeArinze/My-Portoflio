import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import Works from "../components/Works";
import { BackGround } from "../ui/BackGround";

const StyledProjects = styled.section`
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
`;

const StyledDiv = styled.div`
  width: 100%;
  gap: 3rem;
`;

function Project() {
  return (
    <BackGround>
      <StyledProjects>
        <Heading as={"h2"}>Projects</Heading>
        <span>&mdash;</span>
        <Ptag as={"p-text"}>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Ptag>
        <StyledDiv>
          <Works />
        </StyledDiv>
      </StyledProjects>
    </BackGround>
  );
}

export default Project;
