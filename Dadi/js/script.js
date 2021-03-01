//Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var player;
var computer;
alert("Tira i dadi");
player= Math.floor(Math.random()*6) + 1;
alert("Il tuo numero è il " + player);
alert("Attendi, ora è il turno del computer");
computer= Math.floor(Math.random()*6) + 1;

//Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (player < computer) {
  alert("Hai perso, il computer ha preso " + computer);
} else if (player == computer) {
  alert("Parità, anche il computer ha preso " + computer);
} else {
  alert("Hai vinto, il computer ha preso " + computer);
}
