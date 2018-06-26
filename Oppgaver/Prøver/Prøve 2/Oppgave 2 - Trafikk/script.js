
//Lager liste over lovbrudd

var lovbrudd = new Array();

lovbrudd[0] = ["2002",9631];
lovbrudd[1] = ["2003",8593];
lovbrudd[2] = ["2004",8363];
lovbrudd[3] = ["2005",8128];
lovbrudd[4] = ["2006",8514];
lovbrudd[5] = ["2007",8534];

//Leser inn elementer
var utTabell = document.getElementById("tabellDiv");
var aar1velger = document.getElementById("combo1");
var aar2velger = document.getElementById("combo2");
var infotekst = document.getElementById("infoDiv");

//Tegner tabellen på skjermen
skrivUtTabell();

//Lyttere
aar2velger.onchange = beregn;
//Funksjoner

function skrivUtTabell(){

  var minTabell = "";

  console.log("Test");
  minTabell = "<table><tr><th>År</th><th>Antall</th></tr>";
  for (var i=0;i<lovbrudd.length; i++){
    minTabell += "<tr><td>" + lovbrudd[i][0] + "</td><td>"+ lovbrudd[i][1] + "</td></tr>";
  }
  minTabell += "</table>";
  utTabell.innerHTML = minTabell;
}

function beregn(){
  var aar1 = aar1velger.options[aar1velger.selectedIndex].value;
  var aar2 = aar2velger.options[aar2velger.selectedIndex].value;
  var differanse = lovbrudd[aar2][1] - lovbrudd[aar1][1];
  if(differanse>0){
    infotekst.innerHTML = "Endringen er på: " + differanse + " lovbrudd. Dette er negativ utvikling";
  }
  else {
    {
      infotekst.innerHTML = "Endringen er på: " + differanse + " lovbrudd. Dette er positiv utvikling";
    }
  }

}
