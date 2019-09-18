# Operatorer

**Operatorer i programmering er tegn eller symboler som brukes til å gjøre noe. Det høres nok vanskeligere ut enn det det egentlig er, for operatorer kjenner vi godt til fra før i matematikken. Her bruker vi også ulike tegn og symboler når vi skal gjøre noe. Slik er det også i programmering.**

Det finnes flere ulike typer operatorer litt avhengig av hva du skal gjøre.

## Aritmetiske operatorer

I tabellen under vises det hvilken verdi x får etter at der er brukt ulike operatorer på _y som har verdien 5_.

|Operator|Beskrivelse|Eksempel|X får verdi|
|:-------------:|:-------------:|:-----:|:-:|
| +  |Addisjon      |x=y+2|7
| -  |Subtraksjon   |x=y-2|3
| *  |Multiplikasjon|x=y*2|10
| /  |Divisjon      |x=y/2|2.5
| %  |Modulo        |x=y%2|1
| ++ |Inkrementering|x=y++|6
| -- |Dekrementering|x=y--|4

Operatorer brukes vanligvis på variabler, så det er viktig at du kan deklarere og tilordne en verdi til en variabel før du fortsetter.

## Bruk av operatorer på variabler

I dette eksempelet ser vi hvordan vi bruker de fire regneartene på variablene tall1 og tall2. Til sist i eksempelet ser vi på inkrementerings og dekrementeringsoperatorene. Dette er operatorer som øker eller minker verdien i variabelen med 1. Disse brukes mye i telleløkker som vi kommer tilbake til siden.

``` javascript

//Vi deklarerer variablene vi skal jobbe med i dette eksempelet.

let sum,tall1,tall2;

//Variablene tall1 og tall2 tilordnes verdier.

tall1 = 6;
tall2 = 18;

console.log("Verdien av tall1 er " + tall1 + " og verdien av tall2 er " + tall2);

//Regneeksempler

sum = tall2 - tall1;
console.log("Hvis vi trekker tall1 fra tall2 får vi " + sum);

sum = tall1 + tall2;
console.log("Hvis vi legger sammen tall1 og tall2 får vi " + sum);

sum = tall1 * tall2;
console.log("Hvis vi ganger sammen tall1 og tall2 får vi " + sum);

sum = tall2 / tall1;
console.log("Hvis vi deler tall2 på tall1 får vi " + sum);

//Inkrementering
tall1 = 10;
console.log("Variabelen tall1 har verdien " + tall1);
tall1++;
console.log("kommandoen tall1++; vil øke verdien med en slik at tall1 nå er " + tall1);

//Dekrementering
tall1 = 10;
console.log("Variabelen tall1 har verdien " + tall1);
tall1--;
console.log("kommandoen tall1--; vil minke veriden med en slik at tall1 nå er " + tall1);
```

*Tips: Kopier og prøv å endre koden i dette eksempelet selv.*

## Modulooperatoren

I programmering er vi ofte interessert i å finne ut om et tall er delelig med et annet. Dette kan vi gjøres ved å bruke operatoren **modulo**. Denne brukes som en vanlig deleoperator, men til forskjell fra en vanlig divisjon gir modulo oss restverdien av divisjonen. Dette betyr at 8 % 2 = 0 , fordi hvis vi deler 8 på 2 så får vi 0 i rest. For å forstå hva restverdien er kan vi se på et eksempel.

### Omgjøring fra sekunder til minutter og sekunder

Et praktisk eksempel på bruk av modulo kan være hvis vi ønsker å finne ut hvor mange minutter et gitt antall sekunder er.

**Oppgave**: Regn ut hvor mange minutter og sekunder det er i 150 sekunder.

Vi skal løse oppgaven på to måter. Først som vi ville ha gjort i mattetimen, deretter som en programmerer ville ha gjort det.

**Løsning 1 - Matematikkløsningen** Vi vet at det er 60 sekunder i et minutt. Ved å dele 150 sekunder på 60 får vi 2.5 ,som er antall minutter. Nå sitter vi igjen med 0.5 minutter som må regnes om til sekunder ved å gange med 60.

**Løsning 2 - Programmeringsløsningen:** Vi tenker på samme måte som i forrige løsning, men nå deler vi 150 sekunder på 60, så tar vi vare på tallet før komma. Deretter tar vi modulooperasjon på det samme og får ut resten som er 30 sekunder. 150/ 60 = 2.5 -> 2 minutter 150 % 60 = 30 -> 30 sekunder

``` javascript

// Eksempel - Modulooperatoren

//Eksempler
const rest = 10 % 2;
console.log(`10 % 2 gir ${rest} i rest.`);

//Sekundrest i 150 sekunder
const restSek = 150 % 60;
console.log(`150 % 60 gir ${restSek} i rest.`);
```

## Logiske og sammenlikningsoperatorer

I programmering er det ofte ønskelig å sammenlikne to verdier. For å gjøre det bruker man **sammenlikningsoperatorer**. Disse operatorene brukes når vi skal sammenlikne størrelser og variabler. Legg merke til at skrivemåten er litt annerledes enn på de aritmetiske operatorene. Sammenlikningsoperatorene består ofte av to tegn.

Et enkelt likhetstegn kalles tilordningsoperator, mens et dobbelt kalles for en sammelikningsoperator.

Tabellen under viser hvilket resultat ulike aritmetiske operatorer gir når variabelen x har verdien 8.

|Operator|Beskrivelse|Eksempel|Resultat|
|:-------------:|:-------------:|:-----:|:-:|
| == |Er lik          |x == 8|Sann
| != |Er ulik         |x != 8|Usann
| <  |Mindre enn      |x < 8 |Usann
| >  |Større enn      |x > 8 |Usann
| <= |Mindre eller lik|x <= 8|Sann
| >= |Større eller lik|x >= 8|Sann
