Tegning med canvas
====================

Ved å bruke taggen canvas kan du bruke en rekke kommandoer til å tegne og skrive på HTML-siden.

``` html

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
	<canvas id="minCanvas" width="200" height="200"></canvas>
</body>
</html>
```

``` javascript

var mineData = [2,31,39,67,83,98];

var c = document.getElementById("minCanvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "#FF0000";

for(var i=0;i<mineData.length;i++){
	ctx.fillRect((i*30),200,20,-2*(mineData[i]));
}
```


Animasjon med GSAP
------------------

Det finnes flere gode biblioteker for å lage animasjoner med JavaScript. Et av disse er GSAP (GreenSockAnimationPlatform) som gjør det mulig å lage flere typer animasjoner med enkle kommandoer. For å komme i gang må du inkludere filen TweenMax.min.js html-dokumentet, på samme måte som du lenker til en ekstern javascriptfil. Du kan enten laste ned filen på din egen maskin, eller du kan lenke til den direkte ved å legge inn følgende kode i HTML-dokumentet:

``` html

<!--CDN link for  TweenMax-->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```

Du har nå tilgang til flere nye kommandoer som er spesiallaget for å enkelt kunne animere ved hjelp av CSS.

``` html
<!DOCTYPE html>
<html>
<head>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.11.7/TweenMax.min.js"></script>
  <meta charset="utf-8">
  <title>Animasjon med GSAP</title>
</head>
<body>
	<div id="minDiv"></div>
</body>
</html>
```

``` css
#minDiv{
	width: 50px;
	height: 50px;
	background-color: red;
	border: 5px black solid;
	position: absolute;
	top: 50px;
	left: 0px;
}
```

``` javascript
//Eksempel på GSAP-animasjon
TweenMax.to(minDiv,2,{rotation: 360, x: 100});
```

TweenMax.to betyr at vi skal animere til et nytt sted
minDiv er id til diven som skal animeres
2 er varigheten til animasjonen
Koden mellom { } er CSS-koder
rotation: 360 betyr at diven skal roteres 360 grader
x:100 betyr at diven skal flyttes 100 piksler mot høyre.
