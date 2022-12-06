
var kosarErteke = 0;
var db = {
    "cappuccino":0,
    "espresso":0,
    "latte":0,
    "lungo":0
}

var raktar = {
    "cappuccino":1,
    "espresso":5,
    "latte":7,
    "lungo":3
}


function kosarhozAd(name) {
    
    if (raktar[name] == 0) {
        alert("A termék elfogyott.")
    }
    if (name == "cappuccino" && raktar[name]>0) {
        kosarErteke += 1600;
        db["cappuccino"]++;
        raktar["cappuccino"]--;
    } else if (name == "espresso"&& raktar[name]>0) {
        kosarErteke += 1500;
        db["espresso"]++;
        raktar["espresso"]--;
    } else if (name == "latte"&& raktar[name]>0) {
        kosarErteke += 2000;
        db["latte"]++;
        raktar["latte"]--;
    } else if (name == "lungo"&& raktar[name]>0) {
        kosarErteke += 2200;
        db["lungo"]++;
        raktar["lungo"]--;
    }


    document.getElementById("cappuccino").innerHTML = db["cappuccino"] + " db"
    document.getElementById("espresso").innerHTML = db["espresso"] + " db"
    document.getElementById("latte").innerHTML = db["latte"] + " db"
    document.getElementById("lungo").innerHTML = db["lungo"] + " db"
    document.getElementById("cappuccino2").innerHTML = raktar["cappuccino"] + " db"
    document.getElementById("espresso2").innerHTML = raktar["espresso"] + " db"
    document.getElementById("latte2").innerHTML = raktar["latte"] + " db"
    document.getElementById("lungo2").innerHTML = raktar["lungo"] + " db"

    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
}

function kosarbolElvesz(name) {
    if (name == "cappuccino" && db["cappuccino"] >0) {
        kosarErteke -= 1600;
        db["cappuccino"]--;
        raktar[name]++;
    } else if (name == "espresso" && db["espresso"] >0) {
        kosarErteke -= 1500;
        db["espresso"]--;
        raktar[name]++;
    } else if (name == "latte" && db["latte"] >0) {
        kosarErteke -= 2000;
        db["latte"]--;
        raktar[name]++;
    } else if (name == "lungo" && db["lungo"] >0) {
        kosarErteke -= 2200;
        db["lungo"]--;
        raktar[name]++;
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
    document.getElementById("cappuccino2").innerHTML = raktar["cappuccino"] + " db"
    document.getElementById("espresso2").innerHTML = raktar["espresso"] + " db"
    document.getElementById("latte2").innerHTML = raktar["latte"] + " db"
    document.getElementById("lungo2").innerHTML = raktar["lungo"] + " db"
    
    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
}
kosarhozAd("asd")
