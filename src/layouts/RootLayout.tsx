import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Main from "../utils/Main";
import { useEffect } from "react";
import ThemePicker from "../theme/ThemePicker";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) main.focus();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <ThemePicker />
    </div>
  );
};

export default RootLayout;