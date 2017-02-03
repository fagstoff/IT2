Lyd
===

For å

Det finnes [to likeverdige måter](https://wiki.mozilla.org/Audio_Data_API#API_Tutorial) å spille av lyd på. Metodene er likeverdige, og lager begge et lydobjekt som kan spille av lyd.

Metode 1 er å bruke audio-taggen i html, og bruke atributter for å få ønsket funksjon. I eksempelet under spilles filen *song.ogg* fra mappen *lyder*. Det vises spillekontroller som volum og pauseknapp, og lyden starter automatisk.
``` html

<audio id="audio" src="lyder/song.ogg" autoplay controls></audio>
```

Du kan også lage et lydelement direkte i JavaScript som i eksempelet under.

``` javascript

var audio = new Audio();
audio.src = "song.ogg";
audio.play();
```
