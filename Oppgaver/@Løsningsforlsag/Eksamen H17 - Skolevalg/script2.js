// jshint esversion:6
// Løsningsforslag - Eksamen H17 - Tom Jarle Christiansen V18


// Henter elementer

const partiprosenter = document.querySelectorAll('.innprosent');
const blokkbb = document.querySelectorAll('.bb');
const blokkrg = document.querySelectorAll('.rg');
const beregnBtn = document.querySelector('#beregnKnapp');
const resultat = document.querySelector('.resultatdiv');
const soylebb = document.querySelector('.soyle_bb');
const soylerg = document.querySelector('.soyle_rg');

console.log(blokkbb);

// Lyttere

beregnBtn.addEventListener('click', beregnBlokk);

// Funkjsoner

function beregnBlokk(){

    let blokk_bb = 0;
    let blokk_rg = 0;
    let alle = 0;
    let tekst = '';

    for (const verdi of partiprosenter) {
        alle += Number(verdi.value);
    }

    for (const verdi of blokkbb) {
        blokk_bb += Number(verdi.value);
    }

    for (const verdi of blokkrg) {
        blokk_rg += Number(verdi.value);
    }

    if (blokk_rg >= blokk_bb){
        tekst = `
        Rødgønn blokk: ${blokk_rg} og Blå-Blå blokk: ${blokk_bb}<br>
        De Rød-Grønne leder med ${blokk_rg - blokk_bb} prosentpoeng<br>
        Det ligger an til en Rød-Grønn regjering.
        `;
    }
    else {
    tekst = `
    Rødgønn blokk: ${blokk_rg} og Blå-Blå blokk: ${blokk_bb}<br>
    De Blå-blå leder med ${blokk_bb - blokk_rg} prosentpoeng<br>
    Det ligger an til en Blå-blå regjering.
    `;
    }

    resultat.innerHTML = tekst;
    soylebb.style.width = `${blokk_bb}px`;
    soylerg.style.width = `${blokk_rg}px`;
}