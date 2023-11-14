var change = document.getElementById('change');
var button = document.getElementById('ham_button')

var name_error = document.getElementById('error_name');
var email_error = document.getElementById('error_email');
var phone_error = document.getElementById('error_phone');


button.addEventListener('click',()=>{
    if(button.className == 'menu-button'){
        button.className = 'close-button';
        document.getElementById("nav").style.display = "flex";
    }else{
        button.className = 'menu-button';
        document.getElementById("nav").style.display = "none";
    }
})

function validateName(){
    var name = document.getElementById('name');
    if(name.value.trim()===''){
        name_error.innerHTML='Required This Field';
        return false
    }
    else{
        name_error.innerHTML=''
        return true
    }
}

function validateEmail(){
    var email = document.getElementById('email');
    regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(email.value.trim()===''){
        email_error.innerHTML = 'Required This Field';
        return false
    }else if(!email.value.match(regExp)){
        email_error.innerHTML = 'Please Enter Valid Email';
        return false
    }else{
        email_error.innerHTML = ''
        return true
    }
}

function validateMobile(){
    var phone = document.getElementById('mobile');
    ind_mobRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/
    if(!phone.value.match(ind_mobRegExp)){
        phone_error.innerHTML = 'please enter valid mobile'
    }else{
        phone_error.innerHTML = ''
        return false;
    }
}

function validateForm(){
     if(!validateName() || !validateEmail() || !validateMobile()){
        return false;
    }else{
        return true
    }
}