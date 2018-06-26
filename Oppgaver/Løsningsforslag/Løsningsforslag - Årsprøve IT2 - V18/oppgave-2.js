//jshint esversion:6
// Løsningsforslag oppgave 2
// CC BY SA - Tom Jarle Christiansen 2018

// Leser inn elementer
const rektangelKnapp = document.querySelector('#btnRektangel');
const sirkelKnapp = document.querySelector('#btnSirkel');
const trekantKnapp = document.querySelector('#btnTrekant');
const app = document.querySelector('#appDiv');

// Lyttere
rektangelKnapp.addEventListener('click', skrivRektangel);
sirkelKnapp.addEventListener('click', skrivSirkel);
trekantKnapp.addEventListener('click', skrivTrekant);

// Funskjoner

function skrivRektangel() {
    app.innerHTML = `
        <input id="breddeInput" type="number" placeholder="Tast inn bredde"><br>
        <input id="lengdeInput" type="number" placeholder="Tast inn lengde"><br>
        <input id="btnBeregn" type="button" value="Beregn areal" onclick="beregnRektangel()">
    `;
}

function skrivSirkel() {
    app.innerHTML = `
        <input id="radiusInput" type="number" placeholder="Tast inn radius">
        <input id="btnBeregn" type="button" value="Beregn areal" onclick="beregnSirkel()">
    `;
}

function skrivTrekant() {
    app.innerHTML = `
        <input id="grunnlinjeInput" type="number" placeholder="Tast inn grunnlinje">
        <input id="høydeInput" type="number" placeholder="Tast inn høyde">
        <input id="btnBeregn" type="button" value="Beregn areal" onclick="beregnTrekant()">
    `;
}

function beregnRektangel() {
    let bredde = document.querySelector('#breddeInput').value;
    let lengde = document.querySelector('#lengdeInput').value;
    app.innerHTML += `
        <br>Arealet til et rektangel med bredde ${bredde} og lengde ${lengde} er ${(bredde * lengde).toFixed(2)}
    `;
}

function beregnSirkel() {
    let radius = document.querySelector('#radiusInput').value;
    app.innerHTML += `
        Arealet til en sirkel med radius ${radius} er ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}
    `;
}

function beregnTrekant() {
    let grunnlinje = document.querySelector('#grunnlinjeInput').value;
    let høyde = document.querySelector('#høydeInput').value;
    app.innerHTML += `
        <br>Arealet til en trekant med grunnlinje ${grunnlinje} og høyde ${høyde} er ${(grunnlinje * høyde * 0.5).toFixed(2)}
    `;
}

