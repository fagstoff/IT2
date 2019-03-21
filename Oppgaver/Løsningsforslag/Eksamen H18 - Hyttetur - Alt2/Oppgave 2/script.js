// Løsningsforslag - Oppgave 2 - Eksmane IT2 H18
// CC BY SA - Tom Jarle Christiansen - 2019

// Hytteobjekter info som skal vises
let hytter = [
    {
        navn: "Granstua",
        sengeplasser: 4,
        standard: "Høy",
        bilder: ["granstua1.jpg","granstua2.jpg","granstua3.jpg","granstua4.jpg"]
    },
    {
        navn: "Granbo",
        sengeplasser: 6,
        standard: "Middels",
        bilder: ["granbo1.jpg","granbo2.jpg","granbo3.jpg"]
    }
];

// Leser inn elementer
let granstua = document.querySelector("#granstuaElement");
let granbo = document.querySelector("#granboElement");

let presentasjon = document.querySelector("#presentasjonElement");

// Lyttere
granstua.addEventListener('click', visHytte);
granbo.addEventListener('click', visHytte);

// Funksjoner
function visHytte() {

    let bildenr = 0;
    let hyttenummer = this.dataset.id; // Lagrer i variabel for bedre lesbarhet i koden. Legg merke til dataset.

    presentasjon.innerHTML = `
        <h1>${hytter[hyttenummer].navn}</h1>
        <p>Flott hytte med ${hytter[hyttenummer].sengeplasser} sengeplasser og ${hytter[hyttenummer].standard} standard.</p>
        <img id="infobilde" src="./bilder/${hytter[hyttenummer].bilder[bildenr]}"><br>
        <input type="button" id="bildeknapp" value="Neste bilde">
        `;

        let bilde = document.querySelector("#infobilde");
        let knapp = document.querySelector("#bildeknapp");

        knapp.addEventListener('click', function(){ // Anonym funksjon som henter inn neste bilde

            if(bildenr < hytter[hyttenummer].bilder.length - 1){ // Sjekker om siste bilde er vist.
                bildenr++;
            }
            else {
                bildenr = 0;
            }
            bilde.src = `./bilder/${hytter[hyttenummer].bilder[bildenr]}`;
        });
}