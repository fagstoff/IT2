//jshint esversion:6
// Løsningsforslag oppgave 3
// CC BY SA - Tom Jarle Christiansen 2018

// Data
const pizzaTabell = [];
const bestilling = [];

// Leser inn elementer

const pizzanavn = document.querySelector('#pizzanavnInput');
const innhold = document.querySelector('#innholdInput');
const allergener = document.querySelector('#allergenerInput');
const litenprisumva = document.querySelector('#prisLitenInput');
const storprisumva = document.querySelector('#prisStorInput');
const regKnapp = document.querySelector('#btnRegpizza');

const menyKnapp = document.querySelector('#btnMeny');
const bestill = document.querySelector('#bestillDiv');

const meny = document.querySelector('#menyDiv');

const anttallPizza = document.querySelector('#antallSelect');

// Lyttere

regKnapp.addEventListener('click', registrerPizza);
menyKnapp.addEventListener('click', skrivMeny);
anttallPizza.addEventListener('change', skrivBestSkjema);

class Pizza {
    constructor(navn, innhold, allergener, prisumva) {
        this.navn = navn;
        this.innhold = innhold;
        this.allergener = allergener;
        this.prisumva = prisumva;
    }

    prisLiten() {
        return (this.prisumva[0] * 1.12).toFixed(0);
    }

    prisStor() {
        return (this.prisumva[1] * 1.12).toFixed(0);
    }
}

function registrerPizza(){
    const pizza = new Pizza(pizzanavn.value, innhold.value.split(","), allergener.value.split(","), [litenprisumva.value, storprisumva.value]);

    pizzaTabell.push(pizza);
}

function skrivMeny() {

    let menytekst = `<h2> Vår meny </h2><ol>`;

    for (let pizza of pizzaTabell) {
        menytekst += `<li>${pizza.navn} - Stor: ${pizza.prisStor()} Liten: ${pizza.prisLiten()} - Innhold: ${pizza.innhold} , Allergener: ${pizza.allergener}</li>`;
    }

    menytekst += `</ol>`;

    meny.innerHTML = menytekst;
}

function skrivBestSkjema() {
    let antall = Number(anttallPizza.options[anttallPizza.selectedIndex].value);

    let velger = `<select class="pizzaSelect">`;
    for (let pizza of pizzaTabell) {
        velger += `<option>${pizza.navn}</option>`;
    }
    velger += `</select>`;
    velger += `Huk av for liten: <input class="sizeCheck" type="checkbox">`;

    let menytekst = ``;
    for (let i=0; i < antall; i++) {
        menytekst += `Pizza Nr ${i + 1} - ${velger}<br>`;
    }
    menytekst += `<br><input id="btnBestill" type="button" value="Bekreft bestilling"><br>`;
    bestill.innerHTML += menytekst;

    const bestillknapp = document.querySelector('#btnBestill');
    bestillknapp.addEventListener('click', bestillPizza);
}

function bestillPizza() {
    const bestillte = document.querySelectorAll('.pizzaSelect');
    const størrelser = document.querySelectorAll('.sizeCheck');

    let kvittering = `<br>`;
    let size;
    let pris = 0;
    let sum = 0;

    for (let i=0; i < bestillte.length; i++) {
        if (størrelser[i].checked) {
            pris = pizzaTabell[i].prisLiten();
        }
        else {
            pris = pizzaTabell[i].prisStor();
        }

        kvittering += `${pizzaTabell[bestillte[i].selectedIndex].navn} - Kr ${pris},-<br>`;
        sum += Number(pris);
    }
    kvittering += `
        -------------------<br>
        Sum: Kr ${sum},-<br>
        ====================
    `;
    bestill.innerHTML += kvittering;
}