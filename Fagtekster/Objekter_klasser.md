# Objekter og klasser

I programmering er det ofte nyttig å lagre informasjon som hører naturlig sammen i et objekt. Et består av en eller flere nøkkel/verdi-par. I eksempelet under er fornavn nøkkel, og "Classico" verdien. Disse er knyttet sammen ved at nøkkelen identifiserer verdien.

```javascript
let pizza = {
    fornavn: "Classico",
    ingredienser: ["Ost", "Skinke", "Tomatsaus"],
    pris: 237
};
```

Man kan henter ut informasjon fra objektet på følgende måte:

```javascript
pizza.ingredienser[2]; // "Tomatsaus"
```

Man kan også lage funksjoner inne i et objekt. Det kalles en metode. Legg merke til ```this``` som henviser til "dette objektet".

```javascript
let person = {
    fornavn: "Ole-Johan",
    etternavn: "Dahl",
    fulltNavn: function() {
        return this.fornavn + " " + this.etternavn;
    }
};

person.fulltNavn(); // "Ole-Johan Dahl"
```


## Klasser

Veldig ofte ønsker man å lage flere objekter. Da kan det være nyttig å lage seg en oppskrift på hvordan objektet skal se ut og hvilke egenskaper det skal ha. For å få til dette kan vi lage en *klasse*

Legg merke til skrivemåten med stor boksatv i klassenavnet. Dette er vanlig skrivemåte når man definerer klasser.

```javascript

// Definerer klassen
class Pizza {
  constructor(navn, ingredienser, pris) {
    this.navn = navn;
    this.ingredienser = ingredienser;
    this.pris = pris;
  }
    // En metode som beregner rabattert pris.
    pris_rabatt() {
    return this.pris * 0.90;
  }
}

// Lager to pizzaobjekter basert på klassen Pizza
let p1 = new Pizza("Veggis", ["Tomatsaus","Ost"] ,179);
let p2 = new Pizza("Biffen", ["Biff","Tomatsaus","Løk","Ost"] ,229);

```

