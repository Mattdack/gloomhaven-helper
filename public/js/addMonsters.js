const addMonstersBtn = document.querySelector(`#addMonsters`);
const addCorpseBtn = document.querySelector(`#addLiving-Corpse`);
const addDemonBtn = document.querySelector(`#addChaos-Demon`);
const addGolemBtn = document.querySelector(`#addStone-Golem`);
const addRaiderBtn = document.querySelector(`#addVermling-Raider`);
const addViperBtn = document.querySelector(`#addGiant-Viper`);
const addSludgeBtn = document.querySelector(`#addBlack-Sludge`);
const addSpiritBtn = document.querySelector(`#addLiving-Spirit`);
const addBloodImpBtn = document.querySelector(`#addBlood-Imp`);
const addBlackImpBtn = document.querySelector(`#addBlack-Imp`);
const addScoutBtn = document.querySelector(`#addVermling-Scout`);
const addRatBtn = document.querySelector(`#addRat-Monstrosity`);
const addBloodBtn = document.querySelector(`#addBlood-Monstrosity`);
const addZealotBtn = document.querySelector(`#addZealot`);
let atLeastOne = false;

addMonstersBtn.addEventListener('click', addMonsters);

async function addMonsters(event) {
    event.preventDefault();
    if(addCorpseBtn.checked) {
        await addCorpse();
        atLeastOne = true;
        console.log("Corpse")
    }
    if(addGolemBtn.checked) {
        await addGolem();
        atLeastOne = true;
        console.log("Golem")
    }
    if(addRaiderBtn.checked) {
        await addRaider();
        atLeastOne = true;
        console.log("Raider")
    }
    if(addViperBtn.checked) {
        await addViper();
        atLeastOne = true;
        console.log("Viper")
    }
    if(addSludgeBtn.checked) {
        await addSludge();
        atLeastOne = true;
        console.log("Sludge")
    }
    if(addSpiritBtn.checked) {
        await addSpirit();
        atLeastOne = true;
        console.log("Spirit")
    }
    if(addBloodImpBtn.checked) {
        await addBloodImp();
        atLeastOne = true;
        console.log("BloodImp")
    }
    if(addBlackImpBtn.checked) {
        await addBlackImp();
        atLeastOne = true;
        console.log("BlackImp")
    }
    if(addScoutBtn.checked) {
        await addScout();
        atLeastOne = true;
        console.log("Scout")
    }
    if(addRatBtn.checked) {
        await addRat();
        atLeastOne = true;
        console.log("Rat")
    }
    if(addBloodBtn.checked) {
        await addBlood();
        atLeastOne = true;
        console.log("Blood Monster")
    }
    if(addZealotBtn.checked) {
        await addZealot();
        atLeastOne = true;
        console.log("Zealot")
    }
    if(addDemonBtn.checked) {
        await addDemon();
        atLeastOne = true;
        console.log("Demon")
    }
    if(!atLeastOne) {
        alert("You did not select any monsters to add!");
    } else {
        console.log("All Monsters added.");
    }
}

async function addCorpse() {
    const numCorpses = {
        numToAdd: parseInt(document.querySelector(`#numLiving-Corpse`).value), 
        monsterId: parseInt(addCorpseBtn.getAttribute("data-monsterId")),
        monsterName: addCorpseBtn.getAttribute('data-monsterName'),
        isElite: (document.querySelector('#Living-CorpseElite').checked) ? true:false,
        monsterLevel: parseInt(document.querySelector(`#Living-CorpseLevel`).value),
    }
    console.log(numCorpses);
    await fetch(`/api/addedMonsters`, {
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
    }).catch(err=> {
        console.log(err);
    })
}

async function addGolem() {
    const numGolems = {numToAdd: parseInt(document.querySelector(`#numStone-Golem`).value), monsterId: parseInt(addGolemBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
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
    }).catch(err=> {
        console.log(err);
    })
}

async function addRaider() {
    const numRaiders = {numToAdd: parseInt(document.querySelector(`#numVermling-Raider`).value), monsterId: parseInt(addRaiderBtn.getAttribute("data-monsterId"))}

    await fetch(`/api/addedMonsters`, {
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
    }).catch(err=> {
        console.log(err);
    })
}

async function addViper() {
    const numVipers = {numToAdd: parseInt(document.querySelector(`#numGiant-Viper`).value), monsterId: parseInt(addViperBtn.getAttribute("data-monsterId"))}

    await fetch(`/api/addedMonsters`, {
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
    }).catch(err=> {
        console.log(err);
    })
}

async function addSludge() {
    const numSludge = {numToAdd: parseInt(document.querySelector(`#numBlack-Sludge`).value), monsterId: parseInt(addSludgeBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
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
    }).catch(err=> {
        console.log(err);
    })
}

async function addSpirit() {
    const numSpirit = {numToAdd: parseInt(document.querySelector(`#numLiving-Spirit`).value), monsterId: parseInt(addSpiritBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numSpirit),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Living Spirit added.");
        } else {
            console.log('Living Spirit not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addBloodImp() {
    const numImp = {numToAdd: parseInt(document.querySelector(`#numBlood-Imp`).value), monsterId: parseInt(addBloodImpBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numImp),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Blood Imp added.");
        } else {
            console.log('Blood Imp not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addBlackImp() {
    const numImp = {numToAdd: parseInt(document.querySelector(`#numBlack-Imp`).value), monsterId: parseInt(addBlackImpBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numImp),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Black Imp added.");
        } else {
            console.log('Black Imp not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addScout() {
    const numScout = {numToAdd: parseInt(document.querySelector(`#numVermling-Scout`).value), monsterId: parseInt(addScoutBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numScout),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Vermling Scout added.");
        } else {
            console.log('Vermling Scout not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addRat() {
    const numRat = {numToAdd: parseInt(document.querySelector(`#numRat-Monstrosity`).value), monsterId: parseInt(addRatBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numRat),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Rat Monstrosity added.");
        } else {
            console.log('Rat Monstrosity not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addBlood() {
    const numBlood = {numToAdd: parseInt(document.querySelector(`#numBlood-Monstrosity`).value), monsterId: parseInt(addBloodBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numBlood),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Blood Monstrosity added.");
        } else {
            console.log('Blood Monstrosity not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addZealot() {
    const numZealot = {numToAdd: parseInt(document.querySelector(`#numZealot`).value), monsterId: parseInt(addZealotBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numZealot),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Zealot added.");
        } else {
            console.log('Zealot not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}

async function addDemon() {
    const numDemon = {numToAdd: parseInt(document.querySelector(`#numChaos-Demon`).value), monsterId: parseInt(addDemonBtn.getAttribute("data-monsterId"))}
    await fetch(`/api/addedMonsters`, {
        method: "POST",
        body: JSON.stringify(numDemon),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok) {
            console.log("Chaos Demon added.");
        } else {
            console.log('Chaos Demon not added.')
        }
    }).catch(err=> {
        console.log(err);
    })
}