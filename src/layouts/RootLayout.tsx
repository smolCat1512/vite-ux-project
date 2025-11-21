import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Main from "../utils/Main";
// import Footer from "../components/Footer";

const RootLayout = () => {
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
