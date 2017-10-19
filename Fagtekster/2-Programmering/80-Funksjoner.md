# Funksjoner

**En funksjon er en samling med kode som kjøres når man henviser til denne i et funksjonskall. Et funksjonskall kan for eksempel skje når man har en *hendelse*, som å trykker på en knapp eller en meny. Man kan også utføre et funksjonskall i et program ved å skrive navnet på funksjonen.**

For å øke gjenbruksverdien til kode kan det være lurt å bruke funksjoner. Disse kan kjøres så mange ganger man ønsker, kun ved hjelp av et funksjonskall. I eksempelet under kjøres funksjonen `minFunksjon();`tre ganger i en løkke.

```javascript

for (let i = 0; i < 3; i++) {
  minFunksjon();
}

function minFunksjon(){
  console.log("Dette er skrevet ut av en funksjon");
}

```

## Tidsstyrte funksjoner

Noen ganger kan det være behov for å kjøre en funksjon ved faste tidsintervall. Til dette brukes kommandoen setInterval. I eksempelet under kjøres funksjonen en gang hvert sekundet.

``` javascript

//Kjører funksjonen "minKlokke" for hvert 1000ms
let minVar=setInterval(function(){minKlokke()},1000);

function minKlokke(){
  const dato=new Date(); //Henter inn datoobjekt
  const tid=dato.toLocaleTimeString();
  console.log(tid + " " + dato);
}

```

## Hendelser

I de aller fleste programmer ønsker man en interaktivitet mellom bruker og program. Dette kan for eksempel være at noe skjer når man trykker på en knapp. I HTML så finnes det mange ulike hendelsesatrubutter, men felles for dem alle er at de kjører en funksjon når ønsket hendelse skjer. Denne kjører en valgfri funksjon når brukeren trykker på en knapp.

Den anbefalte metoden å lage hendelse er å opprette denne i JavaScript. Dette er for å skille html- og javascriptkode.

I eksempelet under kan du se hvordan en funksjon kjøres når brukeren trykker på en knapp.

Vi har en knapp og en div i html-dokumentet.

``` html

<input id="minKnapp" type="button" value="Trykk på meg">

<div id="minDiv">
  Denne teksten skal byttes ut når du trykker på knappen.
</div>

```

I JavaScript-dokumentet oppretter vi en lytter og en funksjon.

```javascript

var minBtn = document.getElementById("minKnapp");
var divElement = document.getElementById("minDiv");

// Lytter på kanppen minBtn
minBtn.onclick = skrivUtBeskjed;

function skrivUtBeskjed(){
  divElement.innerHTML = "Du har trykket på knappen!";
}

```

HTML-koden i eksempelet under ligger i filen index.html, og inneholder en knapp med en hendelsesatributt og en tom div med id-atributt. Når brukeren trykker på knappen skrives det ut en beskjed med innerHTML i en div.

``` html

<!doctype html>
<html lang="nb">
<head>
    <meta charset="UTF-8">
    <title>Hendelser</title>
</head>
<body>
    <input id="minKnapp" type="button" value="Skriv ut">
    <div id="minDiv"></div>
  <script type="text/javascript" src="script.js"></script>
</body>
</html>
```

I filen script.js ligger funksjonen med koden som kjøres når noen trykker på knappen.

``` javascript

// Leser inn knappeelementet
var knapp1Element = document.getElementById("minKnapp1");
var knapp2Element = document.getElementById("minKnapp2");

// Lytter på om noen har trykket på knappen.
// Metode 1
knapp1Element.onclick = skrivUt;
// Metode 2
knapp2Element.addEventListener("click", skrivUt);

function skrivUt(){
    document.getElementById("minDiv").innerHTML = "Du trykket på knappen!";
}
```

## Funksjoner med inn- og utparameter

For å øke nytteverdien til en funksjon ytterligere, kan det være nyttig å sende med, og få tilbake behandlet data. I eksempelet under ganges to tall sammen ved å sende de med som paramtere i funksjonskallet. Resultatet returneres og kan skrives ut direkte der man kaller funksjonen.

```javascript

//Funksjonen ganger sammen to tall som er
//sendt med som innparameter.
//Resultatet returneres

function gangeToTall(a,b)
{
return a * b;
}

document.getElementById("demo").innerHTML = gangeToTall(4,3);
```

I eksempelet under kjøres en funksjon med innparameter når noen trykker på en knapp.

``` javascript

var minTekst = "Dette er en tekst som er sendt som en parameter";

knappElement.addEventListener("click", function(){ skrivUt(minTekst); });

function skrivUt(utskrift){
   document.getElementById("minDiv").innerHTML = utskrift;
}
```

## Anonyme funksjoner

Anonyme funksjoner kjøres umiddelbart, og er godt egnet hvis man...

```javascript

var kvadrer = function(tall){return tall * tall};

var x = kvadrer(8); // Gir x = 64

```
