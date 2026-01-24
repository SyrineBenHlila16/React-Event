import React from 'react';
function Enfant1({ title }) {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

function Enfant2({ title }) {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

function Component(props) {
    const personne = {
        nom: "Ben Hlila",
        prenom: "Cyrine",
        age: 25
    };
    return (
        <div>
            <h1>Bonjour depuis mon nouveau Component</h1>
            <div>Nom: {personne.nom}<br></br>
                Prenom: {personne.prenom}<br></br>
                Age: {personne.age}
            </div>
            <Enfant1 title={props.title1} />
            <Enfant2 title={props.title2} />
        </div>
    );
}

export default Component;
