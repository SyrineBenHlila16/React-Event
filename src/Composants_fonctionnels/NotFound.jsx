import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <img 
                src="/src/Composants_fonctionnels/images/notfound.png"  // 👈 Chemin complet depuis src
                alt="404 Not Found" 
            />
        </div>
    );
};

export default NotFound;