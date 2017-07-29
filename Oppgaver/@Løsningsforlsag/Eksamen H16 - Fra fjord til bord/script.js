// Laget av Tom Jarle Christiansen - Creative Commons BY SA - 2017

// Globals (Databasen)

var fiskeTabell = [];

// Leser inn elementer

// Oppgave 2
var antMiddagVelger = document.getElementById("antMiddagElement");
var antPersonVelger = document.getElementById("antPersonerElement");
var ordreTekst = document.getElementById("ordreDiv");
var visKnapp = document.getElementById("visBtn");
var sendKnapp = document.getElementById("sendBtn");

// Oppgave 3
var tabellTekst = document.getElementById("tabellDiv");
var ukeNr = document.getElementById("ukeNrElement");
var antMiddagVelger2 = document.getElementById("antMiddagElement2");
var antVoksne = document.getElementById("antVoksneElement");
var antUngdom = document.getElementById("antUngdomElement");
var antBarn = document.getElementById("antBarnElement");
var registrerKnapp = document.getElementById("registrerBtn");

var visDataUkeNr = document.getElementById("visUkeElement");
var visDataKnapp = document.getElementById("visDataBtn");


// Lyttere
// Oppgave 2
visKnapp.onclick = visBestilling;
sendKnapp.onclick = skrivUtKvittering;

// Oppgave 3
registrerKnapp.onclick = lagTabell;
visDataBtn.onclick = visData;

// Funksjoner

// Oppgave 2-funskoner;
function visBestilling(){
  var antMiddager = antMiddagVelger.options[antMiddagVelger.selectedIndex].value;
  var antPersoner = antPersonVelger.options[antPersonVelger.selectedIndex].value;
  var ordre;

  ordre = "<h3>-- Handlekurv --</h3>";
  ordre += "Du har bestillt " + antMiddager + " middager for " + antPersoner + " personer<br>";
  ordre += "Totalpris: kr " + beregnPris(antMiddager, antPersoner) + ",-<br><br>";
  ordre += '<input id="bekreftBtn" type="button" value="Gå videre til kasse">';
  ordreTekst.innerHTML = ordre;

  // Leser inn og lytter på den nye knappen
  bekreftKnapp = document.getElementById("bekreftBtn");
  bekreftKnapp.onclick = bekreftet;
}

function bekreftet(){
  visKnapp.disabled = true;
  sendKnapp.disabled = false;
  antPersonVelger.disabled = true;
  antMiddagVelger.disabled = true;
  ordreTekst.innerHTML = "Kontroller navn og adresse. Send bestillingen!";
}

function skrivUtKvittering(){
  var navn = document.getElementById("navnInput").value;
  var adresse = document.getElementById("adresseInput").value;
  var antMiddager = antMiddagVelger.options[antMiddagVelger.selectedIndex].value;
  var antPersoner = antPersonVelger.options[antPersonVelger.selectedIndex].value;
  var kvittering = "";

    kvittering += "Takk for bestillingen " + navn + "!";
    kvittering += "<p>Den sendes til " + adresse + " i løpet av kort tid. ";
    kvittering += "Du vi da motta:";
    kvittering += antMiddager + " middager for " + antPersoner + " personer. ";
    kvittering += "Totalpris: " + beregnPris(antMiddager, antPersoner) + ",-</p>";
    kvittering += "Velkommen tilbake!";

    ordreTekst.innerHTML = "";
    ordreTekst.innerHTML = kvittering;
}

function beregnPris(antMidd, antPers){
  if(antPers >= 5){
    return(antPers * antMidd * 70);
  }
  else{
    return(antPers * antMidd * 80);
  }
}

// Oppgave 3-funksjoner
function lagTabell(){

  var middager = Number(antMiddagVelger2.options[antMiddagVelger2.selectedIndex].value);
  var voksne = Number(antVoksne.options[antVoksne.selectedIndex].value);
  var ungdom = Number(antUngdom.options[antUngdom.selectedIndex].value);
  var barn = Number(antBarn.options[antBarn.selectedIndex].value);

  // Sjekker om uka finnes i tabellen
  console.log(ukeNr.value);
  var uke = Number(ukeNr.value.slice(-2));
  if(typeof fiskeTabell[uke] === "undefined"){
    fiskeTabell[uke]=[];
  }
  fiskeTabell[uke].push([middager,barn,ungdom,voksne]);
}

function visData(){
  var uke = Number(visDataUkeNr.value.slice(-2));
  var ukeTabell = fiskeTabell[uke];
  var utTekst = "<table border='1'><tr><th>Uke</th><th>Middager</th><th>Barn</th><th>Ungdom</th><th>Voksne</th></tr>";
  ukeTabell.forEach(function(ukeTab) {
      utTekst += "<tr><td>" + uke + "</td><td>" + ukeTab[0] + "</td><td>" + ukeTab[1] + "</td><td>" + ukeTab[2] + "</td><td>" + ukeTab[3] + "</td></tr>";
  });
  utTekst += "</table>";
  tabellTekst.innerHTML = utTekst;
}
