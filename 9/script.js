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
