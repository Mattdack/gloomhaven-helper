

const newMonsterBtn = document.querySelector("#newMonsterBtn");
newMonsterBtn.addEventListener("click", e => {
    e.preventDefault();

    const monsterObj = {
        name: document.querySelector("#newmonstername").value,
        level: document.querySelector("#newmonsterlevel").value,
        special: document.querySelector("#newmonsterspecial").value,
        health: document.querySelector("#newmonsterhp").value,
        move: document.querySelector("#newmonstermove").value,
        attack: document.querySelector("#newmonsterattack").value,
        isElite: document.querySelector("#newmonsteriselite").value === "on" ? true : false
    }
    fetch("/api/monsters/", {
        method: "POST",
        body: JSON.stringify(monsterObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {

        console.log(data)
    })
})

const newCharacterBtn = document.querySelector("#newCharacterBtn");
newCharacterBtn.addEventListener("click", e => {
    e.preventDefault();

    const charcterObj = {
        playerName: document.querySelector("#newcharactername").value,
        playerLevel: document.querySelector("#newcharacterlevel").value,
        playerHealth: document.querySelector("#newcharacterhealth").value,
        experience: 0
    }
    fetch("/api/players/", {
        method: "POST",
        body: JSON.stringify(charcterObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(data => {

        console.log(data)
    })
})

