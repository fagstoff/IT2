# Document Object Model

**DOM eller [Document Object Model](https://www.w3.org/TR/WD-DOM/introduction.html) er en logisk struktur for å kunne få tilgang til strukturen i et dokument. Dette er ofte HTML-dokumenter,men kan også være andre dokumentetyper**

La oss se på en enkel HTML-kode:

``` html
<html>
    <head>
    </head>
    <body>
        <h1></h1>
        <p></p>
    </body>
</html>


```

Koden i eksempelet over kan representeres som en trestruktur slik som på med bildet under.

![DOM](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Simpe_HTML_page_DOM.svg/390px-Simpe_HTML_page_DOM.svg.png)

Her kan vi se trestrukturen, og hvordan elementene er organisert i forhold til hverandre.

## Aksessere elementer i html-dokumentet

Får å få tak i riktig elementer kan vi bruke mange ulike metoder. Vi tar utgangspunkt i følgende html-dokument:

``` html

<html>
    <head>
    </head>
    <body>
        <h1>Velkommen!</h1>
        <p>Velkommen til dette kurset i JavaScript. Her skal vi lære hvordan vi kan bruke programmering til å løse en rekke problemer.</p>
        <p id="info">HTML ble oppfunnet av Tim Berners-Lee da han jobbet på CERN.</p>
        <p>I dag er HTML en av flere teknologier som gjør at internett fungerer slik vi kjenner det.</p>
    </body>
</html>

```

La oss begynne med å lese inn elementer fra html-koden inn i en variabel. Det finnes flere metoder for å gøre dette.

### Lese inn elementer fra html-dokuemntet

For å få lese inn et eller flere elementer inn i en variabel brukes ofte kommandoene som begynner med`getElementsBy...`. I dette eksempelet skal vi se på to som er mye brukt.

```javascript

const element1 = document.getElementById("info");
const element2 = document.getElementByTagName("p");
```

Den første kommandoen legger elementet med attributten `id="info"` inn i variabelen `element1`. Den andre linja henter inn alle p-elementer i dokumentet, og legger disse i en array med navn `element2`

Variabelen `element1` inneholder nå `<p id="info">HTML ble oppfunnet av Tim Berners-Lee da han jobbet på CERN.</p>`, og `element2` inneholder arrayen som vist i tabellen under.

|index| Innhold                        |
:----:|:------------------------------:|
|**0**|`<p>Velkommen til dette....</p>`|
|**1**|`<p id="info">HTML ble.....</p>`|
|**2**|`<p>I dag er HTML en av....</p>`|

## Lese inn data fra elementer i html-dokumentet

## Skrive til elementer i html-dokumentet
Vi kan bruke lignende teknikker

Lag noen eksempler rundt denne: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples
http://callmenick.com/post/basics-javascript-dom-manipulation
