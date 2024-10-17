import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";

const StyledLayout = styled.main`
  min-height: 100dvh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-rows: auto 1fr;
  }
`;

const StyledMain = styled.section`
  width: 90%;
  margin: 0 auto;
  /* padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center; */

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  );
}

export default AppLayout;
