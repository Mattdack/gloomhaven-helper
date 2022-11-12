// create new campaign

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
            location.assign('/newEncounter');
        } else {
            alert('Something Wrong Happened with Making New Campaign.')
        }
    })
});

