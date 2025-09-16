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