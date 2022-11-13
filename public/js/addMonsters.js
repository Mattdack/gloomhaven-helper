const addMonstersBtn = document.querySelector(`#addMonsters`);
const addCorpseBtn = document.querySelector(`#addLiving-Corpse`);
const addGolemBtn = document.querySelector(`#addStone-Golem`);
const addRaiderBtn = document.querySelector(`#addVermling-Raider`);
const addViperBtn = document.querySelector(`#addGiant-Viper`);
const addSludgeBtn = document.querySelector(`#addBlack-Sludge`);

addMonstersBtn.addEventListener('click', addMonsters);

function addMonsters() {

    if(addCorpseBtn.checked) {
        addCorpse();
    }
    if(addGolemBtn.checked) {
        addGolem();
    }
    if(addRaiderBtn.checked) {
        addRaider();
    }
    if(addViperBtn.checked) {
        addViper();
    }
    if(addSludgeBtn.checked) {
        addSludge();
    }
    if((!addCorpseBtn.checked) && (!addGolemBtn.checked) && (!addRaiderBtn.checked) && (addViperBtn.checked) && (!addSludgeBtn.checked)) {
        alert("You did not select any monsters to add!");
    } else {
        alert("Your monsters have been added.");
    }
}

async function addCorpse() {
    const numCorpses = {numToAdd: parseInt(document.querySelector(`#numLiving-Corpse`).value)}
    console.log(numCorpses);
    const added = await fetch(`/api/monsters/1/encounter`, {
        method: "POST",
        body: JSON.stringify(numCorpses),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Living Corpse added.");
        } else {
            console.log('Living Corpse not added.')
        }
    })
}

async function addGolem() {
    const numGolems = {numToAdd: document.querySelector(`#numStone-Golem`).value}

    const added = await fetch(`/api/monsters/2/encounter`, {
        method: "POST",
        body: JSON.stringify(numGolems),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Stone Golem added.");
        } else {
            console.log('Stone Golem not added.')
        }
    })
}

async function addRaider() {
    const numRaiders = {numToAdd: document.querySelector(`#numVermling-Raider`).value}

    const added = await fetch(`/api/monsters/3/encounter`, {
        method: "POST",
        body: JSON.stringify(numRaiders),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Vermling Raider added.");
        } else {
            console.log('Vermling Raider not added.')
        }
    })
}

async function addViper() {
    const numVipers = {numToAdd: document.querySelector(`#numGiant-Viper`).value}

    const added = await fetch(`/api/monsters/4/encounter`, {
        method: "POST",
        body: JSON.stringify(numVipers),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Giant Viper added.");
        } else {
            console.log('Giant Viper not added.')
        }
    })
}

async function addSludge() {
    const numSludge = {numToAdd: document.querySelector(`#numBlack-Sludge`).value}

    const added = await fetch(`/api/monsters/5/encounter`, {
        method: "POST",
        body: JSON.stringify(numSludge),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Black Sludge added.");
        } else {
            console.log('Black Sludge not added.')
        }
    })
}
