const newForm = document.getElementById("newForm")
const newCamp = document.getElementById("createCampaign").value
newForm.addEventListener("click", e => {
    e.preventDefault();
    const userObj = {
        name: newCamp,
    }
    console.log(userObj)
    fetch("/api/campaigns/", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(data => {

        console.log(data)
    })
    // const project = await Campaign.findOne({ where: { name: newCamp } });
    // let checkboxes = document.querySelectorAll('input[name="character"]:checked');
    // console.log(checkboxes)
    // let charArr = []
    // checkboxes.forEach((checkbox) => {
    //     charArr.push(checkbox.value)
    // })
    // console.log(charArr)

    // fetch("/api/players", {
    //     method: "POST",
    //     body: JSON.stringify(charArr),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(res => {
    //     if (res.ok) {
    //         location.reload()
    //     } else {
    //         alert("danger")
    //     }
    // })
})

// addcharacterForm.addEventListener("click", e => {
//     e.preventDefault();


// })
const addPlayerEffectList = document.querySelectorAll('.addPlayerEffect');
console.log("This is where add player effects event listeners are getting made.");
for (let i = 0; i < addPlayerEffectList.length; i++) {
    addPlayerEffectList[i].addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.getAttribute("data-player");
        const effectId = event.target.getAttribute("data-effect");

        fetch(`/api/players/${targetId}/effect`, {
            method: "POST",
            body: JSON.stringify({
                effect: effectId,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                location.reload()
            } else {
                alert("trumpet sound")
            }
        })
    })
}