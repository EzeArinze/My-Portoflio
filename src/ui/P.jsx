import styled, { css } from "styled-components";

export const Ptag = styled.p`
  ${(props) =>
    props.as === "p-header" &&
    css`
      width: 70%;
      font-size: 2rem;
      font-weight: 300;
      text-align: center;

      @media (max-width: 570px) {
        width: 90%;
        font-size: 1.6rem;
      }
    `}
  ${(props) =>
    props.as === "p-text" &&
    css`
      font-size: 1.8rem;
      text-align: center;
      width: 100%;
      line-height: 1.6;

      @media (max-width: 1560px) {
        width: 60%;
      }

      @media (max-width: 998px) {
        width: 90%;
      }

      @media (max-width: 721px) {
        font-size: 1.4rem;
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

      @media (max-width: 721px) {
        font-size: 1.4rem;
      }
    `}

    ${(props) =>
    props.as === "p-4" &&
    css`
      font-size: 1.3rem;
      font-weight: 300;
    `}
    @media (max-width: 544px) {
    font-size: 1.2rem;
  }
`;
