const monsterchoice = document.getElementById('selectmonsterforencounter')
function selectmonster() {

    console.log(monsterchoice.value, "here")

    const monsterId = monsterchoice.value

    console.log(monsterId, "before fetch")
    fetch(`/api/monsters/${monsterId}/encounter`,{
        method:"POST",
        body: {
            monster: monsterId,
        },
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
}


addEventListener("change", selectmonster)
