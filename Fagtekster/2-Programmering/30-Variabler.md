# Variabler og konstanter

**I nesten alle programmer behandler, lagrer og manipulerer vi tall og tekst. For å få til dette er vi helt avhengige av å kunne lagre denne informasjonen et sted. Dette gjøres ved hjelp av variabler.**

## Variabler

En variabel i programmering brukes på samme måte som i matematikk. Det er et symbol som kan inneholde en verdi. Denne verdien kan være et tall, en tekst eller helt andre ting. En variabel kan endre sin verdi etter at den er laget.

La oss først se på hvordan vi kan **deklarere** (opprette) en ny variabel, og **tilordne** (gi) den en verdi. Vi skriver så ut resultatet i konsollen.

``` javascript

var tall = 3;
console.log(tall);
```

Variabler kan ha mange ulike typer innhold. Dette kalles for datatyper.

Ulike datatyper kan være:

>+ Heltall -> 3
>+ Desimaltall -> 3.141592
>+ Tekst -> "Hallo verden!"
>+ Lister -> ["Petter" , "Lise" ,  "Arne" ,"Julie" ]
>+ [Boolsk](https://no.wikipedia.org/wiki/Boolsk_variabel) -> Sann eller ikke sann

Det er viktig at man er bevisst på datatyper for å unngå uønskede resultater på beregninger. Et eksempel på dette kan være hvis man ønsker å legge sammen to tall som er lest inn fra en tekstboks. Disse talle er da i utgangspunktet tekst, og en addisjon vil da kun legge tallene på etter hverandre som en tekst. "11" + "6" = "116" dersom "tallene" er tekst.

Det fine med variabler er at vi kan endre og manipulere på innholdet.

``` javascript
var tall = 3;
console.log("Variabelen 'tall' har verdien: " + tall);

tall = tall + 3;
console.log("Variabelen 'tall' har nå verdien: " + tall);
```

Variabler brukes hele tiden i programmering, og det er viktig at du blir trygg på bruken av disse.

## let - En lokal variabel

I programmering brukes ofte begrepet [_scope_](https://en.wikipedia.org/wiki/Scope_(computer_science)). Dette betyr i hvilket område man forholder seg til. Variable kan være tilgjengelig i hele programmet (globale), eller kun inne i en funksjon (lokale). Vi sier da at variabelen har ulike _scope_. En ganske ny variant av variabeldeklarasjon er kommandoen _let_. Denne fungerer omtrent som kommandoen _var_, men har et annet scope.

``` javascript

// Eksempel som viser forskjellen på var og let

// var
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // x er den samme variabelen.
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// let
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // x er nå en annen variabel
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```

Eksempel hentet fra [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

## const - En konstant

I noen tilfeller har vi bruk for en verdi som ikke skal endre seg i programmet. I slike tilfeller kan det være nyttig å bruke ```const```

``` javascript
const g = 9.81; // Gravitasjonskonstanten
var m = 75; // Her legges massen inn

console.log("F=mg gir da F=",m*g);

```

## Omgjøring fra en datatype til en annen - Casting

Ofte vil man ha behov for å endre fra en datatype til en annen. Dette kalles for casting og brukes mye i programmering. En vanlig omgjøring er når vi ønsker å endre fra datatypen string (tekst) til tall (number). Hvis variabelen mittTall inneholder teksten "35", kan denne endres til en annen datatype. Dette gjøres med kommandoen `Number(mittTall);`.

``` javascript

mittTall = Number(mittTall);

```
