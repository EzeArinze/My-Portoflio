import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { UseDarkModeContext } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseDarkModeContext>
      <App />
    </UseDarkModeContext>
  </StrictMode>
);
