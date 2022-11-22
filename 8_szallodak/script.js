"use strict";

var dbs = [0, 0, 0, 0];
var cart = 0;
const money = 500000;
function t(event) {
  const cn = event.target.className;
  const type = String(cn).charAt(3);
  const num = String(cn).charAt(2);
  const db = document.getElementsByClassName("db" + num)[0];
  const numi = Number(num) - 1;
  if (type == "p") {
    //console.log("+");

    dbs[numi]++;
  } else if (type == "m") {
    //console.log("-");
    if (dbs[numi] != 0) dbs[numi]--;
  }
  //console.log(dbs[numi]);
  db.innerHTML = dbs[numi] + " db";
  const c_cart = document.getElementsByClassName("cart")[0];

  var cost = 0;

  cost += dbs[0] * 110000;
  cost += dbs[1] * 279000;
  cost += dbs[2] * 169000;
  cost += dbs[3] * 242000;

  if (cost > money) {
    alert("keret túllépve!");
  }

  c_cart.innerHTML = "A kosár értéke: " + cost + " Ft";
  //console.log(c_cart);
}
