const addMon = document.querySelectorAll('.chooseyourmonster');

for (let i = 0; i < addMon.length; i++) {
    addMon[i].addEventListener("click", event => {
        event.preventDefault();

        const monId = event.target.parentElement.getAttribute("data-mid").value
        
        console.log(monId, "before fetch")
        fetch(`/api/campaigns/encountermonster/${monId}`, {
            method: "POST",
            body: JSON.stringify(monId),
        headers:{
            "Content-Type":"application/json"
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

