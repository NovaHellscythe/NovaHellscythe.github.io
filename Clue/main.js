function showNumPlay() {
    if (isNaN(Number(localStorage.numPlayers))) {
        document.getElementById("screenNumPlayers").innerHTML = "Number of players is not set!"
    } else {
        document.getElementById("screenNumPlayers").innerHTML = Number(localStorage.numPlayers)
    }
}

function test() {
    const test = {
        bloom: "-"
    };
    localStorage.comb = test;
    document.getElementById("screenTest").innerHTML = localStorage.comb;
}

function main() {
    showNumPlay()
    test()
}