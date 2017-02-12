//Globale variabler
var totalbelop=0;

// Leser inn elementer
var belop = document.getElementById("belopInput");
var beregnKnapp = document.getElementById("beregnBtn");
var nullstillknapp = document.getElementById("nullstillBtn");
var kvittering = document.getElementById("kvitteringDiv");

// Lytter
beregnKnapp.onclick = beregn;
nullstillknapp.onclick = nullstill;

//funksjoner

function beregn(){
  totalbelop += Number(belop.value);
  belop.value = "";
  kvittering.innerHTML = "<h3>*** Totalbeløp ***</h3>Du har betalt: " + totalbelop + " kr i bompenger.<br> Av dette er: " + (totalbelop*0.25) + " mva.";
}

function nullstill(){
  totalbelop = 0;
  kvittering.innerHTML = "";
}
