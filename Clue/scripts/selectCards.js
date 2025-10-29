import { updateCombByHand } from "./helper.js"

const FULLDECK = JSON.parse(localStorage.FULLDECK)
let selectorDiv = document.getElementById("selectorDiv")
let addCardButton = document.getElementById("bAddCard")
let removeCardButton = document.getElementById("bRemoveCard")
let confirmCardsButton = document.getElementById("bConfirmCards")
let updateCombButton = document.getElementById("updateComb")

setup()

function setup(){
    let newSelector = document.createElement("select")
    for (let category in FULLDECK){
        let optGroup = document.createElement("optgroup")
        optGroup.label = category
        newSelector.appendChild(optGroup)
        for (let card in FULLDECK[category]){
            let option = document.createElement("option")
            option.text = FULLDECK[category][card]
            optGroup.appendChild(option)
        }
    }
    selectorDiv.appendChild(newSelector)
}

function addCard(){
    let newSelector = document.createElement("select")
    for (let category in FULLDECK){
        let optGroup = document.createElement("optgroup")
        optGroup.label = category
        newSelector.appendChild(optGroup)
        for (let card in FULLDECK[category]){
            let option = document.createElement("option")
            option.text = FULLDECK[category][card]
            optGroup.appendChild(option)
        }
    }
    // newSelector.addEventListener("change", confirmCards)
    // newSelector.addEventListener("r")
    selectorDiv.appendChild(newSelector)
    confirmCards()
}

function removeCard(){
    let selectors = selectorDiv.getElementsByTagName("select")
    if (selectors.length > 0){
        selectors[selectors.length-1].remove()
    }
    confirmCards()
}

function confirmCards(){
    const sHand = new Set()
    let lHand = []
    let selectors = selectorDiv.getElementsByTagName("select")
    if (selectors.length > 0){
        for (let i = 0; i < selectors.length; i++) {
            sHand.add(selectors[i].value)
        }
        for (let x of sHand){lHand.push(x)}
        localStorage.hand = JSON.stringify(lHand)
    }
    
    // console.log(sHand)
    // console.log(lHand)
}

// selectorDiv.addEventListener("load", setup)
addCardButton.addEventListener("click", addCard)
removeCardButton.addEventListener("click", removeCard)
confirmCardsButton.addEventListener("click", confirmCards)
updateCombButton.addEventListener("click", updateCombByHand)
selectorDiv.addEventListener("change", confirmCards)