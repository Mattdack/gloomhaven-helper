
//   Turn Order: Clear Input
const clearBtn = document.getElementById("clearInput");
clearBtn.addEventListener("click", event => {
  event.preventDefault();
  console.log("buttonclick")
  document.getElementById("turnorders").reset();
})

// health bar monsters
const plusHP = document.querySelectorAll('.plusHP');
console.log("IncreaseHP");
for (let i = 0; i < plusHP.length; i++) {
    plusHP[i].addEventListener("click", event => {
        event.preventDefault();
        const mhealthSpan = event.target.parentElement.children[3].children[0]

        mhealthSpan.innerText = parseInt(mhealthSpan.innerText) + 1;
    })
}
const minusHP = document.querySelectorAll('.minusHP');
console.log("DecreaseHP");
for (let i = 0; i < plusHP.length; i++) {
    minusHP[i].addEventListener("click", event => {
        event.preventDefault();
        const mhealthSpan = event.target.parentElement.children[3].children[0];

        mhealthSpan.innerText = parseInt(mhealthSpan.innerText) - 1;
    })
}

// health bars players-----------
const plusCHP = document.querySelectorAll('.plusCHP');
for (let i = 0; i < plusCHP.length; i++) {
    plusCHP[i].addEventListener("click", e => {
        e.preventDefault();
        const chealthSpan = e.target.parentElement.children[2].children[0]

        chealthSpan.innerText = parseInt(chealthSpan.innerText) + 1;
    })
}

const minusCHP = document.querySelectorAll('.minusCHP');
for (let i = 0; i < minusCHP.length; i++) {
    minusCHP[i].addEventListener("click", e => {
        e.preventDefault();
        const chealthSpan = e.target.parentElement.children[2].children[0]

        chealthSpan.innerText = parseInt(chealthSpan.innerText) - 1;
    })
}