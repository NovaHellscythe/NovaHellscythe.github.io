function showNumPlay() {
    if (isNaN(Number(localStorage.numPlayers))) {
        document.getElementById("screenNumPlayers").innerHTML = "Number of players is not set!"
    } else {
        document.getElementById("screenNumPlayers").innerHTML = Number(localStorage.numPlayers)
    }
}

function setTest() {
    const test = {
        bloom: "-"
    };
    localStorage.comb = JSON.stringify(test);
}

function showTest() {
    if (!(localStorage.comb == null)) {
        document.getElementById("screenTest").innerHTML = localStorage.comb;
    } else {
        document.getElementById("screenTest").innerHTML = "Comb is not set!";
    }
}

function showDeck() {
    if (!(localStorage.FULLDECK == null)) {
        document.getElementById("screenDeck").innerHTML = localStorage.FULLDECK;
    } else {
        document.getElementById("screenDeck").innerHTML = "FullDeck is not set!";
    }
}

function reset() {
    localStorage.clear();
    showNumPlay();
    showTest();
    showDeck();
}

function main() {
    showNumPlay()
    setTest()
    showTest()
    showDeck()
}