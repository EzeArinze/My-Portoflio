import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { UseDarkModeContext } from "./context/useDarkModeContext";
import GlobalStyle from "./styles/GlobalSrtyles";
import AppLayout from "./components/AppLayout";
import Project from "./components/Projects";
import Home from "./pages/Home";
import Tools from "./components/Contact";
import About from "./components/About";
import ActiveSectionProvider from "./context/ActiveSectionProvider";
import { Toaster } from "react-hot-toast";

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
          <Toaster
            position="top-right"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 1500,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxHeight: "500px",
                padding: "16px 24px",
              },
            }}
          />
        </ActiveSectionProvider>
      </UseDarkModeContext>
    </>
  );
}

export default App;
