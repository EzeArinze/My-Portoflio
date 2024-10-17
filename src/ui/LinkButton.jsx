import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

export const BtnHashLink = styled(HashLink)`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #f5f5f5;
  border: 1px solid #727272;
  color: #595959;
  border-radius: 1rem;
  padding: 0.8rem 3rem;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;

  &:link,
  &:visited {
    color: #595959;
  }

  &:hover,
  &:active {
    background-color: #f2f2f2;
    color: #404040;
    transition: background-color 5s;
  }
`;
