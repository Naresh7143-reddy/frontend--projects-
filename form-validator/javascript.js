document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("username");
const num = document.getElementById("phn");
const email =document.getElementById("email");
const password =document.getElementById("password");
const confirmpass=document.getElementById("confirm");

const button =document.getElementById("sub");

button.addEventListener('click' , (e) => {
     e.preventDefault();

     if (name.value === ""){
        alert("Name should not be empty")
        name.focus();
        return;
     }
     if(!/^\d{10}$/.test(num)){
        alert("enter the valid 10 digit number");
        num.focus();
        return;
     }
     if(password.value<6); {
     alert("Password must be at least 6 characters long");
            password.focus();
            return;
     }
     if(password.value===confirmpass.value){
        alert ("passwords do not match")
        confirmpass.focus();
        return;
     }
     alert("form submited") ;

});
});