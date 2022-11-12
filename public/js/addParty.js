const addPlayerBtn = document.querySelector(`#addCharacter`);
const addVoidBtn = document.querySelector(`#addVoidwarden`);
const addHatchetBtn = document.querySelector(`#addHatchet`);
const addDemoBtn = document.querySelector(`#addDemo`);
const addRedGuardBtn = document.querySelector(`#addRedGuard`);


addPlayerBtn.addEventListener("click", addParty);

function addParty() {
    if (addVoidBtn.checked) {
        addVoidwarden();
    }
    if(addHatchetBtn.checked) {
        addHatchet();
    }
    if(addDemoBtn.checked) {
        addDemo();
    }
    if(addRedGuardBtn.checked) {
        addRedGuard();
    }
    if((!addVoidBtn.checked) && (!addHatchetBtn.checked) && (!addDemoBtn.checked) && (!addRedGuardBtn.checked)) {
        alert("You did not select a character to add!")
    } else {
        location.reload();
        alert("Your characters have been added.");
    }
}


async function addVoidwarden() {
    const voidObj = {
        name: `Voidwarden`,
        level: 1,
        health: 6,
        experience: 0,
    }
    console.log("THIS IS THE VOIDWARDEN OBJECT" + JSON.stringify(voidObj));
    const added = await fetch(`/api/players`, {
        method: "POST",
        body: JSON.stringify(voidObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok){
            console.log("Voidwarden added.")
        }else {
            console.log("Voidwarden not added.")
        }
    })
}

async function addHatchet() {
    const hatchetObj = {
        name: `Hatchet`,
        level: 1,
        health: 8,
        experience: 0,
    }

    const added = await fetch(`/api/players`, {
        method: `POST`,
        body: JSON.stringify(hatchetObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok){
            console.log("Hatchet added.")
        }else {
            console.log("Hatchet not added.");
        }
    })
}

async function addDemo() {
    const demoObj = {
        name: `Demolitionist`,
        level: 1,
        health: 8,
        experience: 0,
    }

    const added = await fetch(`/api/players`, {
        method: `POST`,
        body: JSON.stringify(demoObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok){
            console.log("Demo added.");
        }else {
            console.log("Demo not added.")
        }
    })
}

async function addRedGuard() {
    const rgObj = {
        name: `RedGuard`,
        level: 1,
        health: 10,
        experience: 0,
    }

    const added = await fetch(`/api/players`, {
        method: `POST`,
        body: JSON.stringify(rgObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=> {
        if(res.ok){
            console.log("RG Added");
        }else {
            console.log("RG not added")
        }
    })
}