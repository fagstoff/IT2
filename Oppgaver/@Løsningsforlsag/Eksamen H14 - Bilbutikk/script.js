// Løsningsforslag Eksamensoppgave H14 - Oppgave 4
// Tom Jarle Christiansen
// 2015 - Creative Commons BY - SA

//Assosiativ tabell med priser
var pristabell = new Array();

pristabell[0] = {trend:401000,titanium:420000,familie:1000,forer:10200,stil:9200};
pristabell[1] = {trend:320000,titanium:335000,familie:1000,forer:9400,stil:3600};
pristabell[2] = {trend:255000,titanium:325000,familie:900,forer:12500,stil:9000};
pristabell[3] = {trend:281000,titanium:361000,familie:1100,forer:9900,stil:7200};

//Tabell med filnavn til bilder
var bildenummer = 0;

var bildeTabell = new Array();

bildeTabell[0] = ["Media-Kuga/kuga_front.jpg"];
bildeTabell[1] = ["Media-Kuga/kuga_bak.jpg"];
bildeTabell[2] = ["Media-Kuga/kuga_interior.jpg"];
bildeTabell[3] = ["Media-Kuga/kuga_side.jpg"];

//Tabell med reklametekst
var tekstTabell = new Array();

tekstTabell[0] = ["HELT NY FORD KUGA Kraftig, sporty og enda mer elegant både innvendig og utvendig. Vi er stolte over å kunne lansere den helt nye Ford Kuga, vår mest kompetente SUV hittil. Nye Ford Kuga har blitt større og byr på den absolutt nyeste teknologien. Et intelligent system for firehjulsdrift tilpasser seg terrenget og kjøreforholdene på et øyeblikk. Active City Stop aktiverer automatisk bremsene ved lave hastigheter for å unngå sammenstøt, og Ford SYNC gir handsfree-kontroll over musikk, telefonoppringninger og mye mer.  Vi er også stolte over å være de første som lanserer automatisk bakluke på en SUV-modell. Den er imponerende enkel å betjene, selv med hendene fulle. Du beveger simpelthen foten under støtfangeren og bakluken åpner og lukker seg."];
tekstTabell[1] = ["ØKONOMI Girskiftindikator med mer drivstoffeffektiv giring Et lys i instrumentpanelet forteller deg når du må skifte gir for å oppnå maksimal drivstoffeffektivitet. Det er en enkel, men effektiv måte å bidra til at bilturene blir mer økonomiske. Et smart info-system som hjelper deg å kjøre mer effektivt Det innovative Ford Eco Mode-systemet vurderer kontinuerlig effekten av din kjøreadferd på drivstofforbruket. Systemet leser hastighet, giring, bremsing og forventningsnivåene, pluss forholdet mellom korte og lange turer. Smart programvare gir deg så råd om hvordan du kan forbedre drivstofføkonomien i forhold til din personlige kjørestil."];
tekstTabell[2] = ["Kjøregenskaper Umiddelbart grep på skiftende underlag Kugas intelligente firehjulsdrift reagerer umiddelbart og justerer seg til skiftende underlag og kjøreforhold. Den sender nøyaktig riktig mengde effekt til det enkelte hjul som trenger mest veigrep. Og siden firehjulsdriften bare kobles inn ved behov, spares det drivstoff når underlaget er mindre krevende. Hvis du ønsker å se hva som skjer under hjulene dine i løpet av turen, vil en informasjonsskjerm for firehjulsdriften kontinuerlig vise - som et søylediagram - hvor mye effekt som sendes til hvert hjul."];
tekstTabell[3] = ["Dynamisk kurvekontroll for maksimum grep Dynamisk kurvekontroll reagerer på veioverflaten 100 ganger pr. sekund (det er 33 ganger raskere enn øyet blunker). Ved å bruke denne informasjonen balanseres kontinuerlig mengde effekt og bremsing som leveres til hvert av de to forhjulene. Dette maksimerer veigrepet og skjerper kjøreegenskapene, og hjelper deg på den måten gjennom svingene og over ujevnheter i veien. Dynamisk kurvekontroll er en spissteknologi som er standard på Kuga. Mer grep gjennom svingene Kugas system for forbedret dynamisk kurvekontroll (eDDC) kontroller på en presis måte fordelingen av effekt til begge akslene for dermed å redusere understyring og forbedre kontrollen over bilen. Dette gjør at bilen føles mer dynamisk og reaksjonsvillig.  Når det akselereres gjennom svingene bruker eDCC bremsene på det indre forhjulet og, om nødvendig, på bakhjulet, slik at motoreffekten overføres til de ytre hjulene, som har bedre veigrep."];

//Kjører funksjonen "bildekarusell" for hvert 6000ms
var minVar=setInterval(function(){bildekarusell()},6000);

function bildekarusell(){

	document.getElementById("bilder").src = bildeTabell[bildenummer];
	document.getElementById("bildetekst").innerHTML = tekstTabell[bildenummer];

	//Bilder og tekst blir gradvis synlige og usynlige når de byttes
	TweenMax.to(media,1,{opacity:0, y: 50, rotation:180,delay:4});
	TweenMax.to(media,1,{opacity:1, rotation: -180});

	bildenummer++;

	//Sjekker om siste bilde er vist
	if(bildenummer>=bildeTabell.length){
		bildenummer = 0;
		}
}


//Beregningsfunksjon for oppgave 2
function beregnBesparelse(){

	var besparelse = 0;
	var forbruk = 0.65;

	var lengde = document.getElementById("lengdeinput").value;
	var drivstoffpris = document.getElementById("drivstoffprisinput").value;

	//Beregner besparelse avhengig av kjøremiljø
	if(document.getElementById("by").checked){
		besparelse = forbruk * lengde * drivstoffpris * 0.10;
		}
	else{
		besparelse = forbruk * lengde * drivstoffpris * 0.05;
	}

	//Formaterer og skriver ut resultat
	document.getElementById("besparelseDiv").innerHTML = "Du sparer " + besparelse.toFixed(2) + " kr på kjøringen du har oppgitt.";

}


function beregnPris(){

	//Bilens totalpris
	var sum;

	//Leser inn valgt modell
	var valgtModell = document.getElementById("valgboksModell");
	valgtModell = valgtModell.options[valgtModell.selectedIndex].value;

	//Sjekker valgt grunnpakke og legger i sum
	var valgtGrunnpakke = document.getElementById("trendRadio").checked;
	if(valgtGrunnpakke){
		sum = pristabell[valgtModell].trend;
	}
	else{
		sum = pristabell[valgtModell].titanium;
	}

	//Sjekker valgbokser og legger kostnad til summen.
	if(document.getElementById("familieCheck").checked) sum+= pristabell[valgtModell].familie;
	if(document.getElementById("forerCheck").checked) sum+= pristabell[valgtModell].forer;
	if(document.getElementById("stilCheck").checked) sum+= pristabell[valgtModell].stil;

	document.getElementById("resultat").innerHTML = "Prisen på valgt bil er: " + sum + "kr";

}
