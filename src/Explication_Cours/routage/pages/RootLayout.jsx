import { Outlet, Link } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <h1>Mon Application React</h1>
            <nav>
                <Link to="/">Accueil</Link> &nbsp;|&nbsp;
                <Link to="/about">À propos</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;