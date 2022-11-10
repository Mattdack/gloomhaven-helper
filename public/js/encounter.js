let addcharacterForm = document.querySelector("#addCharacter");
addcharacterForm.addEventListener("submit", e=>{
    e.preventDefault();
    
    let checkboxes = document.querySelectorAll('input[name="character"]:checked');
    let charArr = []
    checkboxes.forEach((checkbox) => {
      charArr.push(checkbox.value)
    })

    fetch("/api/campaign",{
        method:"POST",
        body:JSON.stringify(charArr),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("danger")
        }
    })
})

const newMonsterForm = document.querySelector("#newMonsterForm");
newMonsterForm.addEventListener("submit",e=>{
    e.preventDefault();
    const monsterObj = {
        name:document.querySelector("#newmonstername").value,
        level:document.querySelector("#newmonsterlevel").value,
        special:document.querySelector("#newmonsteronhit").value,
        health:document.querySelector("#newmonsterhp").value,
        move:document.querySelector("#newmonstermove").value,
        attack:document.querySelector("#newmonsterattack").value,
        isElite:document.querySelector("#newmonsteriselite").value
    }
    fetch("/api/monsters/",{
        method:"POST",
        body:JSON.stringify(monsterObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           alert("success!")
           return res.json()
        } else {
            alert("error")
            location.reload();
        }
    }).then(data=>{
        location.href = `/monster/${data.id}`
    })
})