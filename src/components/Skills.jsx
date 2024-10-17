import styled from "styled-components";
import { skills } from "../data/skills";
import Heading from "../ui/Heading";
import Img from "../ui/Img";

const StyledSkill = styled.div`
  padding-top: 2.2rem;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(100px, 1fr)
  ); /* Responsive grid */
  gap: 1.5rem;
  padding-top: 1.5rem;
  cursor: pointer;

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  @media (max-width: 576px) {
    gap: 1rem;
    padding-top: 1rem;
  }
`;

const Li = styled.li`
  text-align: center;

  border: 1px solid #d4d4d4;
  border-radius: 0.7rem;
  padding: 0.3rem 1.2rem;

  background-color: var(--color-dark-800);
  color: var(--color-dark-50);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    padding: 0.5rem 1.2rem;
  }
`;

function Skills() {
  return (
    <StyledSkill>
      <Heading as={"h3"}>My Skills</Heading>
      <StyledUl>
        {skills?.map((skill) => (
          <Li key={skill.label}>
            <Img src={skill.icon} />
            <h4>{skill.label}</h4>
          </Li>
        ))}
      </StyledUl>
    </StyledSkill>
  );
}

export default Skills;
