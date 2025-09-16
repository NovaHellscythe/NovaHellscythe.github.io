function setup() {
    var numPlayers = document.getElementById("numPlayers").value;
    var inputRecieved = true;

    if (isNaN(numPlayers) || numPlayers < 2) {
        alert("The number of players must be at least 2");
        inputRecieved = false;
    }

    const FULLDECK = {
        Characters: ["BLOOM", "GLORIA", "PORZ", "GRUEN", "WEISS", "GATOW"],
        Weapons: ["DOLCH", "PISTOLE", "SEIL", "HEIZUNGSROHR", "ROHRZANGE", "LEUCHTER"],
        Locations: ["KUECHE", "MUSIKZIMMER", "ARBEITSZIMMER", "WINTERGARTEN", "BILLIARDZIMMER", "HALLE", "SPEISEZIMMER", "SALON", "BIBLIOTHEK"]
    };

    const test = {
        bloom: "-"
    };

    if (inputRecieved) {
        localStorage.numPlayers = numPlayers;
        localStorage.FULLDECK = JSON.stringify(test)
    }
}