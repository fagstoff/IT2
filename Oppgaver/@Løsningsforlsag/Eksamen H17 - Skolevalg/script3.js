// jshint esversion:6
// Løsningsforslag - Eksamen H17 - Tom Jarle Christiansen V18

// Globale variabler
const passordliste = ['Passord001', 'Passord002', 'Passord003', 'Passord004', 'Passord005', 'Passord006', 'Passord007', 'Passord008', 'Passord009', 'Passord010'];
const stemmer = [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0];
const stemmer2013 = [[4.3, 0], [15.6, 0], [28.2, 0], [6.7, 0], [2.8, 0], [3.8, 0], [4.2, 0], [23.0, 0], [5.0, 0], [3.7, 0]];
const partier = ['PP', 'FrP', 'Høyre', 'KrF', 'Venstre', 'AP', 'MDG', 'SV', 'Rødt'];

// Leser inn elementer
const regBtn = document.querySelector('#registreringsKnapp');
const stemmeDiv = document.querySelector('#stemme');
const passord = document.querySelector('#passordElement');
const opptellingBtn = document.querySelector('#opptellingsKnapp');

// Lyttere
regBtn.addEventListener('click', sjekkPassord);
opptellingBtn.addEventListener('click', opptelling);

// Funksjoner

function sjekkPassord(){
    if (passordliste.indexOf(passord.value) != -1) {
        console.log('Success!');
        passordliste.splice(passordliste.indexOf(passord.value), 1);
        regBtn.disabled = true;
        lagStemmeBoks();
    }
    else {
        console.log('Feil passord!');
        passord.value = '';
    }
}

// Lager select-boks for stemming.
function lagStemmeBoks() {
    let partierSelector = `
        <h2>Vennligst avgi din stemme</h2>
        <select id="valgSelector">
        `;

        for (const parti  of partier) {
            partierSelector += `
                <option value="${partier.indexOf(parti)}">${parti}</option>
            `;
        }

        partierSelector += `
            </select>
                <input id="stemmeKnapp" type="button" value="Stem!">
        `;

        stemmeDiv.innerHTML = partierSelector;

        const stemmeBtn = document.querySelector('#stemmeKnapp');
        stemmeBtn.addEventListener('click', stemming);
}

function stemming() {
    const valgboks = document.querySelector('#valgSelector');
    const stemmeIndeks = valgboks.options[valgboks.selectedIndex].value;
    stemmeDiv.innerHTML = `
        <br>
        <h1>Ønsker du virkelig å stemme på ${partier[stemmeIndeks]}?</h1>
        <input type="button" id="bekreftBtn" value="Bekreft">
        <input type="button" id="avbrytBtn" value="Avbryt">
    `;

    const bekreftKnapp = document.querySelector('#bekreftBtn');
    const avbrytKnapp = document.querySelector('#avbrytBtn');

    // Lar bruker stemme på nytt ved avbrudd.
    avbrytKnapp.addEventListener('click', lagStemmeBoks);

    // Anonym funksjon som registrerer stemmen når bruker bekrefter
    bekreftKnapp.addEventListener('click', function(){
        console.log(stemmeIndeks);
        stemmer[stemmeIndeks] += 1;
        stemmeDiv.innerHTML = '';
        regBtn.disabled = false;
        passord.value = '';
    });
}

function opptelling(){
    let sum = 0;
    let tekst = "";

    // Beregner totalt antall stemmer for å regne ut prosent.
    for (const stemme of stemmer) {
        sum += stemme;
    }

    // Generer opptellingsutskriften og oppdaterer tabellen
    for (const parti of partier) {
        indeks = partier.indexOf(parti);
        stemmer2013[indeks][1] = (stemmer[indeks] / sum) * 100;
        tekst += `${parti}: ${(stemmer[indeks]/sum) * 100} % - (Forskjell fra forrige valg er ${stemmer2013[indeks][1] - stemmer2013[indeks][0]} %)<br>`;
    }
    stemmeDiv.innerHTML = tekst;
}
