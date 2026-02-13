import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{ 
            padding: "15px", 
            backgroundColor: "#333",
            display: "flex",
            gap: "20px"
        }}>
            <NavLink 
                to="/" 
                style={({ isActive }) => ({
                    color: isActive ? '#ff6b6b' : 'white',
                    textDecoration: isActive ? 'underline' : 'none',
                })}
            >
                My Events
            </NavLink>
            <NavLink 
                to="/events"
                style={({ isActive }) => ({
                    color: isActive ? '#ff6b6b' : 'white',
                    textDecoration: isActive ? 'underline' : 'none',
                })}
            >
                Events
            </NavLink>
        </nav>
    );
}