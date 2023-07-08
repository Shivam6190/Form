const popup = document.getElementById("popup");
const button = document.getElementsByClassName("button");
const btn = button[0];
btn.addEventListener("click", validate)

function validate(){
    
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
        
    }

    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast 6 characters.";
        return false;
    }

    else if(document.Formfill.Email.value==""){
        
        document.getElementById("result").innerHTML="Enter your Email";
        return false;
    }

    else if(validateEmail(document.Formfill.Email.value)){
        document.getElementById("result").innerHTML="Enter correct Email";
        return false;
    }

    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }

    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Atleast 6 characters.";
    }

    else if(document.Formfill.cPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Passwords not match";
        return false;
    }

    popup.style.display = "block";
    
    return false;
    
}

function validateEmail(input) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (input.match(mailFormat)) {
      return false;
    } 
    else {
        return true;
    }
}



// const ok = document.getElementById("ok");

// ok.addEventListener("click",function(){
//     popup.style.display = "none";
//     ok.firstElementChild.setAttribute("href", "form.html")
// })
