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

function setupDeck() {
    const FULLDECK = {
        Characters: ["BLOOM", "GLORIA", "PORZ", "GRUEN", "WEISS", "GATOW"],
        Weapons: ["DOLCH", "PISTOLE", "SEIL", "HEIZUNGSROHR", "ROHRZANGE", "LEUCHTER"],
        Locations: ["KUECHE", "MUSIKZIMMER", "ARBEITSZIMMER", "WINTERGARTEN", "BILLIARDZIMMER", "HALLE", "SPEISEZIMMER", "SALON", "BIBLIOTHEK"]
    };
    localStorage.FULLDECK = JSON.stringify(FULLDECK);
}

function showAll() {
    setupDeck();
    
    showNumPlay();
    showTest();
    showDeck();
}

function reset() {
    localStorage.clear();
    showAll()
}

function main() {
    setTest()
    showAll()
}

function startGame() {
    if (localStorage.numPlayers != null) {
        location.href = "game.html"
    } else {
        alert("The number of players must not be null!")
    }
}