// Løsning av oppgave 2 på prøveprøve

var liste = new Array();

liste = [1,6,3,2,10,5,12,15,6,9,17,14,7];

// Søk etter verdi og finn index
console.log(liste.indexOf(15));

console.log("Skriver ut alle elementer i lista:");

for(var i=0; i<liste.length; i++){
  console.log(liste[i]);
}

console.log("Alle tall som er større enn ti");

for (var i = 0; i < liste.length; i++) {
  if(liste[i] > 10){
    console.log(liste[i]);
  }
}

console.log("Alle tall som er delelig med to");

for (var i = 0; i < liste.length; i++) {
  if(liste[i]%2 == 0){
    console.log(liste[i]);
  }
}

console.log("Skriver ut i omvendt rekkefølge");

liste.reverse();

for (var i = 0; i < liste.length; i++) {
  console.log(liste[i]);
}


console.log("Summen av tallene i listen");

var sum = 0;

for (var i = 0; i < liste.length; i++) {
  sum += liste[i];
}

console.log("Summen av talla er:" + sum);

console.log("Gjennomsnittet");

console.log(sum/liste.length);
