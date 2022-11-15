//monster global elements:
const plusMHP = document.querySelectorAll('.plusMHP');
const minusMHP = document.querySelectorAll('.minusMHP');
const mImg = document.querySelectorAll('.monster-img');
const mName = document.querySelectorAll('.mName');
const mMaxHealth = document.querySelectorAll('.mMaxHP');
const mSpanHealth = document.querySelectorAll('.mSpanHP');
//player global elements
const plusPHP = document.querySelectorAll('.plusPHP');
const minusPHP = document.querySelectorAll('.minusPHP');
const pImg = document.querySelectorAll('.player-img');
const pName = document.querySelectorAll('.pName');
const pMaxHealth = document.querySelectorAll('.pMaxHP');
const pSpanHealth = document.querySelectorAll('.pSpanHP');
const pXP = document.querySelectorAll('.pXP');
const plusXP = document.querySelectorAll('.plusXP');
const minusXP = document.querySelectorAll('.minusXP');
//turn order gloabl elements
const clearBtn = document.getElementById("clearInput");
// update character element
const updateChar = document.querySelectorAll(".saveUpdateCharacter");
const openUpdateModal = document.querySelectorAll(".updateCharacterOpenModal")
let targetId = ""


// turn Order: Clear Input ---------
clearBtn.addEventListener("click", e => {
    e.preventDefault();
    console.log("Next Round Selected!")
    document.getElementById("turnorders").reset();
})

// health increase for monsters --------
for (let i = 0; i < plusMHP.length; i++) {
    plusMHP[i].addEventListener("click", e => {
        e.preventDefault();
        if (parseInt(mSpanHealth[i].innerText) === 0) {
            console.log(`${mName[i].innerText} was healed!`)
            console.log(`${mName[i].innerText} has been revived!`)
            mImg[i].classList.add('h-36');
            mImg[i].classList.remove('h-24');
            mSpanHealth[i].innerText = parseInt(mSpanHealth[i].innerText) + 1;
            mImg[i].src = `/images/monsters/${mName[i].innerText}.jpg`
        } else if (parseInt(mSpanHealth[i].innerText) === parseInt(mMaxHealth[i].innerText)) {
            console.log(`${mName[i].innerText}'s health is already maxed!`)
            return mSpanHealth[i] = mMaxHealth[i]
        } else {
            console.log(`${mName[i].innerText} was healed!`)
            mSpanHealth[i].innerText = parseInt(mSpanHealth[i].innerText) + 1;
        }
    })
}
// health decrease for monsters -------
for (let i = 0; i < minusMHP.length; i++) {
    minusMHP[i].addEventListener("click", e => {
        e.preventDefault();
        if (parseInt(mSpanHealth[i].innerText) === 1) {
            console.log(`${mName[i].innerText} took damage!`)
            console.log(`${mName[i].innerText} has died`)
            mImg[i].classList.remove('h-36');
            mImg[i].classList.add('h-24');
            mSpanHealth[i].innerText = parseInt(mSpanHealth[i].innerText) - 1;
            mImg[i].src = `./images/loot.png`
        } else if (parseInt(mSpanHealth[i].innerText) === 0) {
            console.log(`${mName[i].innerText}'s health is already zero!`)
            return mSpanHealth[i] = mMaxHealth[i]
        } else {
            console.log(`${mName[i].innerText} took damage!`)
            mSpanHealth[i].innerText = parseInt(mSpanHealth[i].innerText) - 1;
        }
    })
}

// health increase for players --------
for (let i = 0; i < plusPHP.length; i++) {
    plusPHP[i].addEventListener("click", e => {
        e.preventDefault();
        if (parseInt(pSpanHealth[i].innerText) === 0) {
            console.log(`${pName[i].innerText} was revived!`)
            console.log(`${pName[i].innerText} was healed!`)
            pSpanHealth[i].innerText = parseInt(pSpanHealth[i].innerText) + 1;
            pImg[i].src = `/images/characters/${pName[i].innerText}.jpg`
        } else if (parseInt(pSpanHealth[i].innerText) === parseInt(pMaxHealth[i].innerText)) {
            console.log(`${pName[i].innerText}'s HP is already maxed!`)
            return pSpanHealth[i] = pMaxHealth[i]
        } else {
            console.log(`${pName[i].innerText} was healed!`)
            pSpanHealth[i].innerText = parseInt(pSpanHealth[i].innerText) + 1;
        }
    })
}

//health decrease for players -----
for (let i = 0; i < minusPHP.length; i++) {
    minusPHP[i].addEventListener("click", e => {
        e.preventDefault();
        if (parseInt(pSpanHealth[i].innerText) === 1) {
            console.log(`${pName[i].innerText} took damage!`)
            console.log(`${pName[i].innerText} is dead!`)
            pSpanHealth[i].innerText = parseInt(pSpanHealth[i].innerText) - 1;
            pImg[i].src = `./images/death.png`
        } else if (parseInt(pSpanHealth[i].innerText) === 0) {
            console.log(`${pName[i].innerText}'s HP is already zero!`)
            return pSpanHealth[i] = pMaxHealth[i]
        } else {
            console.log(`${pName[i].innerText} took damage!`)
            pSpanHealth[i].innerText = parseInt(pSpanHealth[i].innerText) - 1;
        }
    })
}
//  XP bar characters =====================
for (let i = 0; i < plusXP.length; i++) {
    plusXP[i].addEventListener("click", e => {
        e.preventDefault();
        console.log(`${pName[i].innerText} gained XP!`)
        pXP[i].innerText = parseInt(pXP[i].innerText) + 1;
    })
}

for (let i = 0; i < minusXP.length; i++) {
    minusXP[i].addEventListener("click", e => {
        e.preventDefault();
        if (parseInt(pXP[i].innerText) === 0) {
            console.log(`${pName[i].innerText}'s XP is already 0!`)
        } else {
            console.log(`${pName[i].innerText} lost XP!`)
            pXP[i].innerText = parseInt(pXP[i].innerText) - 1;
        }
    })
}
// update Characters-----------
// open modal button
for (let i = 0; i < openUpdateModal.length; i++) {
    openUpdateModal[i].addEventListener("click", e => {
        e.preventDefault();
        targetId = e.target.getAttribute("data-playa");
        console.log(targetId, "id")
        document.getElementById("newCharacterForm").reset()
})
}
// update stats
for (let i = 0; i < updateChar.length; i++) {
    updateChar[i].addEventListener("click", e => {
        e.preventDefault();

        const characterObj = {
            level: parseInt(document.querySelector("#newcharacterlevel").value),
            health: parseInt(document.querySelector("#newcharacterhealth").value),
            experience: document.querySelector("#newexperience").value,
        }

        fetch(`/api/players/${targetId}`, {
            method: "PUT",
            body: JSON.stringify(characterObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()) 
        console.log("character updated!")
    })
}