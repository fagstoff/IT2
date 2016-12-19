// Laget av Tom Jarle Christiansen - 2016

var minListe = new Array();

minListe[0] = "FA";
minListe[1] = "KB";
minListe[2] = "OC";
minListe[3] = "HD";
minListe[4] = "GE";
minListe[5] = "IF";
minListe[6] = "AG";
minListe[7] = "NH";
minListe[8] = "LI";
minListe[9] = "JJ";
minListe[10] = "BK";
minListe[11] = "ML";
minListe[12] = "EM";
minListe[13] = "DN";
minListe[14] = "CO";
minListe[15] = "PP";

// Oppgave 1
for(var i=0;i<minListe.length;i++){
  console.log(minListe[i]);
}

// Oppgave 2
minListe.sort();
for(var i=0;i<minListe.length;i++){
  console.log(minListe[i]);
}

// Oppgave 3
for(var i=0;i<minListe.length;i=i+2){
  console.log(minListe[i]);
}

// Oppgave 4

minListe.splice(10,2,"Ny1","Ny2");

for(var i=0;i<minListe.length;i++){
  console.log(minListe[i]);
}
