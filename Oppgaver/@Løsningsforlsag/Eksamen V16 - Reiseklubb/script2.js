// jshint esversion: 6

spmTabell = [
    {spm:'Hva betyr ordet where?', alt: ['Hvor', 'Vi er', 'Var', 'Hvorfor'], Fasit: [0]},
    {spm:'Hvilke(t) ord kan legges til her? How are...',alt:['you','John doing?','things','the house','the wife'], Fasit: [0,2]},
    {spm:'<audio src="Vedlegg/Oversetting.mp3" controls autoplay>', alt:['Hei mitt navn er Tom','Jeg er Tom', 'Kjenner du Tom?','Når kommer Tom?'], Fasit:[2]}
];

const spmUt = document.getElementById('spmDiv');
let poeng = 0;
let spmNummer = 0;

// Main

spmUt.innerHTML = deployQuestion(spmNummer);
console.log(poeng);

function deployQuestion(spmNummer){
    let spmString = `
    <h2>${spmTabell[spmNummer].spm}</h2>
    `;
    for (var i = 0; i < spmTabell[spmNummer].alt.length; i++){
        spmString += `
            <input type='radio' class="radioAlts" name="svar">${spmTabell[spmNummer].alt[i]}<br>`;
    }
    spmString += `<input type='button' id='svarBtn' value='Send inn svar' onclick='sjekkSvar(${spmNummer})'>`;
    return spmString;
}

function sjekkSvar(spmNummer){
    const alts = document.querySelectorAll('.radioAlts');
    let svar;
    for(let i = 0; i < alts.length; i++) {
        if(alts[i].checked) svar = i;
    }
    if(spmTabell[spmNummer].Fasit.indexOf(svar) != -1){
        poeng++;
    }
    else{
        poeng--;
    }
    if(spmNummer < (spmTabell.length - 1)){
        spmNummer++;
        spmUt.innerHTML = deployQuestion(spmNummer);
    }
    else oppsummering();
}

function oppsummering(){
    if(poeng == spmTabell.length){
        spmUt.innerHTML = `Kjempefint! Du fikk ${poeng} poeng! Det er alt riktig!`;
    }
    else if(poeng < spmTabell.length && poeng >= 0){
        spmUt.innerHTML = `Du fikk ${poeng} poeng! Sånn passe`;
    }
    else {
        spmUt.innerHTML = `Aj aj aj! Du fikk ${poeng} poeng! Kanskje på tide med et kurs!`;
    }
}