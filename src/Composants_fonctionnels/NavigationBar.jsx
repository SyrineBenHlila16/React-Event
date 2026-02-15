import { NavLink } from "react-router-dom";

export default function NavigationBar() {
    return (
        <nav style={{ padding: "15px", background: "#333", display: "flex", gap: "20px" }}>
            <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none"
            })}>
                My Events
            </NavLink>

            <NavLink to="/events" style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none"
            })}>
                Events
            </NavLink>
        </nav>
    );
}
