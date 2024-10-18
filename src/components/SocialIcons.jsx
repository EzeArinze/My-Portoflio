import styled, { css } from "styled-components";
import { Link } from "../ui/Link";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

const SocialIcon = styled.div`
  padding-top: 0.6rem;

  ${(props) =>
    props.$layout === "row" &&
    css`
      display: flex;
      align-items: center;
      gap: 1rem;
    `}

  ${(props) =>
    props.$layout === "column" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    `}

  svg {
    width: 2rem;
    height: 2rem;
  }
  cursor: pointer;
`;

// eslint-disable-next-line react/prop-types
function SocialIcons({ layout }) {
  return (
    <>
      <SocialIcon $layout={layout}>
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
      </SocialIcon>
    </>
  );
}

export default SocialIcons;
