import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 5rem;
      font-weight: 600;
      span {
        background-color: #f5f5f5;
        color: #595959;
      }

      @media (max-width: 418px) {
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-transform: uppercase;
    `}
  
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      text-align: left;
      text-transform: uppercase;

      @media (max-width: 961px) {
        font-size: 1.5rem;
      }
    `}

    line-height:1.4;
`;

export default Heading;
