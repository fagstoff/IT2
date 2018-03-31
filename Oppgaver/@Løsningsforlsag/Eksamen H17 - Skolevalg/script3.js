// jshint esversion:6

// Løsningsforslag - Eksamen H17 - Tom Jarle Christiansen

// Globale variabler
const passordliste = ['Passord001', 'Passord002', 'Passord003', 'Passord004', 'Passord005', 'Passord006', 'Passord007', 'Passord008', 'Passord009', 'Passord010'];
const stemmer = [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0];
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
    stemmeDiv.innerHTML += `
        <br>
        <h1>Ønsker du virkelig å stemme på ${partier[stemmeIndeks]}?</h1>
        <input type="button" id="bekreftBtn" value="Bekreft">
    `;
    const bekreftKnapp = document.querySelector('#bekreftBtn');
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
    
    for (const stemme of stemmer) {
        sum += stemme;
    }

    for (const parti of partier) {
        tekst += `${parti}: ${(stemmer[partier.indexOf(parti)]/sum) * 100} %<br>`;
    }
    stemmeDiv.innerHTML = tekst;
}
