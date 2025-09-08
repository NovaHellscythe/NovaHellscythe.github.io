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
    localStorage.comb = JSON.stringify(test);
    document.getElementById("screenTest").innerHTML = JSON.parse(localStorage.comb);
}

function main() {
    showNumPlay()
    test()
}