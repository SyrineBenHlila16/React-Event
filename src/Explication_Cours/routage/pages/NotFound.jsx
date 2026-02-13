// src/routage/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page non trouvée</h1>
            <p>Désolé, la page que vous recherchez n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};

export default NotFound;