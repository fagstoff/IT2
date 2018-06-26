// jshint esversion: 6

const bilder = document.querySelectorAll('.bildemeny');
const media = document.querySelector('.mediaDiv');

console.log(bilder);

bilder.forEach( function(element) {
    //console.log(e.dataset.id);
    element.addEventListener('mouseover', function() {
        console.log(this.dataset.id);
        this.style.filter= 'grayscale(0%)';
    });
    element.addEventListener('mouseout', function() {
        console.log(this.dataset.id);
        this.style.filter= 'grayscale(100%) blur(2px)';
    });
    element.addEventListener('click', function() {
        if (this.dataset.id == 'first'){
            media.innerHTML = '<img id="imgSpawn" src="Vedlegg/Parken_Sommerpalasset_St_Petersburg.jpg" alt="Oooops" data-id="first">';
            const bildeSpawn = document.querySelector('#imgSpawn');
            bildeSpawn.addEventListener('click', function() {
                this.parentNode.removeChild(this);
            });
        }
        else if (this.dataset.id == 'second'){
            console.log("Vis film");
            media.innerHTML = `
            <video id="videoSpawn" src="Vedlegg/RomaVideo.mp4" controls autoplay>
            </video>
            `;
            const filmSpawn = document.querySelector('#videoSpawn');
            filmSpawn.addEventListener('click', function() {
                this.parentNode.removeChild(this);
            });
        }
        else if (this.dataset.id == 'third'){
            media.innerHTML = `
                <h2>Hvilket bygg ser du på bildet?</h2>
                <input type="text" placeholder='Svar'>
                <input type="button" value="Svar">
                <img class='bildeOppgave' src="Vedlegg/world_trade_center2.jpg" alt="Oooops" data-id='third'>
                <a href='oppgave2.html'>Gå til språktesten</a>
            `;
        }
    });
});