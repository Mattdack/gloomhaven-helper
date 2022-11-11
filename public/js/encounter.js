// let addcharacterForm = document.querySelector("#addCharacter");
// addcharacterForm.addEventListener("click", e=>{
//     e.preventDefault();
    
//     let checkboxes = document.querySelectorAll('input[name="character"]:checked');
//     console.log(checkboxes)
//     let charArr = []
//     checkboxes.forEach((checkbox) => {
//       charArr.push(checkbox.value)
//     })
//     console.log(charArr)

//     fetch("/api/players",{
//         method:"POST",
//         body:JSON.stringify(charArr),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//            location.reload()
//         } else {
//             alert("danger")
//         }
//     })
// })

const newMonsterBtn = document.querySelector("#newMonsterBtn");
newMonsterBtn.addEventListener("click",e=>{
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
    fetch("/api/monsters/",{
        method:"POST",
        body:JSON.stringify(monsterObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(data => {

        console.log(data)
    })
})
