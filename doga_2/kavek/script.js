
var kosarErteke = 0;

function kosarhozAd(name) {
    if (name == "cappuccino") {
        kosarErteke += 1600;
    } else if (name == "espresso") {
        kosarErteke += 1500;
    } else if (name == "latte") {
        kosarErteke += 2000;
    } else if (name == "lungo") {
        kosarErteke += 2200;
    }
    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
    }
    function kosarbolElvesz(name) {
    if (name == "cappuccino" && kosarErteke >= 1600) {
        kosarErteke -= 1600;
    } else if (name == "espresso" && kosarErteke >= 1500) {
        kosarErteke -= 1500;
    } else if (name == "latte" && kosarErteke >= 2000) {
        kosarErteke -= 2000;
    } else if (name == "lungo" && kosarErteke >= 2200) {
        kosarErteke -= 2200;
    }
    document.getElementById("kosarErteke").innerHTML =
        "Kosár értéke: " + kosarErteke + " Ft";
}
