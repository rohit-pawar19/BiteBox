function login(){
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");
    if(email==="rohit@1234" && password==="rohit@17"){
        //save login state in localstorage
        localStorage.setItem("isLoggedin","true");
        localStorage.setItem("user",email);

        alert("You have logged in");
        window.location.href="index.html";
    }else{
        error.innerText="Inavalid email or password";

    }
}
function togglePassword(){
    let passwordInput=document.getElementById("password");

    if(passwordInput.type==="password"){
        passwordInput.type="text";

    }else{
        passwordInput.type="password";
    }
}
