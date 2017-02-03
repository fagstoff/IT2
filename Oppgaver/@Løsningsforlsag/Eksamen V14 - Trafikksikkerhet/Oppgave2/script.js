var lovbrudd = new Array();

lovbrudd[0] = [2002,2003,2004,2005,2006,2007];
lovbrudd[1] = [9631,8593,8363,8128,8512,8534];
lovbrudd[2] = [9863,12217,14920,14929,15425,18010];

function beregnDiff(){

	var diffTekst = ""
	var valgboks1 = document.getElementById("comboAar1");
	var valgboks2 = document.getElementById("comboAar2");
	var utTekst = document.getElementById("utData");

	var aar1 = valgboks1.options[valgboks1.selectedIndex].value;
	var aar2 = valgboks2.options[valgboks2.selectedIndex].value;

	var diff = lovbrudd[1][aar1] - lovbrudd[1][aar2];

	if(diff>=0) diffTekst = "positiv";
	else diffTekst = "negativ";

	utTekst.innerHTML = "Utviklingen i promillekjørere fra år " + lovbrudd[0][aar1] + " til " + lovbrudd[0][aar2] + " er " + diffTekst;
}


function tegnDiagram(){

	var valgboks3 = document.getElementById("comboCrime");
	var crime = valgboks3.options[valgboks3.selectedIndex].value;
	var skala=0;

	if(crime == 1) skala = 35;
	else skala = 62;

	var c = document.getElementById("minCanvas");
	var ctx = c.getContext("2d");


	ctx.clearRect(0,0,300,300);
	ctx.fillStyle = "#0000ff"

	for(var i=0;i<6;i++){
		ctx.fillRect(i*50,300,40,-(lovbrudd[crime][i]/skala));
	}




}




