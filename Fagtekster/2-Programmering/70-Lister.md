# Lister

**Lister eller arrays er veldig sentrale i mange programmeringsspråk, og brukes når man skal lagre informasjon som hører naturlig sammen. For å forstå hvordan lister fungerer i programmering kan vi tenke oss en tabell med informasjon. I tillegg til informasjonen i tabellen, må vi også vite noe om hvilken linje vi finner innholdet vi ønsker å se på. Når vi kan nå forskjellige verdier i en liste kalles dette en indeksert variabel.**

Tabellen under er en enkel oversikt over noen realfag som undervises i videregående skole. Hvert fag ligger på en egen linje med linjernummer. Legg merke til at første linje har nummeret 0.

|Indeks|Verdi|
|:----:|:---:|
|0|Informasjonsteknologi 2|
|1|Matematikk R2|
|2|Fysikk 2|
|3|Kjemi 2|
|4|Biologi 2|

I programeksempelet under deklareres det en liste som tilsvarer tabellen. Dette gjøres på tre forskjellige måter, men resultatet er den samme lista. Metode 3 er den vanligste.

``` javascript

//Deklarasjon av en liste med innhold

//Metode 1
const mineFag = new Array();

mineFag[0] = "Informasjonsteknologi 2";
mineFag[1] = "Matematikk R2";
mineFag[2] = "Fysikk 2";
mineFag[3] = "Kjemi 2";
mineFag[4] = "Biologi 2";

//Metode 2
const mineFag =  new Array("Informasjonsteknologi 2","Matematikk R2","Fysikk 2","Kjemi 2","Biologi 2");

//Metode 3: Firkantparantesene erstatter kommandoen new Array
const mineFag = ["Informasjonsteknologi 2","Matematikk R2","Fysikk 2","Kjemi 2","Biologi 2"];
```

## Traversering av lister

Å traversere en liste betyr at man går igjennom alle elementene i listen. Dette gjøres vanligvis med en løkke. I eksempelet under så traverserer vi listen "mineFag", og skriver ut hvert element i konsollvinduet. Legg merke til argumentet .length, som angir antall elementer i listen. Dette bruker vi for at løkken skal teller akkurat så mange ganger som vi har elementer.

``` javascript

//Vi lager en liste og fylle opp med innhold
let mineFag = [];

mineFag[0] = "Informasjonsteknologi 2";
mineFag[1] = "Matematikk R2";
mineFag[2] = "Fysikk 2";
mineFag[3] = "Kjemi 2";
mineFag[4] = "Biologi 2";

//Listen traverseres og hvert element skrives ut i konsollvinduet
for(let i=0;i<mineFag.length;i++){
     console.log(mineFag[i]);}

```

Ofte har man behov for å manipulere innholdet i en liste. Til dette finnes det en rekke listefunksjoner eller argument. I kodeeksempelet under vises det noen eksempler på dette. Legg merke til skrivemåten med punktum mellom navnet på lista og argumentet.

``` javascript
//Antall elementer i lista
minTabell.length();

//Sorterer lista "alfabetisk" (Etter ASCII-tabellen)
minTabell.sort();

//Reverserer rekkefølgen på alle elementer i lista
minTabell.reverse();

//Legge til eller fjerne elementer fra lista
minTabell.splice();

// Fjerner og returnerer første element i en liste
minTabell.shift();

//Utfører en handling på alle elementer i lista og lagrer resultatene i en ny liste.
var nyTabell = minTabell.map();

//Henter ut største verdi fra lista
var maximum = Math.max.apply(null,Tabell);

//Henter ut minste verdi fra lista
var minimum = Math.min.apply(null,Tabell);

```

## Todimensjonale lister

Vi har frem til nå tenkt på listene som en tabell med en kolonne for innhold. Hvis vi tenker oss et regneark, så er det en god analogi for tomdimensjonale lister. På samme måte som i et regneark har vi et "rutenett" av celler som vi kan nå ved hjelp av to koordinater. I et regneark vil man nå celle C4 ved å gå bort til kolonnen merket C, og derette nedover til linje fire. Cellen som ligger i kryssningspunktet mellom kolonne C og linje fire vil da være celle C4. På samme måte kan man tenke seg en todimensjonal liste.

``` javascript

//Eksempel på en todimensjonal liste

//Deklarerer en ny liste
let minTabell = [];

//Fyller hver linje med en ny liste med tre verdier
minTabell[0] = [1,2,3];
minTabell[1] = [4,5,6];
minTabell[2] = [7,8,9];

//Vi kan nå hente ut ønsket verdi ved å bruke to hakeparanteser.
//Den første angir linjenummer, og den andre kolonnen.
console.log(minTabell[1][2]);  //Skriver ut verdien 6 i konsollvinduet.
```

## Assosiative lister og objekter

Noen ganger kan det være hensiktsmessig å legge inn ekstrainformasjon i listene. Dette gjør at vi kan sortere og hente ut data basert på navn som kan gi mer mening. Et eksempel på dette kan være en liste som inneholder biler. Vi kan da for hvert listeelement som er en bil, legge inn informasjon om merke, modell, farge osv. I eksempelet undervises det hvordan man deklarerer en assosiativ liste. Teknisk sett er dette en liste med objekter, og assosiative lister og objekter har vedlig mange avde samme egenskapene. Forskjellen er at lister har nummerert index, mens objekter bruker navn for å skille mellom de ulike elementene.

```javascript

//Deklarerer en tom liste
var bilTab = new Array();

//Legger inn data. Hvert listeelement tilsvarer en bil.
//For hver bil legger vi inn merkelapper med mer informasjon
bilTab[0] = {merke:"Opel",modell:"Zafira",farge:"Rød"};
bilTab[1] = {merke:"Opel",modell:"Omega",farge:"Sort"};
bilTab[2] = {merke:"Opel",modell:"Omega",farge:"Rød"};
bilTab[3] = {merke:"Ford",modell:"C-max",farge:"Sort"};
bilTab[4] = {merke:"Ford",modell:"S-Max",farge:"Sort"};
bilTab[5] = {merke:"Mercedes",modell:"C-klasse",farge:"Blå"};
bilTab[6] = {merke:"Mercedes",modell:"E-klasse",farge:"Rød"};

//Traverserer listen og skriver kun ut elmenter med merke lik Mercedes
for(var i=0;i<bilTab.length;i++){
  if(bilTab[i].merke=="Mercedes") {
    console.log(bilTab[i].merke + bilTab[i].modell + bilTab[i].farge);
  }
}
```

[JSON](http://no.wikipedia.org/wiki/JSON) (JavaScript Object Notation), er en enkel tekstbasert standard for datautveksling. Den er opprinnelig avledet fra JavaScript for å representere enkle datastrukturer. Standarden er imidlertid uavhengig av JavaScript eller andre programmeringsspråk.

JSON er meget godt egnet til å lagre og behandle ulike typer data i javascript. Ofte legger man dataene inn i en egen fil som lenkes sammen slik man gjør med eksterne stilark og programkode.

``` javascript

var personer = [
  { "fornavn":"Kari" , "etternavn":"Normann" },
  { "fornavn":"Ola" , "etternavn":"Normann" },
  { "fornavn":"Tom Jarle" , "etternavn": "Christiansen" }
  ];
```

Man får tilgang til og behandle data ved å bruke punktumnotasjon og indeksering som vi kjenner fra lister.

Følgende kodeeksempel skriver ut alle fornavna i eksempelet over.

``` javascript
  for(let i=0;personer.length;i++){
       console.log(personer[i].fornavn);
  }
```
