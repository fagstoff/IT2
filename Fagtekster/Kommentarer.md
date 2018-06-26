# Kommentering av kode

Kommentering av kode er viktig. Ofte leses og utvikles programmer av flere personer, og det er derfor viktig at alle på en rask og oversiktlig måte kan sette seg inn i koden. Kommentarer er en viktig del av dokumentasjonen i en applikasjon. I tillegg til å kommentere koden bør alle som programmerer også venne seg til å strukterer koden slik at den blir mest mulig lesbar. Dett gjøres med innrykk og linjeskift.

## Kommentarer

I html-kode vil alle tekst som ligger mellom <!-- og --> tolkes som kommentarer, og kommer ikke med på siden. Du trenge rikke å kommentere hver enkelt linje i et program. Du kan anta at den som leser koden kan programmere, og trenger derfor stort sett kun å kommentere hva hver enkelt blokk av programmet gjør. Det er også vanlig å legge inn informasjon i begynnelsen av koden om hvem som har laget programmet.

```html
<!--
Enkel Kalkulator
Laget av Tom Jarle Christiansen - Desember 2014
Lisens: Creative Commons - BY SA
-->

<!DOCTYPE html>
<html lang="nb">
<head>
	<meta charset="UTF-8">
	<title>Enkel kalkulator</title>
	<script type="text/javascript" src="script.js"></script>
</head>
<body><!-- Inndatafelt med to tallfelt og en knapp. Utdata skrives til minDiv -->
	<input type="number" id="innTall1"></input><br>
	<input type="number" id="innTall2"><br>
	<input type="button" value="Beregn" onclick="beregn()"><br>
	<div id="minDiv"></div>
</body>
</html>
```

Eksempel på HTML-kode med kommentarer og god struktur.

I eksempelet over er det lagt inn kommentarer i begynnelsen av dokumentet med en kort beskrivelse av tittel, opphavsperson og lisens. Ellers er det i dette tilfellet tilstrekkelig med en kort beskrivelse i body-taggen om hva denne kodeblokken gjør.

De samme reglene brukes også i programmeringskode. I JavaScript bruker man tegnene // når man skal ha det som kalles inline-kommentarer. Alt som skrives etter // på samme linje blir kommentar. Ønsker man flere linjer med kommentarer bruker man /* og */ og skriver mye tekst man vill mellom disse. Dette kalles en blokkommentar.

``` javascript
/*
Laget av Tom Jarle Christiansen - Desmber 2014
Program for bestilling av kaffe eller kjeks
Creative Commons - BY SA
*/

function bestilling(){
	//Henter inn valgt radioknapp
	var kaffeValgt = document.getElementById("kaffe").checked;
	var kjeksValgt = document.getElementById("kjeks").checked;
	var tekstUt = "";

	//Skriver ut ordre basert på valg
	if(kaffeValgt)
		{tekstUt += "Du har valgt kaffe,";}
	else
		{tekstUt += "Du har valgt te,";}

	if(kjeksValgt)
		{tekstUt += " og kjeks.";}
	else
		{tekstUt += " og smultring.";}

	document.getElementById("ordre").innerHTML = tekstUt;
}
```

Eksempel på JavaScriptkode med kommentarer og god struktur.

I tillegg til kommentarene så struktureres koden med linjeskift og innrykk for at den skal fremstå som ryddig og lesbar. I HTML-dokumeneter er det vanlig å ha innrykk når man har en tagg inne i en annen tagg. I JavaScriptkode bruker man innrykk omtrent på samme måte. Et eksempel kan være koden i eksempelet over.
