import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.tsx";
import "@mantine/core/styles.css";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ThemeProvider>
  </StrictMode>
);
