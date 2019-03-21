// Løsningsforslag - Oppgave 1 - Eksmane IT2 H18
// CC BY SA - Tom Jarle Christiansen - 2019



// Leser inn elementer
let voksen = document.querySelector("#voksenRadio");
let antDager = document.querySelector("#antDagerElement");
let bekreftKnapp = document.querySelector("#bekreftElement");
let ut = document.querySelector("#utElement");

// Lytter
bekreftKnapp.addEventListener('click', bekreftKjop);

// Funksjoner

function bekreftKjop(){
    let pris = 0;
    let dager = antDager.selectedIndex;
    if(voksen.checked){
        pris = 200 * dager;
        if(pris > 1000) {
            ut.innerHTML = `Voksen: Du har bestillt heiskort for ${dager} dager.<br>Prisen er kr1000. Du får ${pris - 1000} i rabatt`;
        }
        else {
            ut.innerHTML = `Voksen: Du har bestillt heiskort for ${dager} dager.<br>Prisen er kr${pris}.`;
        }    
    }
    else {
        pris = 100 * dager;
        if(pris > 500) {
            ut.innerHTML = `Voksen: Du har bestillt heiskort for ${dager} dager.<br>Prisen er kr500. Du får ${pris - 500} i rabatt`;
        }
        else {
            ut.innerHTML = `Barn: Du har bestillt heiskort for ${dager} dager.<br>Prisen er kr${pris}`; 
        } 
    }
}