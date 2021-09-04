


    
function val(){

    let username = document.getElementById('username');
    let pass = document.getElementById('pass');
    let uval = username.value.trim();
    let pval = pass.value.trim();
    let loginError = document.getElementById('loginError');
    if((uval != "") && emailCheck(uval) && (pval != "")){
        return true;
    }
    else{
        loginError.innerHTML = " Cannot submit <br> Fields not filled properly";
        loginError.style.color = "red";
        loginError.style.fontWeight = "bold";
        loginError.style.fontSize = "small";
        return false;
    }
}

function emailCheck(uval){
    let regexp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if(regexp.test(uval)){
        return true;
    }
    else{
        return false;
    }

}

    
