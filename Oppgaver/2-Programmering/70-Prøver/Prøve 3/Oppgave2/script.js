// Creative Commons - BY - Tom Jarle Christiansen
//Oppgave 1

var tall1 = 8;
var tall2 = 3;

erDelelig(tall1,tall2);



function erDelelig(p1,p2){
  if(p1%p2==0){
    console.log("Delelig!");
  }
  else {
    console.log("Ikke Delelig!");
  }
}
