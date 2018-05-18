//jshint esversion:6
// Løsningsforslag oppgave 1
// CC BY SA - Tom Jarle Christiansen 2018

// Globals
let roterer = false;
let rotasjon = 0;

let beveger = false;
let pos = 0;

// Leser inn elementer
const firkant = document.querySelector('#firkantDiv');
const roterKnapp = document.querySelector('#btnRoter');
const flyttKnapp = document.querySelector('#btnFlytt');
const fargeKnapp = document.querySelector('#btnFarge');
const breddeKnapp = document.querySelector('#btnBredde');

// Lyttere
console.log(roterKnapp);
roterKnapp.addEventListener('click', roterFirkant);
flyttKnapp.addEventListener('click', flyttFirkant);
fargeKnapp.addEventListener('click', fargeFirkant);
breddeKnapp.addEventListener('click', breddeFirkant);

// Funksjoner

function roterFirkant() {
    if (rotasjon > 360) {
        rotasjon = 0;
    }
    if(roterer == false) {
        roterer = true;
        setInterval(roterFirkant, 100);
    }
    else {
        firkant.style.transform = `rotate(${rotasjon}deg)`;
        rotasjon += 3;
    }
}

function flyttFirkant() {
    if(beveger == false) {
        beveger = true;
        setInterval(flyttFirkant, 50);
    }
    else {
        firkant.style.left = `${pos}px`;
        if (pos > 400) {
            pos = 0;
        }
        pos += 1;
    }

}

function fargeFirkant() {
    console.log(firkant.style.backgroundColor);
    if(firkant.style.backgroundColor == 'red') {
        firkant.style.backgroundColor = 'blue';
    }
    else {
        firkant.style.backgroundColor = 'red';
    }
}

function breddeFirkant() {
    firkant.style.width = '200px';
}