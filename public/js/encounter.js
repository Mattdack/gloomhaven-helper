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
            alert("trumpet sound")
        }
    })
})