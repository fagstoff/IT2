// Løsningsforslag - Oppgave 3 - Eksmane IT2 H18
// CC BY SA - Tom Jarle Christiansen - 2019

// Klassen
class Hytte {
    constructor(navn, sengeplasser, standard, badstue, pris, bilde, ferie) {
        this.navn = navn;
        this.sengeplasser = sengeplasser;
        this.standard = standard;
        this.badstue = badstue;
        this.pris = pris;
        this.bilde = bilde;
        this.ferie = ferie
    }
    visDeg() {
        return `
            <div class="hytteDiv">
                <h2>${this.navn}</h2>
                <img src="./bilder/${this.bilde}">
                <p>
                    Hytta er ledig i den angitte ferien og koster kr ${this.pris},- for en uke.
                <P>
                <input type="button" value="Reserver hytte" onclick="bestillHytte('${this.navn}')">
            </div>
        `
    }
    book() {
        let valgtFerie = ferievelger.selectedIndex - 1;
        this.ferie[valgtFerie] = false;
    }
}

let hytteliste = [];

// Lager hytter
hytteliste.push(new Hytte("Granstua", 4, "Høy", true, 12000, "granstua.jpg", [true, false, true]));
hytteliste.push(new Hytte("Granbo", 6, "Middels", false, 15000, "granbo.jpg", [true, true, false]));
hytteliste.push(new Hytte("Grantoppen", 8, "Lav", false, 16000, "grantoppen.jpg", [false, true, false]));
hytteliste.push(new Hytte("Granhaug", 10, "Høy", true, 30000, "granhaug.jpg", [false, true, false]));

// Leser inn elementer
let ferievelger = document.querySelector('#valgElement');
let ut = document.querySelector('#utElement');

// Lytter(e)
ferievelger.addEventListener('change', visHytter);

// Funksjoner
function visHytter(){
    let valgtFerie = ferievelger.selectedIndex - 1;
    ut.innerHTML = "";
    for (let hytte of hytteliste) {
        if(hytte.ferie[valgtFerie])
            ut.innerHTML += hytte.visDeg();
    }
}

function bestillHytte(navn) {
    let valgtFerie = ferievelger.selectedIndex - 1; // Index - 1 grunnet selectboksen
    const hytte = hytteliste.filter(h => h.navn == navn); // Filtrerer ut hytta som skal bookes
    hytte[0].book(); // index 0 grunnet filter returnerer en liste med resultater
    visHytter();
}
