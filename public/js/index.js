

//   Turn Order: Clear Input
const clearBtn = document.getElementById("clearInput");
clearBtn.addEventListener("click", event => {
  event.preventDefault();
  let clear = document.getElementsByName('turnorder');
  console.log(clear)
  clear.value = '';
})

// health bar------------------------------
const plusHP = document.querySelector(".plusHP")
const minusHP = document.querySelector(".minusHP")

function buildmonsterHP() {

  minusHP.addEventListener("click", (e) => {
    const potato = e.target.parentElement.children[3].children[0]
    console.log('id:' + potato);
    potato.innerText = parseInt(potato.innerText) - 1;
  })

  plusHP.addEventListener("click", (e) => {
    const tomato = e.target.parentElement.children[3].children[0]
    console.log('id:' + tomato);
    tomato.innerText = parseInt(tomato.innerText) + 1;
  })

}

buildmonsterHP()

// function buildcharacterHP() {

//   minusHP.addEventListener("click", (e) => {
//     const tomato = e.target.parentElement.children[2].children[0]
//     tomato.innerText = parseInt(tomato.innerText) - 1;

//   })

//   plusHP.addEventListener("click", (e) => {
//     const tomato = e.target.parentElement.children[2].children[0]
//     tomato.innerText = parseInt(tomato.innerText) + 1;
//   })

// }

// buildcharacterHP()