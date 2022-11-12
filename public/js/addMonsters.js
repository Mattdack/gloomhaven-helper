const addMon = document.querySelectorAll('.chooseyourmonster');


for (let i = 0; i < addMon.length; i++) {
    addMon[i].addEventListener("click", event => {
        event.preventDefault();
        const monId = event.target.parentElement.getAttribute("data-mid").value
        console.log(monId)
        fetch(`/api/campaigns/encountermonster/${monId}`, {
            method: "POST"
        }).then(res => {
            if (res.ok) {
                location.reload()
            } else {
                alert("trumpet sound")
            }
        })

    })

}

// res.render("currentEncounter", {
//     players: campPlayers,
//     monsters: encMonsters,
//     logged_in: req.session.logged_in,
// });




// chooseyourmonsterBtn.addEventListener("click", chooseMonsters());

// function chooseMonsters() {
//     console.log(addVoidBtn);

//     if (addVoidBtn.checked) {
//         addVoidwarden();
//     }
//     if (addHatchetBtn.checked) {
//         addHatchet();
//     }
//     if (addDemoBtn.checked) {
//         addDemo();
//     }
//     if (addRedGuardBtn.checked) {
//         addRedGuard();
//     }
// }


// async function addHatchet() {
//     const hatchetObj = {
//         name: `Hatchet`,
//         level: 1,
//         health: 8,
//         experience: 0,
//     }

//     const added = await fetch(`/api/players`, {
//         method: `POST`,
//         body: JSON.stringify(hatchetObj),
//         headers: {
//             "Content-Type": "application/kson"
//         }
//     }).then(res => {
//         if (res.ok) {
//             console.log("Hatchet added.")
//             location.reload();
//         } else {
//             console.log("Hatchet not added.");
//         }
//     })
//     console.log(added);
// }
