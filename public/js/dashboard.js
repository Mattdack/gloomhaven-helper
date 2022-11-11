const newForm = document.getElementById("newForm")
newForm.addEventListener("click",e=>{
    e.preventDefault();
    const userObj = {
        name:document.getElementById("createCampaign").value,
    }
    console.log(userObj)
    fetch("/api/campaigns/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(data => {

        console.log(data)
    })
})

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