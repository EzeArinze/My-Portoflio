import styled from "styled-components";
import Heading from "../ui/Heading";
import { Ptag } from "../ui/P";
import ContactForm from "../components/ContactForm";
import { useDarkMode } from "../context/DarkModeContext";

const StyledContact = styled.section`
  /* min-height: 95dvh; */
  padding: 6rem 0.8rem;
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
  min-width: 60%;
  margin: 2rem auto;
  padding: 1rem 0.6rem;

  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? "#221e2e" : "#e4e4e4"};
  border-radius: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(6px);

  @media (max-width: 747px) {
    width: 90%;
  }

  @media (max-width: 359px) {
    width: 90%;
  }
`;

function Contact() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <StyledContact>
        <Heading as={"h2"}>Contact</Heading>
        <span>&mdash;</span>
        <Ptag as={"p-text"}>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Ptag>

        <StyledCta $isDarkMode={isDarkMode}>
          <ContactForm />
        </StyledCta>
      </StyledContact>
    </>
  );
}

export default Contact;
