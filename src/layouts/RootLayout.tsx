import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Main from "../utils/Main";
import { useEffect } from "react";
// import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (main) main.focus();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
