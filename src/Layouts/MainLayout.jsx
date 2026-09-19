import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
