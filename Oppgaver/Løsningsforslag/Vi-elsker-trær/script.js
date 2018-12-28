// jshint esversion:6

/*
Løsningsforslag: Vi elsker trær (Eksamen V2011)
CC - BY SA -  Tom Jarle Christiansen 2019
Enkel løsning med kombobokser
*/

// Data og globale variabler
let tretabell = [
    [20,31,53,89,102,117],
    [23,39,72,89,92,99],
    [4,6,8,12,15,18]
];

// Leser inn elenmenter
let treVelger = document.querySelector('#komboElementTreslag');
let fraAarVelger = document.querySelector('#komboElementFraAar');
let tilAarVelger = document.querySelector('#komboElementTilAar');

let utTekst = document.querySelector("#utTekstElement");

let soyler = document.querySelectorAll(".soyleElement");


// Lyttere
treVelger.addEventListener('change', visData);
fraAarVelger.addEventListener('change', visData);
tilAarVelger.addEventListener('change', visData);


// Funksjoner

function visData() {
    // Indekser
    let valgtTre = treVelger.selectedIndex;
    let valgtFraAar = fraAarVelger.selectedIndex;
    let valgtTilAar = tilAarVelger.selectedIndex;

    let endring = tretabell[valgtTre][valgtTilAar] - tretabell[valgtTre][valgtFraAar];
    let prosent = (endring / tretabell[valgtTre][valgtFraAar]) * 100;

    console.log(valgtFraAar.innerText);

    utTekst.innerHTML = `
        <h2>Du har valgt å vise informasjon om ${treVelger.options[valgtTre].innerText}</h2>
        <p>
        I perioden ${fraAarVelger.options[valgtFraAar].innerText} til ${tilAarVelger.options[valgtTilAar].innerText} endret antall trær seg med ${endring} millioner trær. Dette tilsvarer ${prosent.toFixed(2)}% endring.
        </p>
    `;

    tegnSoyler(valgtTre);
}

function tegnSoyler(valgtTre) {
    let teller = 0;
    let venstre = 0;
    for (s of soyler) {
        s.style.height = `${tretabell[valgtTre][teller]}px`;
        s.style.left = `${venstre}px`;
        venstre += 50;
        teller++;
        console.log(venstre);
    }
}