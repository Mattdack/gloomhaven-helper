

const addPlayerEffectList = document.querySelectorAll('.addPlayerEffect');
console.log("This is where add player effects event listeners are getting made.");
for (let i = 0; i < addPlayerEffectList.length; i++) {
    addPlayerEffectList[i].addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("data-player");
        const effectId = event.target.getAttribute("data-effect");

        fetch(`/api/players/${targetId}/effect`,{
            method:"POST",
            body: JSON.stringify({
                effect: effectId,
            }),
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
}

const addMonsterEffectList = document.querySelectorAll('.addMonsterEffect');
console.log("This is where add monster effects event listeners are getting made.");
for (let i = 0; i < addMonsterEffectList.length; i++) {
    addMonsterEffectList[i].addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("data-monster");
        const effectId = event.target.getAttribute("data-effect");

        fetch(`/api/monsters/${targetId}/effect`,{
            method:"POST",
            body: JSON.stringify({
                effect: effectId,
            }),
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
}