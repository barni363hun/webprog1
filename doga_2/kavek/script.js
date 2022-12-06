
var kosarErteke = 0;
var db = {
    "cappuccino":0,
    "espresso":0,
    "latte":0,
    "lungo":0
}

function kosarhozAd(name) {
    if (name == "cappuccino") {
        kosarErteke += 1600;
        db["cappuccino"]++;
    } else if (name == "espresso") {
        kosarErteke += 1500;
        db["espresso"]++;
    } else if (name == "latte") {
        kosarErteke += 2000;
        db["latte"]++;
    } else if (name == "lungo") {
        kosarErteke += 2200;
        db["lungo"]++;

    }
    document.getElementById("cappuccino").innerHTML = db["cappuccino"] + " db"
    document.getElementById("espresso").innerHTML = db["espresso"] + " db"
    document.getElementById("latte").innerHTML = db["latte"] + " db"
    document.getElementById("lungo").innerHTML = db["lungo"] + " db"

    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
}

function kosarbolElvesz(name) {
    if (name == "cappuccino" && db["cappuccino"] >0) {
        kosarErteke -= 1600;
        db["cappuccino"]--;
    } else if (name == "espresso" && db["espresso"] >0) {
        kosarErteke -= 1500;
        db["espresso"]--;
    } else if (name == "latte" && db["latte"] >0) {
        kosarErteke -= 2000;
        db["latte"]--;
    } else if (name == "lungo" && db["lungo"] >0) {
        kosarErteke -= 2200;
        db["lungo"]--;
    }
    if (db[name] == 0) {
        var text = ""
        if (name == "cappuccino") {
            text = "Cappuccino"
        } else if (name == "espresso") {
            text = "Espresso"
        } else if (name == "latte") {
            text = "Latte Macchiato Caramel"
        } else if (name == "lungo") {
            text = "Lungo"
        }
        alert("Minden "+text + " csomagot eltávolított a kosárból.")
    }
    document.getElementById("cappuccino").innerHTML = db["cappuccino"] + " db"
    document.getElementById("espresso").innerHTML = db["espresso"] + " db"
    document.getElementById("latte").innerHTML = db["latte"] + " db"
    document.getElementById("lungo").innerHTML = db["lungo"] + " db"
    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
}
