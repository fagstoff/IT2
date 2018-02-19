//
// Løsningsforslag til eksamensoppgave H16 - Fra fjord til bord - Oppgave 2 og 3
// Laget av Tom Jarle Christiansen - Creative Commons BY SA - 2018
// jshint esversion: 6


// Globale variabler
const fiskeTabell = [];

// Leser inn elementer

// Oppgave 2
 antMiddagVelger = document.getElementById("antMiddagElement");
 antPersonVelger = document.getElementById("antPersonerElement");
 ordreTekst = document.getElementById("ordreDiv");
 visKnapp = document.getElementById("visBtn");
 sendKnapp = document.getElementById("sendBtn");

// Oppgave 3
 tabellTekst = document.getElementById("tabellDiv");
 ukeNr = document.getElementById("ukeNrElement");
 antMiddagVelger2 = document.getElementById("antMiddagElement2");
 antVoksne = document.getElementById("antVoksneElement");
 antUngdom = document.getElementById("antUngdomElement");
 antBarn = document.getElementById("antBarnElement");
 registrerKnapp = document.getElementById("registrerBtn");

 visDataUkeNr = document.getElementById("visUkeElement");
 visDataKnapp = document.getElementById("visDataBtn");


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
  let antMiddager = antMiddagVelger.options[antMiddagVelger.selectedIndex].value;
  let antPersoner = antPersonVelger.options[antPersonVelger.selectedIndex].value;
  let ordre;
  let bilde;

  if (antMiddager == 2){
    bilde = "krabbesuppe.jpg";
  }
  else {
    bilde = "torsk.jpg";
  }

  ordre = `
    <img class="fiskebilde" src="bilder/${bilde}"><br>
    <h3>-- Handlekurv --</h3>
    <p>Du har bestillt <b>${antMiddager}</b> middager for <b>${antPersoner}</b> personer.</p>
    Totalpris: kr ${beregnPris(antMiddager, antPersoner)},-<br><br>
    <input id="bekreftBtn" type="button" value="Gå videre til kasse">'
  `;

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
  let navn = document.getElementById("navnInput").value;
  let adresse = document.getElementById("adresseInput").value;
  let antMiddager = antMiddagVelger.options[antMiddagVelger.selectedIndex].value;
  let antPersoner = antPersonVelger.options[antPersonVelger.selectedIndex].value;
  let kvittering = "";

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

  let middager = Number(antMiddagVelger2.options[antMiddagVelger2.selectedIndex].value);
  let voksne = Number(antVoksne.options[antVoksne.selectedIndex].value);
  let ungdom = Number(antUngdom.options[antUngdom.selectedIndex].value);
  let barn = Number(antBarn.options[antBarn.selectedIndex].value);

  // Sjekker om uka finnes i tabellen
  console.log(ukeNr.value);
  var uke = Number(ukeNr.value.slice(-2));
  if(typeof fiskeTabell[uke] === "undefined"){
    fiskeTabell[uke]=[];
  }
  fiskeTabell[uke].push([middager,barn,ungdom,voksne]);
}

function visData(){
  let uke = Number(visDataUkeNr.value.slice(-2));
  let ukeTabell = fiskeTabell[uke];
  let utTekst = "<table border='1'><tr><th>Uke</th><th>Middager</th><th>Barn</th><th>Ungdom</th><th>Voksne</th></tr>";
  ukeTabell.forEach(function(ukeTab) {
      utTekst += "<tr><td>" + uke + "</td><td>" + ukeTab[0] + "</td><td>" + ukeTab[1] + "</td><td>" + ukeTab[2] + "</td><td>" + ukeTab[3] + "</td></tr>";
  });
  utTekst += "</table>";
  tabellTekst.innerHTML = utTekst;
}
