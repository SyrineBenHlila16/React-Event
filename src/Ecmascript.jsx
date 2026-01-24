import React from 'react';

function Occurrences({ data }) {
    console.log(data);
}

function LongestWord({ wordData }) {
    return (
        <div>
            <h2>Le mot le plus long est : {wordData.mot}</h2>
            <p>Sa longueur est : {wordData.longueur}</p>
        </div>
    );
}

const Ecmascript = () => {
    const input = [
        ["a", "b", "c"],
        ["c", "d", "e"],
        ["e", "f", "g"]
    ];

    //Tableau bch nerjou men des sous tableaux el tableau wehed
    const flat = input.flat();
    const occurrences = flat.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    //console.log(occurrences);
    const mots = ["voiture", "camion", "moto", "bicyclette"];
    const findLongestWord = (mots) => {
        return mots
            .map(mot => ({ mot, longueur: mot.length }))
            .reduce((acc, mot) => mot.longueur > acc.longueur ? mot : acc, { mot: "", longueur: 0 });
    };

    const longest = findLongestWord(mots);

    return (
        <div>
            <Occurrences data={occurrences} />
            <LongestWord wordData={longest} />
        </div>
    );
};

export default Ecmascript;
