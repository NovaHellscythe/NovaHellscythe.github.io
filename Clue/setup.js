function setupNumPlayers() {
    var numPlayers = document.getElementById("numPlayers").value;
    var inputRecieved = true;

    if (isNaN(numPlayers) || numPlayers < 2) {
        alert("The number of players must be at least 2");
        inputRecieved = false;
    }

    if (inputRecieved) {
        localStorage.numPlayers = numPlayers;
    }
}

function setupDeck() {
    const FULLDECK = {
        Characters: ["BLOOM", "GLORIA", "PORZ", "GRUEN", "WEISS", "GATOW"],
        Weapons: ["DOLCH", "PISTOLE", "SEIL", "HEIZUNGSROHR", "ROHRZANGE", "LEUCHTER"],
        Locations: ["KUECHE", "MUSIKZIMMER", "ARBEITSZIMMER", "WINTERGARTEN", "BILLIARDZIMMER", "HALLE", "SPEISEZIMMER", "SALON", "BIBLIOTHEK"]
    };
    localStorage.FULLDECK = JSON.stringify(test)
}