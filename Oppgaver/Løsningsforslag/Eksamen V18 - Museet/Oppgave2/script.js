// Løsningsforslag på oppgave 2 til eksmaen i IT2 V18
// Creative Commons - BY SA - Tom Jarle Christiansen

//jshint esversion:6

// Leser inn elementer
const oversikt = document.querySelector('#oversiktDiv');
const utskrift = document.querySelector('#utskriftDiv');

// Definerer klassen
class Arrangement {
    constructor(dato, tidspunkt, navn, info) {
        this.dato = dato;
        this.tidspunkt = tidspunkt;
        this.navn = navn;
        this.info = info; 
    }
}

// Datalagring
const arrListe = [];
const bestillinger = [];

// Lager arrangementsdata (Kan enkelt utvides eller automatiseres)
const a1 = new Arrangement("1. juni", "11:00", "Trondheim kammermusikkfestival: Fabelaktig formiddag", "Dette er festivaldagen for barn og familier. En billett gjelder for alt, og du kan velge mellom flere ulike forestillinger.");
const a2 = new Arrangement("4. juni", "14:30", "Spill opp!", "Mastereksamen NTNU fløyte v/Matthias Lauga");
const a3 = new Arrangement("6. juni", "13:00", "Onsdagskonsert", "Barokke treblåserinstrumenter");
const a4 = new Arrangement("9. juni", "14:00", "Juiogat: Joik for folk", "En vandring i samisk musikkhistorie ved Lena Jansen");

arrListe.push(a1, a2, a3, a4);

// Funksjoner

function skrivUtArr (arrListe) {

    // Skriver ut lista
    let tekst = ``;
    tekst += `<br><table border="1px black">`;
    for(let a of arrListe) {
        tekst += `<tr><td>${a.dato}</td> <td>${a.tidspunkt}</td> <td>${a.navn}</td> <td>${a.info}</td></tr>`;
        }
    tekst += `</table><br>`;

    // Lager rullgardinmeny og knapper
    tekst += `<select id="valgboks">`;
    for(let a of arrListe) {
        tekst += `<option>${a.navn}</option>`;
    }
    tekst += `</select>`
    tekst += `
        <input id="voksneInput" type="number" placeholder="Ant. voksne">
        <input id="barnInput" type="number" placeholder="Ant. barn">
        <input id="bestillBtn" type="button" value="Bestill billetter">
    `;

    oversikt.innerHTML = tekst;
}

function skrivUtBest() {

    // Henter bestillingsdata
    const a = valg.options[valg.selectedIndex].innerHTML;
    const antVoksne = Number(voksne.value);
    const antBarn = Number(barn.value);


    let tekst = ``;

    // Sjekker at bestillingen er korrekt
    if (antVoksne == 0 && antBarn == 0) {
        tekst += `Vennligst velg antall personer!`;
    }
    else {
        tekst += `Du har bestillt ${antVoksne + antBarn} billetter til ${a}, ${fordeling(antVoksne, antBarn)}. Totalprisen er kr ${beregnPris(antVoksne, antBarn)}, inklusiv grupperabatt på 20 prosent`;
    }
    
    utskrift.innerHTML = tekst;
}

function beregnPris(antVoksne, antBarn) {
    const totAnt = antVoksne + antBarn;
    if (totAnt > 4) {
        return (antBarn * 50 + antVoksne * 100) * 0.80;
    }
    else {
        return antBarn * 50 + antVoksne * 100;
    }
}

// Funskjon som formaterer utskrift ved null valgte barn/voksne
function fordeling (antVoksne, antBarn) {
    if (antBarn == 0) {
        return `${antVoksne} voksne`;
    }
    else  if (antVoksne == 0) {
        return `${antBarn} barn`;
    }
    else {
        return `${antVoksne} voksne og ${antBarn} barn`;
    }
}


// Hovedprogrammet starter her

// Skriver ut liste med arrangementer
skrivUtArr(arrListe);

// Leser inn genererte elementer
const valg = document.querySelector("#valgboks");
const voksne = document.querySelector("#voksneInput");
const barn = document.querySelector("#barnInput");
const bestillingsKnapp = document.querySelector("#bestillBtn");

// Lytter på knappen
bestillingsKnapp.addEventListener('click', skrivUtBest);
