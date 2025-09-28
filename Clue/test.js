var t = localStorage.numPlayers

function swapTest() {
    const sc = document.getElementById("screenTestSetup")
    if (sc.innerText == "test") {
        sc.innerText = t;
    } else {
        sc.innerText = "test";
    }
}