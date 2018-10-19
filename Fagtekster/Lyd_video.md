# Lyd

Det finnes [to likeverdige måter](https://wiki.mozilla.org/Audio_Data_API#API_Tutorial) å spille av lyd på nettside. Begge lager et lydobjekt som kan spille av en valgfri lyd.

Du kan bruke audio-taggen i html, sammen med atributter for å få ønsket funksjon. I eksempelet under spilles filen *minLyd.ogg* fra mappen *lyder*. Det vises spillekontroller som volum og pauseknapp på nettsiden, og lyden starter automatisk.

``` html

<audio id="audio" src="lyder/minLyd.ogg" autoplay controls></audio>
```

Du kan også lage et lydelement direkte i JavaScript som i eksempelet under.

``` javascript

var audio = new Audio();
audio.src = "minLyd.ogg";
audio.play();
```
