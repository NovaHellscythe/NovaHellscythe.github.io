const FULLDECK = JSON.parse(localStorage.FULLDECK)

function setupNumPlayers() {
    let numPlayers = document.getElementById("numPlayers").value;
    let inputRecieved = true;

    if (isNaN(numPlayers) || numPlayers < 2) {
        alert("The number of players must be at least 2");
        inputRecieved = false;
    }

    if (inputRecieved) {
        localStorage.numPlayers = numPlayers;
    }
}

function setupHand() {
    let input = document.getElementById("hand").value;
    let inputRecieved = true;

    let hand = input.split(",").map(e => {return e.trim().toUpperCase()});

    if (!isValidHand(hand)) {
        alert("Please provide a valid Hand (Card1, Card2,...)!");
        inputRecieved = false;
    }

    if (inputRecieved) {
        localStorage.hand = JSON.stringify(hand);
    }
}

function submit() {
    if ((localStorage.numPlayers != null) && (localStorage.hand != null)) {
        location.href = "index.html"
    } else {
        alert("Please finish setup!")
    }
}

function isValidHand(hand) {
    document.getElementById("screenHand").innerText = hand
    let valid = true;
    hand.forEach(element => {
        if (!isValidCard(element)) {
            valid = false;
        }
    });
    return valid;
}

function isValidCard(card) {
    return ((FULLDECK.Characters.indexOf(card) > -1) || (FULLDECK.Weapons.indexOf(card)  > -1) || (FULLDECK.Characters.indexOf(card) > -1))
}