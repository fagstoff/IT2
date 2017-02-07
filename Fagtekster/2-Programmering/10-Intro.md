Før vi begynner å programmere
=============================

**Gode verktøy er helt avgjørende uansett hva slags jobb vi skal gjøre. Dette gjelder også når vi skal programmere. I denne boka skal vi benytte oss av to typer verktøy.**

**Nettleser** - Program der koden kjøres

**Editor** - Her skrives og editeres programkoden

Nettlesere
----------
De fleste moderne nettlesere fungerer bra til programmering, og har den funksjonaliteten som trengs. De mest brukte nettleserne i dag er  Chrome, FireFox, Internet Explorer, Opera og Safari. Vi bruker nettleseren til å åpne html-filer, og vise konsollvinduet.

Konsollvinduet åpnes med menyvalget:

Chrome: Vis -> Utvikler -> JavaScript-konsoll

Konsoll
-------
Konsollvinduet i en nettleser fungerer som en statusskjerm der brukeren får mye informasjon om hva programkoden på den aktuelle siden gjør. Konsollen brukes mye når man utvikler programmer og nettsider, for å kunne se at ting fungerer som de skal. Konsollen er også et kraftig verktøy for å lete etter og finne feil.


Editor
------
Det finnes veldig mange gode editorer for programmering. De mest avanserte er store programmeringsmijø eller IDE'er som de også kalles. I dette kurset kommer vi langt med noe enklere editorer.

Kodeeditor
----------

Bilde her...

Skjermbilde fra editoren [Atom](http://atom.io). Legg merke til fargekodingen som gjør programmet enklere å lese.

Til dette kurset anbefales det å bruke kodeeditoren [Atom](http://atom.io). Dette er en enkel, men kraftige kodeeditor der man kan jobbe med flere filer samtidig. Den har også god støtte for automatiske kodeforslag og fargelegging av kode slik at lesing går lettere.

Før vi lager vårt første program
--------------------------------

Nå er vi straks klare til å sette i gang med det som er gøy, men før det må vi ha noen få ting på plass.....


 1. Lag en mappe som skal inneholde filene du lager. (Hvert program skal ha sin egen mappe).
 2. Lag et nytt html-dokument som inneholder koden i rammen under.
 3. Lag et nytt dokument som du kaller for *script.js*, der du skriver programkoden. Dette dokumentet skal ligge **i samme mappe** som html-dokumentet som du også har laget.
 4. Lag et nytt tomt dokument som du kaller for stilark.css. Dette dokumentet skal ligge **i samme mappe** som html-dokumentet som du også har laget men kan inntil videre være tomt.

Programkoden som du  kan bruke i HTML-dokumentet for å komme i gang.

``` html

<!DOCTYPE HTML>
<html lang="nb">
<head>
	<meta charset="UTF-8">
	<title>Sett inn tittel her</title>
	<!-- Lenke til stilark -->
	<link href="stilark.css" rel="stylesheet">
</head>
<body>
	Her kan du legge inn htmlkode...
	<!-- Lenke til javascriptkoden -->
	<script src="script.js"></script>
</body>
</html>
```

Programkoden som kan brukes i fila script.js
``` javascript

	console.log("Hallo verden");
```

Denne fremgangsmåten kan du bruke på alle oppgavene du skal løse i år.
