const loginemail=document.getElementById("login-email")
const loginpass=document.getElementById("login-password")
const errmsg=document.getElementById("errmsg")
const loginButton=document.getElementById("login")
loginButton.addEventListener("click",(e)=>{
    console.log("button click")
    e.preventDefault()
    if((loginemail.value=="")||(loginpass.value=="")){
         errmsg.innerHTML="all filled required"
         errmsg.style.color="red"
      }else{
        const users= JSON.parse(localStorage.getItem("users"));
        if(users){
          //find the obj with same email
          let currentUser = users.find((currentUser)=>{
              return currentUser.email === loginemail.value.trim();
          });
          if(currentUser){
            //checking password
            if(loginpass.value.trim()===currentUser.password){
              sessionStorage.setItem('loggedInUser',JSON.stringify(currentUser));
              errmsg.innerHTML="succesfully login"
              errmsg.style.color="green"
           window.location.href='../profile/index.html'
              // window.location.href='../profile';
              // alert('login succesful');
            }else{
              alert("incorrect password")
            }
          }else{
            // alert("you have not sign up")
            errmsg.innerHTML="you have not sign up"
        errmsg.style.color="red"
        setTimeout(() => {
            window.location.href="../signup/index.html"
        },1000);
          }
    }
  }
})