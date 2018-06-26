// jshint esversion:6
// Løsningsforslag - Eksamen H17 - Tom Jarle Christiansen V18
// Globals

const bilder = ['Lan.jpg', 'Rasmus.jpg', 'Une.jpg'];
const mdglyd = new Audio('lyd/Night-owl.mp3');
let kjører = false; // Kjører bildekarusellen? (Flagg)

// Hent elemeneter
const mdgElement = document.querySelector('.MDG');
const appElement = document.querySelector('#appBoks');

// Lyttere
mdgElement.addEventListener('click', mdgslide);

// Funksjoner
// Bildekarusellen for MDG
function mdgslide(){
    mdglyd.play();
    mdglyd.loop = true;
    let bildeNr = 0;

    appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
    bildeNr++;

    if (!kjører) {
        kjører = true;
        setInterval(function (){
            appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
            if (bildeNr == bilder.length - 1){
                bildeNr = 0;
            }
            else{
                bildeNr++;
            }
        }, 2000);
    }
}