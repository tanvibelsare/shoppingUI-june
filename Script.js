const loginButton=document.getElementById("login");
const signupButton=document.getElementById("signup");
console.log(loginButton)
loginButton.addEventListener("click",()=>{
   
    window.location.href="./login/index.html"
})
signupButton.addEventListener("click",()=>{
    window.location.href="./signup/index.html"
})