

// Deklarerer en liste

var minListe = new Array();

minListe[0] = "Kamel";
minListe[1] = "Hund";
minListe[2] = "Katt";
minListe[3] = "Bøffel";
minListe[4] = "Elg";
minListe[5] = "Zebra";
minListe[6] = "Elefant";

console.log(minListe);

// Lese inn inputelementer
var kombo = document.getElementById("komboElement");
var tekstElement = document.getElementById("tekstFelt");

var slettBtn = document.getElementById("sletteKnapp");
var endreBtn = document.getElementById("endreKnapp");
var leggTilBtn = document.getElementById("leggTilKnapp");

// Lyttere
slettBtn.onclick = slettElement;
endreBtn.onclick = endreElement;
leggTilBtn.onclick = leggTilElement;

function slettElement(){
  var slettIndex = kombo.options[kombo.selectedIndex].value;
  minListe.splice(slettIndex,1);
  console.log(minListe);
}

function endreElement(){
  var endreIndex = kombo.options[kombo.selectedIndex].value;
  minListe[endreIndex] = tekstElement.value;
  console.log(minListe);
}

function leggTilElement(){
  var leggTilIndex = kombo.options[kombo.selectedIndex].value;
  var mittDyr = tekstElement.value;
  minListe.splice(leggTilIndex,0,mittDyr);
  console.log(minListe);
}
