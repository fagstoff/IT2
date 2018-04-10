//jshint esversion:6

class Rektangel {
    constructor(b, l){
        this.bredde = b;
        this.lengde = l;
    }
    areal() {
        return this.bredde * this.lengde;
    }

    hilsen() {
        console.log(`Heisann! Jeg er et rektangel med bredde ${this.bredde} og lengde ${this.lengde}. Mitt areal er ${this.areal()}.`);
    }
}

// Lager objektene r1, r2 og r3 fra klassen Rektangel
let r1 = new Rektangel(10, 30);
let r2 = new Rektangel(5, 7);
let r3 = new Rektangel(4, 4);

/*let rektangler = [
    {bredde: 10, lengde: 30},
    {bredde: 5, lengde: 7},
    {bredde: 4, lengde: 4},
];*/