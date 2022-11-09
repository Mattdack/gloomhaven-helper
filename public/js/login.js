//TODO: this is linked to the login button on the login form...NOT the login button at main.handlebar page
const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit',e => {
    e.preventDefault();
    console.log('prevented default')
    const userObj = {
        username:document.querySelector('#loginUser').value,
        password:document.querySelector('#loginPassword').value
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{ 
            'Content-Type': 'application/json' 
        }
    }).then(res=>{
        if(res.ok){
            // location.assign('/home')
            location.reload()
        } else {
            alert('incorrect login')
        }
    })
})