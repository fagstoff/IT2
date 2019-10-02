```javascript

/*

Øveprøve i grunnleggende JavaScript-programmering
Du skal KUN skrive ut resultatet som det ville bli vist i konsollen.

Oppgavene bør løses UTEN hjelpemidler for å vise at du har kompetanse i grunnleggende programmering

*/

// Navn: _________________________________

// Oppgave 0:

console.log("Hallo verden!");

// Svar: __________________________

// Oppgave 1:

let navn = "Tom Jarle";
console.log(`Heisann ${navn}! Hvordan har du det i dag?`);

// Svar: ______________________________________________

// Oppgave 2:

let tall1 = "7";
let tall2 = "3";

console.log(tall1 + tall2);

// Svar: _____________________

// Oppgave 3:

let tall2 = 7;
let tall3 = 3;

let resultat = 7 % 3;

console.log(resultat);

// Svar: ___________________

// Oppgave 4:

let tall4 = 8;

console.log(tall4 % 2 == 0);

// Svar: __________________

// Oppgave 5:

let tall5 = 9;

if (tall5 % 2 != 0 && tall5 >= 9) {
    console.log("Utfall 1");
} else if (tall5 < 10) {
    console.log("Utfall 2");
} else {
    console.log("Utfall 3");
}

// Svar: ______________________


// Oppgave 6:

for(let i = 0; i < 100; i++) {
    if( i % 57 == 0 ) {
        console.log(i)
    }
}

// Svar: ______________________

// Oppgave 7:

let min_liste = [4,3,6,8,1];

for (x in min_liste) {
    console.log(x);
}

// Svar: __________________


// Oppgave 8:

let min_liste1 = [4, 1, 2, -3, 7, 4];

console.log(min_liste1[2]);

// Svar: _______________

// Oppgave 9:

let min_liste2 = ["Heisann", 2, 3.14, false, -19];

console.log(min_liste2.length);

// Svar: ___________________


// Oppgave 10:

let min_liste3 = [1, 2, 3, ["a", "b", "c"]];

console.log(min_liste3[3][1]);

// Svar: ________________

// Oppgave 11:

for (let i=10; i < 15; i++) {
    console.log(i);
}

// Svar: _______________

// Oppgave 12:

let min_liste4 = [4,3,6,8,1];

for (let x of min_liste4) {
    if(x % 2 != 0 || x > 7) {
        console.log(x);
}

// Svar: __________________


```


