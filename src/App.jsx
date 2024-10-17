import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { UseDarkModeContext } from "./context/useDarkModeContext";
import GlobalStyle from "./styles/GlobalSrtyles";
import AppLayout from "./components/AppLayout";
import Project from "./components/Projects";
import Home from "./pages/Home";
import Tools from "./components/Contact";
import About from "./components/About";
import ActiveSectionProvider from "./context/ActiveSectionProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <UseDarkModeContext>
        <ActiveSectionProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to={"/home"} />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />

                <Route path="project" element={<Project />} />
                <Route path="tools" element={<Tools />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ActiveSectionProvider>
      </UseDarkModeContext>
    </>
  );
}

export default App;
