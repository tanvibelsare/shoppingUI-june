const firstname=document.getElementById("signup-firstname")
const lastname=document.getElementById("signup-lastname")
const email=document.getElementById("signup-email")
const password=document.getElementById("signup-password")
const confirmpass=document.getElementById("signup-confirm-password")
const signupButton=document.getElementById("signup-button")
const massage=document.getElementById("massage")
const loginRedirect = document.getElementById('loginRedirect');

function saveUser(fname,lname,emailInput,passwordinput){
    let curruser={

        firstname: fname,
        lastname: lname,
        email: emailInput,
        password:passwordinput,
        token: generateToken(),
       }
       let users=JSON.parse(localStorage.getItem("users"))||[];
       console.log(users)
       //either get array from local Storage or[]
       users.push(curruser);
        //store array of user in local storage
       localStorage.setItem('users',JSON.stringify(users));
       //store logged in user in session storage
       sessionStorage.setItem("loggedInUser",JSON.stringify(curruser))
       firstname.value =""
       lastname.value=""
       email.value ="" 
       password.value = "" 
       confirmpass.value =""

       massage.innerHTML=`Successfully signed up`;
       massage.style.color="green"
       window.location.href='../login';
}

function checkUserExist(email){
  console.log('email function')
  //we store a array in stringify form thats why need to parse it
  let users=JSON.parse(localStorage.getItem("users"))
  console.log("email",users)
  //find returns the first element which match with the condtn
  const obj = users.find((curruser) => {
    return curruser.email === email;
  });
 
  console.log(obj)
  //checking obj is return or not
  if(obj)return true;
  return false;
}


signupButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      firstname.value === "" ||lastname.value===""||
      email.value === "" ||
      password.value === "" ||
      confirmpass.value === ""
    ) {
        massage.style.color="red"
      massage.innerHTML = `All fields are mandatory`;
    //   return;
    }
    else{
     if(password.value !== confirmpass.value){
        massage.style.color="red"
      massage.innerHTML = `Password doesn't match`;
    //   confirmpass.focus();
    //   return;
    }else{
        if(  localStorage.getItem('users')){
            if(checkUserExist(email.value)){
                alert("email already exists")
            }else{
               saveUser(firstname.value,lastname.value,
               email.value,
               password.value,
              )
            }
        }else{
            saveUser(firstname.value,lastname.value,
                email.value,
                password.value,
               )
        }
    }
  }
  });
  
  function generateToken(){
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz0123456789';
    let res = '';
    let length = characters.length;
    for(let i = 1; i<=16; i++){
        res += characters.charAt(Math.floor(Math.random()*length));
    }
    return res;
}
//if user has already sign in
loginRedirect.addEventListener('click',()=>{
  location.href='../login';
})
