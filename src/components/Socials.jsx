import Heading from "../ui/Heading";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import styled from "styled-components";
import { Link } from "../ui/Link";

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
        <Link
          href="https://github.com/EzeArinze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>

        <Link
          href="https://x.com/Emmanuelrinz2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiTwitter />
        </Link>

        <Link>
          <IoLogoInstagram />
        </Link>
      </SocialIcons>
    </div>
  );
}

export default Socials;
