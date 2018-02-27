// jshint esversion: 6

// Globals

const bilder = ['Lan.jpg', 'Rasmus.jpg', 'Une.jpg'];
const mdglyd = new Audio('lyd/Night-owl.mp3');

// Hent elemeneter
const mdgElement = document.querySelector('.MDG');
const appElement = document.querySelector('#appBoks');

// Lyttere
mdgElement.addEventListener('click', mdgslide);


// Funksjoner

function mdgslide(){

    mdglyd.play();
    mdglyd.loop = true;

    let bildeNr = 0;
    appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
    bildeNr++;

    setInterval(function(){
        appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
        if (bildeNr == bilder.length - 1){
            bildeNr = 0;
        }
        else{
            bildeNr++;
        }
    }, 2000);
}