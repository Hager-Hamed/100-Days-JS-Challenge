const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var nameInput=document.querySelector(".name");
var emailInput=document.querySelector(".email");
var passInput=document.querySelector(".pass");
var btnSignup=document.querySelector(".btnSignup")


var setData=[];


btnSignup.addEventListener("click",function(){
    pushData()
})


// push the data

function pushData(){
    if(validName()&&validEmail()&&validPass()==true){
        var sit={
            name:nameInput.value,
            email:emailInput.value,
            pass:passInput.value
        }

        setData.push(sit);
        localStorage.setItem("setData", JSON.stringify(setData));
        clear();

    }

}










// validation name

function validName(){
    var nameCheck=nameInput.value;
    var regexName = /^\w{3,}(\s+\w+)*$/;
    if(regexName.test(nameCheck)){

        nameInput.classList.remove("is-invalid");
        nameInput.classList.add("is-valid");
        return true;

    }
    else{
        nameInput.classList.add("is-invalid");
        return false;
    }
}

// validation email

function validEmail(){
    var emailCheck=emailInput.value;
    var regexEmail=/^\S+@\S+\.\S+$/;
    if(regexEmail.test(emailCheck)){
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        return true;
    }
    else{
        emailInput.classList.add("is-invalid");
        return false;
    }

}

//validation the password
function validPass(){
    var passCheck=passInput.value;
    var regexPass=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regexPass.test(passCheck))
    {
        passInput.classList.remove("is-invalid");
        passInput.classList.add("is-valid");
        return true;

    }
    else{
        passInput.classList.add("is-invalid");
        return false;
    }


}

// clear the data 

function clear(){
    nameInput.value="";
    emailInput.value="";
    passInput.value="";

}

// the login valid

var signEmail=document.querySelector(".signEmail")
var signPass=document.querySelector(".signPass");
var btnSign=document.querySelector(".btnSign");

if(localStorage.getItem("setData")!=null)
{
    setData=JSON.parse(localStorage.getItem("setData"))
}
function checkLogin() {
    var mail = signEmail.value;
    var password = signPass.value;
    var isValidCredentials = false;

    for (var i = 0; i < setData.length; i++) {
        if (setData[i].email == mail && setData[i].pass == password) {
            var getName = setData[i].name;
            console.log("doneeee");
            isValidCredentials = true;
          return true;
        }
    }

    if (!isValidCredentials) {
        alert("rowngggg");
    }

    return isValidCredentials;
}



btnSign.addEventListener("click", function () {
    if (checkLogin() == true) {
        window.location="./welcom.html"



    }
});
