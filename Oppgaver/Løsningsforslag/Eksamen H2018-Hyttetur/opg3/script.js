/* Laget av Staale Bergersen CC */

var ferie = ["juleferien","vinterferien","påskeferien"];

var utleid = new Array();
utleid[0]=["utleid","utleid","ledig"];
utleid[1]=["ledig","ledig","utleid"];
utleid[2]=["utleid","ledig","utleid"];
utleid[3]=["utleid","ledig","utleid"];

var hytter = new Array();
hytter[0]=["Granstua",4,"Høy","Ja","12000"];
hytter[1]=["Granbo",6,"middels","Nei","15000"];
hytter[2]=["Grantoppen",8,"Lav","Nei","16000"];
hytter[3]=["Granhaug",10,"høy","Ja","30000"];

window.onload = oppstart();

function oppstart(){
    document.getElementById("ferie").onchange = ledigehytter;
}

function ledigehytter(){
    var valgtFerie =document.getElementById("ferie").value;
    var utleide = "";
    for (let i = 0; i < utleid.length; i++) {
        if(utleid[i][valgtFerie] =="ledig"){
            utleide += "<input type='checkbox' id="+i+" onclick='bestill("+i+")'>"+ hytter[i][0]+ "<br>";
        }
    document.getElementById("tilbakemelding").innerHTML = "Disse hyttene er ledige i "+ferie[valgtFerie]+".<br>Velg den hytta du vil leie:<br>"+utleide;
    }
}

function bestill(hyttevalg){
    var valgtFerie =document.getElementById("ferie").value;
    utleid[hyttevalg][valgtFerie]="utleid";
    document.getElementById("tilbakemelding").innerHTML="Vi takke for din bestilling av"+hytter[hyttevalg][0]+" i " + ferie[valgtFerie]+" til en pris på "+hytter[hyttevalg][4];
}