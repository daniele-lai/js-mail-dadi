var nome = prompt("Qual è la tua mail?");

var lista = ["mario.rossi@gmail.com", "franco.bianchi@libero.it", "pippo@alice.com", "pluto@hotmail.com"];

var emailValida;

for (var i = 0; i < lista.length; i++) {
    if (nome == lista[i]) {
      emailValida = nome;
    }
}

if (emailValida ==nome) {
  document.getElementById('buttafuori').innerHTML="Sei dentro";
} else {
  document.getElementById('buttafuori').innerHTML="Sei fuori";

}
