function showNumPlay() {
    if (isNaN(Number(localStorage.numPlayers))) {
        document.getElementById("screenNumPlayers").innerHTML = "Number of players is not set!"
    } else {
        document.getElementById("screenNumPlayers").innerHTML = Number(localStorage.numPlayers)
    }
}

function showHand() {
    if (!(localStorage.hand == null)) {
        document.getElementById("screenHand").innerHTML = localStorage.hand;
    } else {
        document.getElementById("screenHand").innerHTML = "Hand is not set!";
    }
}

function main() {
    showNumPlay()
    showHand()
}