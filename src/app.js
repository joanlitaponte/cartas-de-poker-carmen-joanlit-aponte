window.onload = function() {

  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let palo = palos[Math.floor(Math.random() * palos.length)];
  let numero = numeros[Math.floor(Math.random() * numeros.length)];

  document.getElementById("palo-arriba").innerHTML = palo;
  document.getElementById("palo-abajo").innerHTML = palo;
  document.getElementById("numero").innerHTML = numero;

  let carta = document.getElementById("carta");

  if (palo === "♥") {
    carta.className = "card heart";
  } else if (palo === "♦") {
    carta.className = "card diamond";
  } else if (palo === "♠") {
    carta.className = "card spade";
  } else {
    carta.className = "card club";
  }

};