let state = false;
let password = document.getElementById('password');
let passwordStrength = document.getElementById('password-strength');
let lowerUpperCase = document.querySelector('.lower-upper-case i');
let number = document.querySelector('.one-number i');
let specialChar = document.querySelector('.one-special-char i');
let eightChar = document.querySelector('.eight-character i');
let email = document.getElementById('email');
let error = document.getElementById('errorLabel');
let repassword = document.getElementById('repassword');
let label2 = document.getElementById('errorLabel2');
let phonenumber = document.getElementById('phonenumber');
let phone = document.getElementById('phone');
let correctEmail = false;
let correctP = false;
let correctPC = false;
let correctPh = false;



email.addEventListener('keyup',function(){
    let em = email.value;
    checkEmail(em);
})

function checkEmail(em){
    // let regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(regexp.test(email.value)){
        error.innerHTML = "Valid email address";
        error.style.color = "green";
        error.style.fontSize = "small";
        error.style.fontWeight = "bold";
        correctEmail = true;
    }
    else{
        error.innerHTML = "Invalid email address";
        error.style.color = "rgb(196, 28, 28)";
        error.style.fontWeight = "bold";
        error.style.fontSize = "small";
        correctEmail = false;
    }
    

}





function myFunction(show){
    show.classList.toggle('fa-eye-slash');
}

function toggle(){
    if(state){
        password.setAttribute("type","password");
        state = false;
    }
    else{
        password.setAttribute("type","text");
        state = true;
    }
}

password.addEventListener('keyup',function(){
    let pass = password.value;
    checkStrength(pass);
})

function checkStrength(password){
    let strength = 0;
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
        strength += 1;
        lowerUpperCase.classList.remove('fa-circle');
        lowerUpperCase.classList.add("fa-check");

    }
    else{
        lowerUpperCase.classList.add("fa-circle");
        lowerUpperCase.classList.remove("fa-check");
    }

    if(password.match(/([0-9])/)){
        strength += 1;
        number.classList.remove("fa-circle");
        number.classList.add("fa-check");
    }
    else{
        number.classList.add("fa-circle");
        number.classList.remove("fa-check");
    }

    if(password.match(/([!,@,#,$,%,^,&,*,_,~,?])/)){
        strength += 1;
        specialChar.classList.remove("fa-circle");
        specialChar.classList.add("fa-check");
    }
    else{
        specialChar.classList.add("fa-circle");
        specialChar.classList.remove("fa-check");
    }

    if(password.length > 7){
        strength += 1;
        eightChar.classList.remove("fa-circle");
        eightChar.classList.add("fa-check");
    }
    else{
        eightChar.classList.add("fa-circle");
        eightChar.classList.remove("fa-check");
    }

    if(strength == 0){
        passwordStrength.style = "width:0%";
    }
    else if(strength == 2){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.add('progress-bar-danger');
        passwordStrength.style = "width :10%";
    }
    else if(strength == 3){
        passwordStrength.classList.remove('progress-bar-success');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-warning');
        passwordStrength.style = "width: 60%";
    }

    else if(strength == 4){
        passwordStrength.classList.remove('progress-bar-warning');
        passwordStrength.classList.remove('progress-bar-danger');
        passwordStrength.classList.add('progress-bar-success');
        passwordStrength.style = "width: 100%";
        correctP = true;
    }
}



repassword.addEventListener('keyup',function(){
    let re = repassword.value;
    checkPass(re);
})

function checkPass(re){
    if((re == password.value) && re != ""){
        label2.innerHTML = "Password confirmed";
        label2.style.color = "green";
        label2.style.fontSize = "small";
        label2.style.color = "green";
        label2.style.fontWeight = "bold";
        correctPC = true;
        
    }
    else{
        label2.innerHTML = "Password not matching";
        label2.style.color = "rgb(196, 28, 28)";
        label2.style.fontSize = "small";
        label2.style.fontWeight = "bold";
        correctPC = false;
    }

}


phonenumber.addEventListener('keyup',function(){
    let ph = phonenumber.value;
    checkPhone(ph);
})

function checkPhone(ph){
    let phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phonereg.test(phonenumber.value)){
        phone.innerHTML = "Phone number valid";
        phone.style.color = "green";
        phone.style.fontSize = "small";
        phone.style.fontWeight = "bold";
        correctPh = true;
    }
    else{
        phone.innerHTML = "Phone number invalid";
        phone.style.color = "rgb(196, 28, 28)";
        correctPh = false;
    }
    
}




function checkInputs(){
    let blabel = document.getElementById('blabel');
    if(correctEmail && correctP && correctPC && correctPh){
        return true;
        
    }
    else{
        blabel.innerHTML = "You cannot submit <br> Fields are not filled properly";
        blabel.style.color = "red";
        blabel.style.fontSize = "small";
        blabel.style.fontWeight = "bold";
        return false;
    }
}



    




