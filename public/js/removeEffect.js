const listedEffects = document.querySelectorAll(`.removePlayerEffect`);

for (let i = 0; i < listedEffects.length; i++) {
    listedEffects[i].addEventListener("click", event => {
        event.preventDefault();
        const targetId = event.target.parentNode.getAttribute('id');
        const effectName = event.target.getAttribute('data-effect');

        fetch(`/api/players/${targetId}/effect`, {
            method: "DELETE",
            body: JSON.stringify({effectName: effectName}),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res=> {
            if(res.ok) {
                location.reload()
            } else {
                alert("Trumpet Sound")
            }
        })
    })
    
}

