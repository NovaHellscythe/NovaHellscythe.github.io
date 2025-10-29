let FULLDECK = JSON.parse(localStorage.FULLDECK)

export function setupComb(){
    // let Comb = JSON.parse(localStorage.comb)
    const comb = {};
    for (let category in FULLDECK){
        for (let card in FULLDECK[category]){
            // console.log(FULLDECK[category][card])
            comb[FULLDECK[category][card]] = 1
        }
    }
    // Comb = comb
    // console.log(comb)
    localStorage.comb = JSON.stringify(comb)
}

export function updateCombByHand(){
    let Hand = JSON.parse(localStorage.hand)
    setupComb()
    let Comb = JSON.parse(localStorage.comb)
    for (let card in Hand) {
        Comb[Hand[card]] = "-"
    }
    localStorage.comb = JSON.stringify(Comb)
}