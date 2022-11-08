const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click",e=>{
    fetch("/api/users/logout",{
        method:"POST"
    }).then(res=>{
        location.reload()
    })
})