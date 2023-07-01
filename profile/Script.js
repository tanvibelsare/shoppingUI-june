const profilefirstname=document.getElementById("profile-firstname")
console.log(profilefirstname)
const profilelasttname=document.getElementById("profile-lastname")
const savebutton=document.getElementById("save-info")
const oldpass=document.getElementById("old-password")
const newpass=document.getElementById("new-password")
const confirmnewpass=document.getElementById("new-confirm-password")

const changepassbtn=document.getElementById("change-password")
// const user=JSON.parse( sessionStorage.getItem("loggedInUser"))
if( sessionStorage.getItem("loggedInUser")){
    const user=JSON.parse( sessionStorage.getItem("loggedInUser"))
    console.log(user)
    profilefirstname.value=user.firstname
        profilelasttname.value=user.lastname
}

savebutton.addEventListener("click",()=>{
    let user1={
        firstname:profilefirstname.value,
        lastname:profilelasttname.value
    }
let profileArray=[]
  profileArray.push(user1)
  localStorage.setItem("profileArray",JSON.stringify(profileArray))
    
  window.location.href="../shop"
})
changepassbtn.addEventListener("click",editPass)

function editPass(){
   if(oldpass.value!=(JSON.parse(sessionStorage.getItem("loggedInUser"))).password){
      document.getElementById("err").innerHTML="password not match"
      document.getElementById("err").style.color="red"
      oldpass.value=""
    }else{
        console.log("in else part")
   if(newpass.value!=confirmnewpass.value){
    document.getElementById("matcherr").innerHTML="password not match to new pass"
    document.getElementById("matcherr").style.color="red"
   }else{
       let loggedInUser=JSON.parse(sessionStorage.getItem("loggedInUser"))
        console.log(loggedInUser)
       console.log(loggedInUser.password)
       console.log(newpass.value)
     loggedInUser.password=newpass.value
     console.log(loggedInUser)
     sessionStorage.setItem("loggedInUser",JSON.stringify(loggedInUser))
     
     }
   }

}
document.getElementById("logout").addEventListener("click",()=>{
    console.log("logout")
   sessionStorage.removeItem("users")
})