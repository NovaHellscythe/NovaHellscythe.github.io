const FULLDECK = JSON.parse(localStorage.FULLDECK)
let selC = document.getElementById("selectContainer")
let genB = document.getElementById("genSelectButton")
let fillB = document.getElementById("fillSelectButton")
let numPlayers = localStorage.numPlayers
let numCards = Math.floor(18 / numPlayers)
let sels = selC.getElementsByTagName("select")
let fullOpts = []
let selValues = []


function setupSelections(){
    for (let i = 0; i < numCards; i++){
        genSelect("select" + i.toString())
    }

    for (let sel in sels){
        if (sel < numPlayers){
            fillSelector(sels[sel])
            sels[sel].selectedIndex = sels[sel].id[sels[sel].id.length - 1]
            selValues.push(sels[sel].value)
        }
        
    }

    
    // document.getElementsByTagName("select")[0].addEventListener("change", selectCard)
    for (let i = 0; i < sels.length; i++){
        fullOpts.push(sels[i].innerHTML)
    }
    // fullOpts = sels[0].innerHTML
}



function selectCard(){
    selValues[this.id[this.id.length - 1]] = this.value

    for (let id = 0; id < sels.length; id++){
        // let id = sels[ind].id[sels[ind].id.length - 1]
        let cur = selValues[id]
        sels[id].innerHTML = fullOpts[id]
        sels[id].selectedIndex = sels[id].namedItem(cur + id).index
        for (let sv in selValues){
            if (sv != id){
                if (sels[id].namedItem(selValues[sv] + id)){
                    // console.log(selValues[sv] + id.toString())
                    
                    sels[id].namedItem(selValues[sv] + id).remove()
                    
                }    
            }
        }
    }

    

    // for (srm in selfRm){
    //     if (sels[id].namedItem(selfRm[srm] + id)){
    //         sels[id].namedItem(selfRm[srm] + id).remove()
    //     }
        
    // }

    
}

function genSelect(id){
    let sel = document.createElement("select")
    sel.id = id
    sel.onmouseover = selectCard
    sel.onchange = selectCard
    selC.appendChild(sel)
}

function fillSelector(sel){
    console.log(sel)
    let l = []
    for (let cat in FULLDECK){
        l = l.concat(FULLDECK[cat])
        // console.log(FULLDECK[cat])
        let optG = document.createElement("optgroup")
        optG.label = cat
        sel.appendChild(optG)
        for (let card in FULLDECK[cat]){
            // console.log(card)
            let opt = document.createElement("option")
            opt.id = FULLDECK[cat][card] + sel.id[sel.id.length-1].toString()
            opt.text = FULLDECK[cat][card]
            optG.appendChild(opt)
        }
    }
    
}

function addOpt(){

    let l = []
    for (let cat in FULLDECK){
        l = l.concat(FULLDECK[cat])
    }

    let firstSel = sels[0]
    if (firstSel == null){
        alert("No Selections available")
        return
    }

    // console.log(typeof(l))
    for (let card in l){
        // console.log(card)
        let opt = document.createElement("option")
        opt.text = l[card]
        firstSel.appendChild(opt)
    }

}


genB.addEventListener("click", function(){genSelect("test")})
fillB.addEventListener("click", addOpt)