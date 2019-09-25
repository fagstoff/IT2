# Tester

I nesten alle programmer vil man før eller siden få behov for å teste eller sammenligne verdier slik at programmet kan gjøre ulike ting avhengig av resultatet på testen.

## if-test

If-kommandoen bruker operatorer til å sammenlikne to verdier, og resultatet av en if-test er enten sann eller falsk.

** Tester i JavaScript sjekker som resultatet av sammelikningsoperatorern er `true` eller `false` **

``` javascript
const tall1 = verdi;
const tall2 = verdi;

if(tall1 == tall2){
    //kode som skal kjøres kun hvis tall1 er lik tall2
}
```

Ofte ønsker man å gjøre litt mer avanserte ting enn kun å sjekke om to tall er like. Dette kan løses ved å bruke ulike operatorer. På denne måten kan man sjekke om to størrelser er større enn, mindre enn eller ulike hverandre. Man kan også kombinere flere tester med logiske operatorer som og og eller. Vi kan også lage større og mer sammensatte tester ved å kombinere kommandoene if og else.

I tester brukes trippel likhetstegn hvis du skal sjekke både verdi og datatype. I en test bruker man logiske sammenligningsvariabler.

La oss se på flere eksempel der vi kombinerer ulike operatorer.

``` javascript
const tall1 = verdi;
const tall2 = verdi;

//Test som sjekker om tall1 er lik tall2
if(tall1 == tall2){
    //kode som skal kjøres kun hvis tall1 er lik tall2
    console.log("tall1 er lik tall2");
}

//Test som sjekker om tall1 er større enn tall2
if(tall1 > tall2){
    //kode som skal kjøres kun hvis tall1 er større enn tall2
    console.log("tall1 er større enn tall2");
}

//Test som sjekker om tall1 er større eller lik tall2
if(tall1 >= tall2){
    //kode som skal kjøres kun hvis tall1 er større eller lik tall2
    console.log("tall1 er større eller lik tall2");
}
//Test som sjekker om tall1 er ulik tall2
if(tall1 != tall2){
    //kode som skal kjøres kun hvis tall1 er ulik tall2
    console.log("tall1 er ulik tall2");
}
```

## else if og logiske kombinasjoner i tester

Noen ganger kan det være nødvendig å kombinere flere typer uttrykk og operatorer for å få testet det man ønsker.

``` javascript
//To tester med if og else-if
const tall1 = verdi_1;
const tall2 = verdi_2;

//Første test
if(tall1 >= tall2 && tall2 % 2 == 0){
    //kode som skal kjøres kun hvis tall1 er større eller lik tall2
    console.log("tall1 er større eller lik tall2 OG tall2 er et partall");
}
//Neste test som kun kjøres hvis ikke den første slår til
else if(tall1 != tall2 || tall1 + tall2 > 10){
     console.log("tall1 er ulik tall2 ELLER tall1 pluss tall2 er større enn 10");
}
//Hvis ingen av testene slår til
else{
     console.log("Ingen av de foregående if-testene slo til når dette vises");
}
```

## Switch

Hvis man ønsker å teste et begrenset antall utfall kan det være hensiktsmessig å bruke kommandoen switch. Denne er veldig godt egnet til å registrere for eksempel ukedager som i eksempelet under. Sammen med switch brukes også kommandoen break, for å hoppe ut av testen når den slår til.

``` javascript

//Programmet henter ut nummeret (0 til 6) på dagens dag,
// og legger dette i variabelen dag. Kommandoen break; hopper ut av testen.

const dag = new Date().getDay();
switch (dag)
{
case 0:
  x = "søndag";
  break;
case 1:
  x = "mandag";
  break;
case 2:
  x = "tirsdag";
  break;
case 3:
  x = "onsdag";
  break;
case 4:
  x = "torsdag";
  break;
case 5:
  x = "fredag";
  break;
case 6:
  x = "lørdag";
  break;

//Standardverdi hvis ingen av valgene over slår til
default:
  x = "Verdien er ikke en gyldig ukedag";
}

//Skriver ut hvilken dag det er.
console.log(`Dagen i dag er ${x}`);
```
