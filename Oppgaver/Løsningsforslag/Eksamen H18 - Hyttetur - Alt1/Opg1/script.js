/* Laget av Staale Bergersen CC */

window.onload = oppstart();

function oppstart(){
    document.getElementById("knapp").onclick = beregn;
}

function beregn(){
    var antDager = document.getElementById("antdager").value;
    var alder = document.getElementById("alder").value;
    if(isNaN(antDager)||isNaN(alder)){tilbakemelding.innerHTML="Du må skrive inn et tall ikke bokstaver";   }
    if(antDager >7 || antDager <=0 ){tilbakemelding.innerHTML = "Du må skrive inn antall dager fra 0 til 7";    }
    if(alder<0 || antDager >=99 ){tilbakemelding.innerHTML = "Du må skrive inn alder fra 0 til 99";}
    if(alder>0 && alder<=12){var kortpris = 100;}
        else{var kortpris = 200;}
    var pris = antDager*kortpris;
    if((kortpris==100) && (pris>=500)){
        console.log("barn");
        var avslag = pris-500;
        pris = 500;
        tilbakemelding.innerHTML = "Din pris er:"+pris+", og ditt avslag er: " + avslag+".- kroner. ";
    }

    else if((kortpris=200) && (pris>=1000)){
        console.log("voksen");
        var avslag = pris-1000;
        pris = 1000;
        tilbakemelding.innerHTML = "Din pris er:"+pris+", og ditt avslag er: " + avslag+".- kroner. ";
    }
    else{tilbakemelding.innerHTML = " Din pris er"+pris+",- kroner ";} 
}
