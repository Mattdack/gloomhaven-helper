const addPlayerBtn = document.querySelector(`#addCharacter`);
const addVoidBtn = document.querySelector(`#addVoidwarden`);
const addHatchetBtn = document.querySelector(`#addHatchet`);
const addDemoBtn = document.querySelector(`#addDemo`);
const addRedGuardBtn = document.querySelector(`#addRedGuard`);


addPlayerBtn.addEventListener("click", addParty);

function addParty() {
    console.log(addVoidBtn);
    console.log(addVoidBtn.checked);
    console.log(addHatchetBtn.checked);

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
            location.reload();
        }else {
            console.log("Voidwarden not added.")
        }
    })
    console.log(added);
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
            "Content-Type":"application/kson"
        }
    }).then(res=> {
        if(res.ok){
            console.log("Hatchet added.")
            location.reload();
        }else {
            console.log("Hatchet not added.");
        }
    })
    console.log(added);
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
            "Content-Type":"application/kson"
        }
    }).then(res=> {
        if(res.ok){
            console.log("Demo added.");
            location.reload();
        }else {
            console.log("Demo not added.")
        }
    })
    console.log(added);
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
            "Content-Type":"application/kson"
        }
    }).then(res=> {
        if(res.ok){
            console.log("RG Added");
            location.reload();
        }else {
            console.log("RG not added")
            console.log("Issue with adding a character")
        }
    })
    console.log(added);
}