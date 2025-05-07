import { Outlet } from "react-router-dom";
import Header from "../components/Header";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
