import styled, { css } from "styled-components";

export const Ptag = styled.p`
  ${(props) =>
    props.as === "p-header" &&
    css`
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
    `}
  ${(props) =>
    props.as === "p-text" &&
    css`
      font-size: 2.2rem;
      text-align: center;
      width: 100%;
      line-height: 1.6;

      @media (max-width: 576px) {
        font-size: 1.8rem;
      }
    `}

  ${(props) =>
    props.as === "p-2" &&
    css`
      font-size: 1.8rem;
      font-weight: 500;
    `}
  ${(props) =>
    props.as === "p-3" &&
    css`
      font-size: 1.6rem;
      font-weight: 300;
    `}

    ${(props) =>
    props.as === "p-4" &&
    css`
      font-size: 1.3rem;
      font-weight: 300;
    `}
`;
