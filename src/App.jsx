import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalSrtyles";
import AppLayout from "./components/AppLayout";
import Project from "./pages/Projects";
import Home from "./pages/Home";
import Tools from "./pages/Contact";
import About from "./pages/About";
import ActiveSectionProvider from "./context/ActiveSectionProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />

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
    </>
  );
}

export default App;
