import React, { useState } from 'react';
import { Search } from './fonction';

function LongestWord({ wordData }) {
    return (
        <div>
            <h2>Le mot le plus long est : {wordData.mot}</h2>
            <p>Sa longueur est : {wordData.longueur}</p>
        </div>
    );
}
function Occurrences({ data }) {
    return (
        <div>
            <h2>Occurrences des éléments :</h2>
            <div>
                {Object.entries(data).map(([key, value]) => (
                    <p key={key}>{key} : {value}</p>
                ))}
            </div>
        </div>
    );
}

function TotalMarks({ total }) {
    return (
        <div>
            <h2>Total des notes après bonus : {total}</h2>
        </div>
    );
}

const Traitement = () => {
    //Question 1
    const mots = ["voiture", "camion", "moto", "bicyclette"];
    const findLongestWord = (mots) => {
        return mots
            .map(mot => ({ mot, longueur: mot.length }))
            .reduce((acc, mot) => mot.longueur > acc.longueur ? mot : acc, { mot: "", longueur: 0 });
    };

    const longest = findLongestWord(mots);

    //Question 2
    const input = [
        ["a", "b", "c"],
        ["c", "d", "e"],
        ["e", "f", "g"]
    ];

    const flat = input.flat();
    const occurrences = flat.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    //Question 3 
    let students = [
        { name: 'John', id: 123, marks: 98 },
        { name: 'Baba', id: 101, marks: 23 },
        { name: 'yaga', id: 200, marks: 45 },
        { name: 'Wick', id: 115, marks: 75 }
    ];

    const totalMarks = students
        .map(student => ({
            ...student, //destructuration : conpie al objet el koll fi student
            marks: student.marks < 50 ? student.marks + 15 : student.marks
        }))
        .filter(student => student.marks > 50)
        .reduce((total, student) => total + student.marks, 0);

    //Question 4
    const [Tab, setTab] = useState([
        { id: 1, name: 'Produit A', price: 100, category: 'Électronique' },
        { id: 2, name: 'Produit B', price: 50, category: 'Alimentaire' },
        { id: 3, name: 'Produit C', price: 200, category: 'Mobilier' }
    ]);

    const [idRecherche, setIdRecherche] = useState('');
    const [resultat, setResultat] = useState(null);

    // Push - ajouter à la fin
    const pushItem = () => {
        const dernierId = Tab.length > 0 ? Math.max(...Tab.map(i => i.id)) : 0;
        const nouvelItem = {
            id: dernierId + 1,
            name: `Produit ${dernierId + 1}`,
            price: Math.floor(Math.random() * 500) + 10, //nombre aléatoire bin 10 w 500 yetaataa aléatoirement f ajout
            category: ['Électronique', 'Alimentaire', 'Mobilier'][Math.floor(Math.random() * 3)] //kif kif hnee 
        };
        setTab([...Tab, nouvelItem]); //thot l objet jdida fi aakhir tableau
    };

    // Unshift - ajouter au début
    const unshiftItem = () => {
        const dernierId = Tab.length > 0 ? Math.max(...Tab.map(i => i.id)) : 0;
        const nouvelItem = {
            id: dernierId + 1,
            name: `Produit ${dernierId + 1}`,
            price: Math.floor(Math.random() * 500) + 10,
            category: ['Électronique', 'Alimentaire', 'Mobilier'][Math.floor(Math.random() * 3)]
        };
        setTab([nouvelItem, ...Tab]);
    };

    // Recherche 
    const rechercher = () => {
        const id = Number(idRecherche);
        if (!isNaN(id)) {
            const res = Search(Tab, id);
            setResultat(res);
        }
    };

    return (
        <div>
            <LongestWord wordData={longest} />
            <Occurrences data={occurrences} />
            <TotalMarks total={totalMarks} />

            <h2>Question 4 - Tableau Tab </h2>
            {Tab.map((item, i) => (
                <div key={i}>
                    ID: {item.id} | Nom: {item.name} | Prix: {item.price}TND | Catégorie: {item.category}
                </div>
            ))}

            <div style={{ margin: '20px 0' }}>
                <button onClick={pushItem} style={{ marginRight: '10px' }}>Push</button>
                <button onClick={unshiftItem}>Unshift</button>
            </div>

            <div>
                <h3>Recherche par ID :</h3>
                <input
                    value={idRecherche}
                    onChange={e => {
                        setIdRecherche(e.target.value);
                        setResultat(null);
                    }}
                    placeholder="Saisir un id "
                    style={{ marginRight: '10px' }}
                />
                <button onClick={rechercher}>Rechercher</button>

                {resultat && (
                    <div >
                        <h4>Résultat trouvé :</h4>
                        <p>ID: {resultat.id}</p>
                        <p>Nom: {resultat.name}</p>
                        <p>Prix: {resultat.price}TND</p>
                        <p>Catégorie: {resultat.category}</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Traitement;