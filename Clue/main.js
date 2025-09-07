function main() {
    if (isNaN(Number(localStorage.numPlayers))) {
        alert("Number of players is not defined")
    } else {
        document.getElementById("screenNumPlayers").innerHTML = Number(localStorage.numPlayers)
    }
}