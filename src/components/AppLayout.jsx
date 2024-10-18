import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import styled from "styled-components";
import Footer from "./Footer";

const StyledLayout = styled.main`
  min-height: 100dvh;
  max-width: 100%;
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
  /* width: 80%; */
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

function AppLayout() {
  return (
    <StyledLayout>
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </StyledLayout>
  );
}

export default AppLayout;
