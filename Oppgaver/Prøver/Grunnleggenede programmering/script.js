// Prøve i grunnleggende JavaScript
// Oktober 2019
//
// Navn:____________________________
//
// I alle oppgaver skal du skrive ut hva som blir
// skrevet ut i konsollen.


// Oppgave 0: Hallo verden!

let skole = "Bamble VGS";
console.log(skole);

// Svar:__________________


// Oppgave 1

let president_fr = "Emanuel Macron";
let hilsen = `Presidenten i Frankrike heter ${president_fr}.`;

console.log(hilsen);

// Svar: __________________________


// Oppgave 2:

let tall1 = "7";
let tall2 = "3";

console.log(tall1 + tall2);

// Svar: ________________


// Oppgave 3:

let tall3 = 7;
let tall4 = 3;

console.log(tall3 % 4);

// Svar: ________________


// Oppgave 4:
 
let tall5 = 7;
let tall6 = 10 + 3 * tall5;

console.log(tall6);

// Svar: _______________


// Oppgave 5:

let tall7 = 7;
let tall8 = 9;

console.log(tall7 == tall8);

// Svar: ____________________


// Oppgave 6:

let tall9 = 7;
let tall10 = 9;

if (tall9 == tall10) {
    console.log("A");
} else {
    console.log("B");
}

// Svar: ______________


// Oppgave 7:

let tall11 = 7;
let tall12 = 12;

if (tall11 < tall12 && tall12 % 2 == 0) {
    console.log("A");
} else {
    console.log("B");
}

// Svar: _____________


// Oppgave 8:

for (let i = 0; i < 5; i = i + 1) {
    console.log(i);
}

// Svar: _______________________


// Oppgave 9:

for (let i = 100; i > 95; i--) {
    console.log(i);
}

// Svar: ___________________


// Oppgave 10:

let liste1 = [5, 6, 8, 4, 3, 2, 5, 6];
let resultat = 0;

for (let x of liste1) {
    resultat = resultat + x;
}

console.log(resultat);

// Svar: _______________


// Oppgave 11:

let liste2 = [9, 3.14, "Hei", [1,2,3], true];

console.log(liste2.length);

// Svar: ________________


// Oppgave 12:

let liste3 = [3,4,5,4,3,2];

for (let x of liste3) {
    if (x > 3 && x % 2 != 0) {
        conosole.log(x);
    }
}

// Svar: ______________


// Oppgave 13

let liste4 = ["A", "B", "C"];

for (let x of liste4) {
    for (let y of liste4) {
        console.log(x + y)
    }
}