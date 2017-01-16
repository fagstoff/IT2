Løkker
======

**I programmering har vi ofte behov for å gjenta kode mange ganger. For å få til dette bruker man løkker. Løkker har mye til felles med tester, men med den forskjellen at i en løkke gjentas kode intill en betingelse er sann eller usann.**

Det finnes to hovedtyper løkker - for-løkker og while-løkker:

**for** - Gjentar kode et gitt antall ganger
**while** - Gjentar kode sålenge en betingelse er sann

For-løkker
----------

I en for-løkke bestemmer vi hvor mange ganger en kode skal gjentas. Alt dette gjøres i deklarasjonen av løkka.

``` javascript

//Deklarasjon av en for-løkke
// i er variabelen det testes på. i<10 er betingelsen.
// i++ øker verdien til i for hver gang løkka kjøres

for(var i=0; i<10; i++){
    //Kode som gjentas sålenge betingelsen er sann.
    console.log("Verdien til telleren er: " + i);
}
```

While-løkker
------------

En while-løkke har veldig lik funksjonalitet som for-løkker. Forskjellen er at i en while-løkke så må tellevariabelen deklarereres på forhånd, og den må økes eller minkes manuelt inne i koden. Alt dette gjøres i deklarasjonen på en for-løkke. Det finnes også en variant av while-løkker som kalles do-while. Disse fungerer nesten likt som while-løkker, men med den forskjellen at innholdet i løkken kjøres alltid en gang uavhengig om betingelsen er sann eller ikke.

``` javascript

//Deklarasjon av tellervariabel
var i=0;

//Deklarasjon av en while-løkke
while (i<5){
     console.log("Verdien av i er: " + i);
     i++;  //Telleren må økes i koden som gjentas
}

//Deklarasjon av tellevariabel
var i=10;

//Deklarasjon av en do-while-løkke
do
  {
  console.log("Verdien av i er: " +i);
}
while (i<5); //Verdien til i er 10, men koden kjøres allikevel en gang
```
