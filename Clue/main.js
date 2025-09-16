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
    if (localStorage.comb) {
        document.getElementById("screenTest").innerHTML = localStorage.comb;
    } else {
        document.getElementById("screenTest").innerHTML = "Comb is not set!";
    }
}

function reset() {
    localStorage.clear();
    showNumPlay();
    showTest();
}

function main() {
    showNumPlay()
    setTest()
    showTest()
}