//TODO: this is grabbing the logout button in the main.handlebar nav bar
<<<<<<< HEAD
const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click",e=>{
    fetch("/api/users/logout",{
        method:"POST"
    }).then(res=>{
        location.reload("/login")
    })
})
=======
// const logoutBtn = document.querySelector("#logoutBtn");
// logoutBtn.addEventListener("click",e=>{
//     fetch("/api/users/logout",{
//         method:"POST"
//     }).then(res=>{
//         location.reload()
//     })
// })
>>>>>>> dev
