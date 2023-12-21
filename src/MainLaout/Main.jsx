import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar/Navbar";
import Footer from "../Sheard/Footer/Footer ";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
          <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <Toaster />
        </div>
    );
};

export default Main;