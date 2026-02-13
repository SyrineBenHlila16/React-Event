import { Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => {
    return (
        <>   
        <NavBar />         
            <main className="container mt-3">
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;