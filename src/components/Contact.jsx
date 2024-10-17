import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import ContactForm from "./ContactForm";
import { useDarkMode } from "../context/useDarkModeContext";

const StyledContact = styled.section`
  min-height: 95dvh;
  padding: 8rem 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 0.2rem;

  span {
    font-weight: 600;
    font-size: 2rem;
    color: #39324d;
  }
`;

const StyledCta = styled.div`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem 0.6rem;

  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? "#221e2e" : "#e4e4e4"};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(6px);

  @media (min-width: 1434px) {
    width: 60%;
  }
`;

function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <StyledContact>
        <Heading as={"h2"}>Contact</Heading>
        <span>&mdash;</span>
        <Ptag as={"p-header"}>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </Ptag>

        <StyledCta $isDarkMode={isDarkMode}>
          <ContactForm />
        </StyledCta>
      </StyledContact>
    </>
  );
}

export default Contact;
