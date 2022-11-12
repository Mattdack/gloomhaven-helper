const addMon = document.querySelectorAll(`chooseyourmonster`);


for (let i = 0; i < addMon.length; i++) {
    addMon[i].addEventListener("click", event => {
        event.preventDefault();
        const monId = event.target.parentElement.getAttribute("data-mid")
        addmonsters(monId)

    })

}

async function addmonsters(ids) {
    await fetch(`/api/monsters/${ids}`, {
        method: "GET",

    }).then(res => {
        if (res.ok) {
            const monstersObj = res.map((monster) =>
                monster.get({ plain: true }));
                console.log(monstersObj)
            fetch('/api/encounters/', {
                method: "POST",
                body: JSON.stringify(monstersObj),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                if (res.ok) {
                    location.reload()
                } else {
                    alert("trumpet sound")
                }
            })



            console.log("monster added.")
            location.reload();
        } else {
            console.log("monster not added.")
        }
    })
    console.log(added);
}

// res.render("currentEncounter", {
//     players: campPlayers,
//     monsters: encMonsters,
//     logged_in: req.session.logged_in,
// });




chooseyourmonsterBtn.addEventListener("click", chooseMonsters());

function chooseMonsters() {
    console.log(addVoidBtn);

    if (addVoidBtn.checked) {
        addVoidwarden();
    }
    if (addHatchetBtn.checked) {
        addHatchet();
    }
    if (addDemoBtn.checked) {
        addDemo();
    }
    if (addRedGuardBtn.checked) {
        addRedGuard();
    }
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
        headers: {
            "Content-Type": "application/kson"
        }
    }).then(res => {
        if (res.ok) {
            console.log("Hatchet added.")
            location.reload();
        } else {
            console.log("Hatchet not added.");
        }
    })
    console.log(added);
}
