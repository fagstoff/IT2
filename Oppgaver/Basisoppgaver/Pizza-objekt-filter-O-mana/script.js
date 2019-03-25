// Oppgavemal - Trening i bearbeiding av komplekse informasjonsobjekter

class Pizza {
    constructor(id, navn, pris, vegetar, ingredienser, allergener, bilde) {
        this.navn = navn;
        this.pris = pris;
        this.vegetar = vegetar;
        this.ingredienser = ingredienser;
        this.allergener = allergener;
        this.bilde = bilde;
    }
    presentasjon() {
        return `${this.navn} er en utsøkt pizza som er laget på den tradisjonelle måten uten kunstige tilsetninger. Prisen er kr${this.pris[0]} umva for liten, og kr${this.pris[1]} umva for stor pizza.`;
    }
}

let pizzaliste = [];

pizzaliste.push(new Pizza(1, "Margherita", [129, 189], true, ["ost", "tomatsaus"], ["gluten", "egg", "mel"], "margherita.jpg"));
pizzaliste.push(new Pizza(2, "Pepperoni", [139, 199], false, ["Pepperoni", "Ananas", "ost", "tomatsaus"], ["gluten","egg", "mel"], "pepperoni.jpg"));
pizzaliste.push(new Pizza(3, "Skinke", [139, 199], false, ["Skinke", "Ananas", "ost", "tomatsaus"], ["gluten"], "Skinke.jpg"));
pizzaliste.push(new Pizza(4, "Biff", [159, 229], false, ["Marinert biffkjøtt", "Sopp", "ost", "tomatsaus"], ["egg","sopp"], "biff.jpg"));
pizzaliste.push(new Pizza(5, "Kylling", [149, 219], false, ["Marinert kyllingkjøtt", "ost", "tomatsaus"], ["gluten"], "kylling.jpg"));


/*
Oppgaver
1. Skriv ut navn på alle pizzaene i konsollen.
2. SKriv ut en punktliste med navn på alle pizzaer på skjermen.
3. Skriv ut ingrediensene til alle pizzaer som er vegetar
4. Skriv ut navnet på alle pizzaer som ikke er vegetar og koster mindre enn kr140;
5. Skriv ut presentasjonen til biffpizzaen som en paragraftekst. <p>
6. Velg en pizza med et select-element. Den valgte pizzaen skal så presenteres og det skal vises et bilde av den i en div på skjermnen.
7. Legg til løk som ingrediens i biff-pizzaen.
8. Fjern egg som alleregn på Margheritapizzaen
9. Legg til en ny pizza. Hvor lang er nå pizzalisten.
10. Bruk filter for å hente ut en liste med pizzaer som har ananas som ingrediens. Skriv denne ut i konsollen.
*/