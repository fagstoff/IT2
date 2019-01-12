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


Mer eksempler her...

## Klasser
Mer om klasser her...