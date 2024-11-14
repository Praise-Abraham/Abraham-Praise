// events, event listeners
// click, submit

// select the element from html
let button = document.querySelector('#btn')

// add event listener
button.addEventListener("click", (event)=>{
    console.log("Button clicked")
});


let cone = document.querySelector('.cone')
let greet = ["abpraise20@gmail.come", 202020]
let john = document.getElementById('john')

cone.addEventListener("submit",(event)=>{
    event.preventDefault() // prevent page from reloading
    console.log("Form submitted");
    
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(username);
    console.log(email);
    console.log(password);
 
    if (email == greet[0] && password == greet[1]) {
        john.textContent = `Welcome, ${username}`
    } else {
        john.textContent = `Sorry ${username}, looks like you entered incorrect email or password`
    }
} );




