import styled from "styled-components";

export const Tooltip = styled.span`
  visibility: hidden;
  width: 100px;

  text-align: center;
  padding: 0.5rem;
  position: absolute;
  bottom: 150%; /* Position above the icon */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s ease;

  /* Tooltip arrow */
  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Arrow below the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;
