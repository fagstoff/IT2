Variabler
=========

**I nesten alle programmer behandler, lagrer og manipulerer vi tall og tekst. For å få til dette er vi helt avhengige av å kunne lagre denne informasjonen et sted. Dette gjøres ved hjelp av variabler.**

Variabler
---------

En variabel i programmering brukes på samme måte som i matematikk. Det er et symbol som kan inneholde en verdi. Denne verdien kan være et tall, en tekst eller helt andre ting.

La oss først se på hvordan vi kan deklarere (opprette) en ny variabel og tilordne (gi) den en verdi, og så skrive ut denne i konsollen.

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


Omgjøring fra en datatype til en annen - Casting
------------------------------------------------

Ofte vil man ha behov for å endre fra en datatype til en annen. Dette kalles for casting og brukes mye i programmering. En vanlig omgjøring er når vi ønsker å endre fra datatypen string (tekst) til tall (number). Hvis variabelen mittTall inneholder teksten "35", kan denne endres til en annen datatype. Dette gjøres med kommandoen *Number(mittTall);*.

``` javascript

mittTall = Number(mittTall);

```
