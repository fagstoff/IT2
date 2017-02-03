// Creative Commons - BY - Tom Jarle Christiansen - 2017


var lovbrudd = new Array();

lovbrudd[0] = {aar: 2008, promille: 8560, fart: 15909};
lovbrudd[1] = {aar: 2009, promille: 8146, fart: 14197};
lovbrudd[2] = {aar: 2010, promille: 8241, fart: 13276};
lovbrudd[3] = {aar: 2011, promille: 8019, fart: 11158};
lovbrudd[4] = {aar: 2012, promille: 9759, fart: 12264};


function skrivUt(){

	var tabell = document.getElementById("tabellDiv");

	tabell.innerHTML = "<br><br>";

	for(var i=0;i<lovbrudd.length;i++){
		tabell.innerHTML += "I " + lovbrudd[i].aar + " var det " + lovbrudd[i].promille + " promillekjørere og " + lovbrudd[i].fart + " fartsoverskridelser. <input type='button' value='Slett' onclick='slettData("+i+")'><br>";
	}
}

function slettData(linjeNr){
	lovbrudd[linjeNr].promille = "Ingen data";
	lovbrudd[linjeNr].fart = "Ingen data";
	skrivUt();
}

function rediger(){

	var aar = document.getElementById("aarCombo");
	var valgtAar = aar.options[aar.selectedIndex].value;
	var promilleTall = document.getElementById("innPromille").value;
	var fartTall = document.getElementById("innFart").value;

	//lovbrudd[valgtAar].aar = valgtAar;
	lovbrudd[valgtAar].promille = promilleTall;
	lovbrudd[valgtAar].fart = fartTall;

	skrivUt();
}
