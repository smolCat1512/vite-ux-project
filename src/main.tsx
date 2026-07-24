import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@mantine/core/styles.css";
import "./index.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/ThemeProvider";

const MOBILE_VALUE = 480;

const isMobile = window.innerWidth <= MOBILE_VALUE;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Notifications position={isMobile ? "bottom-center" : "top-right"} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
