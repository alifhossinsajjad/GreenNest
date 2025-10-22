import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Carosul from "../Pages/carosul";
import Footer from "../Components/Footer";

const MianLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 my-10 w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MianLayout;
