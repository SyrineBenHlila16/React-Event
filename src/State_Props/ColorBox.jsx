import { useState } from "react";
function ColorBox() {
    const [color, setColor] = useState("red");
    const colors = ["red", "green", "blue", "yellow", "orange"];
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
    };
    return (
        <>
            <br />
            <div style={{ backgroundColor: color, width: "100px", height: "100px", alignContent: "center", margin: "auto" }}>
            </div>
            <button onClick={changeColor}>Changer de Couleur</button>
        </>
    );
}
export default ColorBox;
