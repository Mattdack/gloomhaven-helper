const currentCampaigns = document.querySelectorAll(`.currentCampaign`);
console.log("This is where the current campaign button event listeners are getting made.");
for (let i = 0; i < currentCampaigns.length; i++) {
    currentCampaigns[i].addEventListener("click", event => {
        event.preventDefault();
        const campaignId = event.target.getAttribute('id');

        fetch(`/api/campaigns/${campaignId}`,{
            method:"POST",
            body: JSON.stringify({}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok) {
                location.assign(`/currentEncounter`);
            } else {
                alert("Not able to store campaign ID and redirect page.")
            }
        })
    })
    
}

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