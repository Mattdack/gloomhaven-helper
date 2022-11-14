// list of current campaigns to select from and saves to user id?
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
                location.assign(`/newEncounter`);
            } else {
                alert("Not able to store campaign ID and redirect page.")
            }
        })
    })
}

const newCampaignForm = document.getElementById("newCampaignForm")
const newCamp = document.getElementById("createCampaign")
newCampaignForm.addEventListener("click", e => {
    e.preventDefault();
    const userObj = {
        name: newCamp.value,
    }
    console.log(userObj)
    fetch("/api/campaigns/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if(res.ok){
            location.assign('/newCampaign');
        } else {
            alert('Something Wrong Happened with Making New Campaign.')
        }
    })
});