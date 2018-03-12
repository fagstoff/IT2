// jshint esversion:6


// Globale variabler
const passordliste = ['Passord001', 'Passord002', 'Passord003', 'Passord004', 'Passord005', 'Passord006', 'Passord007', 'Passord008', 'Passord009', 'Passord010'];
const stemmer = [0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0];
const partier = ['PP', 'FrP', 'Høyre', 'KrF', 'Venstre', 'AP', 'MDG', 'SV', 'Rødt'];

// Leser inn elementer
const regBtn = document.querySelector('#registreringsKnapp');
const stemmeDiv = document.querySelector('#stemme');
const passord = document.querySelector('#passordElement');

// Lyttere
regBtn.addEventListener('click', sjekkPassord);


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
    stemmeDiv.innerHTML = `
            <h2>Vennligst avgi din stemme</h2>
            <select id="valgSelector">
                <option value="0" >PP</option>
                <option value="1" >FrP</option>
                <option value="2" >H</option>
                <option value="3" >KrF</option>
                <option value="4" >V</option>
                <option value="5" >AP</option>
                <option value="6" >MDG</option>
                <option value="7" >SV</option>
                <option value="8" >R</option>
            </select>
            <input id="stemmeKnapp" type="button" value="Stem!">
        `;

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