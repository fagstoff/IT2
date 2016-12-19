// Bilregisterdemo - Tom Jarle Christiansen 2016

// Initiering av listen (Liste hentet fra Thomas sin hotelloppgave)
var bilregister = new Array();

bilregister[0] = {regnummer:"LS83568" , merke: "Volkswagen" , type: "Caravelle" , regaar:2015 , bilde:"bilder/volkswagen.jpg"};
bilregister[1] = {regnummer:"NE10001" , merke:"Ford", type:"Ka" , regaar:2000 , bilde:"bilder/ford.jpg"};
bilregister[2] = {regnummer:"NE10002" , merke:"Ford", type:"Focus" , regaar:2005 , bilde:"bilder/ford.jpg"};
bilregister[3] = {regnummer:"NE10003" , merke:"Ford", type:"Fiesta" , regaar:2010 , bilde:"bilder/ford.jpg"};
bilregister[4] = {regnummer:"NE10004" , merke:"Ford", type:"Granada" , regaar:1978 , bilde:"bilder/ford.jpg"};
bilregister[5] = {regnummer:"NE10005" , merke:"Ford", type:"Scorpio" , regaar:1987 , bilde:"bilder/ford.jpg"};
bilregister[6] = {regnummer:"NE10006" , merke:"Volvo", type:"V70" , regaar:2008 , bilde:"bilder/volvo.jpg"};
bilregister[7] = {regnummer:"NE10007" , merke:"Volvo", type:"XC90" , regaar:2009 , bilde:"bilder/volvo.jpg"};
bilregister[8] = {regnummer:"NE10008" , merke:"Volvo", type:"Sonett" , regaar:1965 , bilde:"bilder/volvo.jpg"};


//Lese inn elementer
bilinfo = document.getElementById("visBil");


//Traverserer lista og skriver ut innhold med bilder
for(var i=0;i<bilregister.length;i++){
  bilinfo.innerHTML += "Bil med regnummer:" + bilregister[i].regnummer + " Er en " + bilregister[i].merke + " " + bilregister[i].type + "<img src='" + bilregister[i].bilde + "' width='50px'><br>";
}
