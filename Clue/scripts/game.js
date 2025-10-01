let tabButton = document.getElementById("ateb");
let tabHeadButton = document.getElementById("ath");
let setupTableButton = document.getElementById("sutb");
let table = document.getElementById("testTable");
let tabHead = document.getElementById("tabHead");
let newHead = document.getElementById("newHead");
let numPlayers = localStorage.numPlayers;
let deckObj = JSON.parse(localStorage.FULLDECK);
let deckBigList = Object.values(deckObj);
let deckList = Object.values(deckObj).flat();
let tp = document.getElementById("testP");

function showNumPlay() {
    if (isNaN(Number(localStorage.numPlayers))) {
        document.getElementById("screenNumPlayers").innerHTML = "Number of players is not set!"
    } else {
        document.getElementById("screenNumPlayers").innerHTML = Number(localStorage.numPlayers)
    }
}

function showHand() {
    if (!(localStorage.hand == null)) {
        document.getElementById("screenHand").innerHTML = localStorage.hand;
    } else {
        document.getElementById("screenHand").innerHTML = "Hand is not set!";
    }
}

function main() {
    showNumPlay()
    showHand()
    setupTableHeader()
}

function addTableElement(name) {
    let te = document.createElement("tr")
    let tt = document.createElement("td")
    tt.innerText = name
    te.appendChild(tt)

    for (let i = 0; i < numPlayers; i++) {
        const tc = document.createElement("td")
        const cb = document.createElement("button")
        cb.innerText = '-'
        // cb.type = "checkbox"
        cb.addEventListener("click", cycleSymb)
        cb.id = name + "_Player_" + i
        tc.appendChild(cb)
        te.appendChild(tc)
    }
    
    table.appendChild(te)
}

function addTextTableHeader() {
    const th = document.createElement("th")
    let nh = newHead.value;
    if (nh == '') {
        alert("Please provide the name of the new Header!")
    } else {
        th.innerText = nh
        tabHead.appendChild(th)
    }
}

function addTableHeader(name) {
    const th = document.createElement("th")
    let nh = name;
    if (nh == '') {
        alert("Please provide the name of the new Header!")
    } else {
        th.innerText = nh
        tabHead.appendChild(th)
    }
}

function addTableElementWithHeader(list, header) {
    const th = document.createElement("th")
    th.innerText = header
    table.appendChild(th)
    list.forEach(addTableElement)
}

function setupTableHeader() {
    for (let i = 0; i < numPlayers; i++) {
        addTableHeader("Player " + i)
    }
}

function setupTable() {
    let heads = Object.keys(deckObj)
    for (let i = 0; i < deckBigList.length; i++) {
        addTableElementWithHeader(deckBigList[i], heads[i])
    }
    // deckBigList.forEach(addTableElementWithHeader)
    // deckList.forEach(addTableElement)
}

function cycleSymb() {
    switch(this.innerText) {
        case "X":
            this.innerText = "O"
            break;
        case "O":
            this.innerText = "/"
            break;
        case "/":
            this.innerText = "X"
            break;
        default:
            this.innerText = "X"
            break;
    }
}

tabButton.addEventListener("click", addTableElement)
tabHeadButton.addEventListener("click", addTextTableHeader)
setupTableButton.addEventListener("click", setupTable)
tp.addEventListener("click", cycleSymb)