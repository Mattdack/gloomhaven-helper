

//   Turn Order: Clear Input
const clearBtn = document.getElementById("clearInput");
clearBtn.addEventListener("click", event => {
  event.preventDefault();
  console.log("buttonclick")
  document.getElementById("turnorders").reset();
})



// health bar------------------------------

async function buildHP() {
  const plusHP = document.querySelector(".plusHP")
  const minusHP = document.querySelector(".minusHP")
  const plusCHP = document.querySelector(".plusCHP")
  const minusCHP = document.querySelector(".minusCHP")

  minusHP.addEventListener("click", (e) => {
    const mhealthSpan = e.target.parentElement.children[3].children[0]
    console.log('id:' + mhealthSpan);
    mhealthSpan.innerText = parseInt(mhealthSpan.innerText) - 1;
  })

  plusHP.addEventListener("click", (e) => {
    const mhealthSpan = e.target.parentElement.children[3].children[0]
    console.log('id:' + mhealthSpan);
    mhealthSpan.innerText = parseInt(mhealthSpan.innerText) + 1;
  })

  minusCHP.addEventListener("click", (e) => {
    const chealthSpan = e.target.parentElement.children[2].children[0]
    chealthSpan.innerText = parseInt(chealthSpan.innerText) - 1;

  })

  plusCHP.addEventListener("click", (e) => {
    const chealthSpan = e.target.parentElement.children[2].children[0]
    chealthSpan.innerText = parseInt(chealthSpan.innerText) + 1;
  })

}


buildHP()