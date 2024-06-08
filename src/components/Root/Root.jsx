import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import AuthProvider from "@/AuthProvider/AuthProvider";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AuthProvider></AuthProvider>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;