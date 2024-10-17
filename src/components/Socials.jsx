import Heading from "../ui/Heading";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import styled from "styled-components";

const SocialIcons = styled.div`
  padding-top: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
  }
  cursor: pointer;
`;

function Socials() {
  return (
    <div>
      <Heading as="h4">Socials</Heading>
      <SocialIcons>
        <FaGithub />
        <CiTwitter />
        <IoLogoInstagram />
      </SocialIcons>
    </div>
  );
}

export default Socials;
