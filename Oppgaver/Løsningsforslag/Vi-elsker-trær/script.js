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
let soyler = document.querySelectorAll(".soyleElement"); // Leser inn alle søylene


// Lyttere - Alle kjører samme funksjon
treVelger.addEventListener('change', visData);
fraAarVelger.addEventListener('change', visData);
tilAarVelger.addEventListener('change', visData);


// Funksjoner
function visData() {
    // Henter valgt indeks fra komboboksene
    let valgtTre = treVelger.selectedIndex;
    let valgtFraAar = fraAarVelger.selectedIndex;
    let valgtTilAar = tilAarVelger.selectedIndex;

    // Beregning av endring og prosent
    let endring = tretabell[valgtTre][valgtTilAar] - tretabell[valgtTre][valgtFraAar];
    let prosent = (endring / tretabell[valgtTre][valgtFraAar]) * 100;

    // Utskrift med string litteral
    utTekst.innerHTML = `
        <h2>Du har valgt å vise informasjon om ${treVelger.options[valgtTre].innerText}</h2>
        <p>
        I perioden ${fraAarVelger.options[valgtFraAar].innerText} til ${tilAarVelger.options[valgtTilAar].innerText} endret antall trær seg med ${endring} millioner trær. Dette tilsvarer ${prosent.toFixed(2)}% endring.
        </p>
    `;

    tegnSoyler(valgtTre); // Kjører funksjonen som tegner søylediagram for valgt tre
}

// Funksjon som tegner søylene - Indeks til valgt tre som innparameter.
function tegnSoyler(valgtTre) {
    let teller = 0;
    let venstre = 0;
    let norm_v = 350 / Math.max(...tretabell[valgtTre]); // Normalisering for at søylene skal fylle helle div'en (Merk spread operator ...)
    let norm_h = 360 / tretabell[valgtTre].length; // Normalisering for at søylene skal fylle helle div'en 
    for (s of soyler) {
        s.style.height = `${tretabell[valgtTre][teller] * norm_v}px`; // Høyden til søylen (merk norm)
        s.style.left = `${venstre}px`; // Horisontal posisjonering
        s.innerHTML = tretabell[valgtTre][teller]; // Tekst inne i søylen
        venstre += norm_h; // Gjør klar neste horisontale posisjon. (merk norm)
        teller++; // Øker teller
    }
}

// Init - Tegner søyler for standardverdi første gang siden laster.
tegnSoyler(treVelger.selectedIndex);