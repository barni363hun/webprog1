function Beker() {
  var n = 5;
  var szam;
  var osszeg = 0;
  var szamokTomb = [];
  for (var i = 0; i < n; i++) {
    szam = prompt("Add meg a" + (i + 1) + ". számot: ") * 1;
    szamokTomb.push(szam);
    console.log(szam);
  }
  var j = 0;
  while (j < n) {
    osszeg += szamokTomb[j];
    j++;
  }
  document.getElementById("eredmeny").innerHTML = osszeg;
}
var kosarErteke = 0;

function kosarhozAd(name) {
  if (name == "solo") {
    kosarErteke += 3000;
  } else if (name == "alien") {
    kosarErteke += 2000;
  } else if (name == "predator") {
    kosarErteke += 4000;
  } else if (name == "einstein") {
    kosarErteke += 5000;
  }
  document.getElementById("kosarErteke").innerHTML =
    "Kosár értéke: " + kosarErteke + " Ft";
}
function kosarbolElvesz(name) {
  if (name == "solo" && kosarErteke >= 3000) {
    kosarErteke -= 3000;
  } else if (name == "alien" && kosarErteke >= 2000) {
    kosarErteke -= 2000;
  } else if (name == "predator" && kosarErteke >= 4000) {
    kosarErteke -= 4000;
  } else if (name == "einstein" && kosarErteke >= 5000) {
    kosarErteke -= 5000;
  }
  document.getElementById("kosarErteke").innerHTML =
    "Kosár értéke: " + kosarErteke + " Ft";
}
