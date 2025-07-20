let email = document.querySelector("#email");
let pass = document.querySelector("#password");


let emerr= document.querySelector("#emailError");
let pserr= document.querySelector("#passwordError");


let form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

    
document.querySelector("#emailError").textContent="";
document.querySelector("#passwordError").textContent="";
    
    


const emailregex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailval= emailregex.test(email.value);
let passval= passregex.test(pass.value);

let isvalid=true;

if(!emailval){
    emerr.textContent="your email is incorrect";
      isvalid = false; 
}
if(!passval){
      pserr.textContent="your password is incorrect";
      isvalid = false;
}

if(isvalid) {
    let inf=document.querySelector("#inf").textContent="Everything is correct"
     
}


})

