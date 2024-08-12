const email = document.getElementById("email");

let error  = 0
const formValidation = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if(email.value == ''){
        email.style.border = '1px solid red';
        emailError.textContent = 'Please enter an email address';
        emailError.style = 'color:red'
        error++//value of error is increased by 1
    } 
    else if(!email.value.match(emailRegex)){
        email.style.border = '1px solid red';
        emailError.textContent = 'Please enter a valid email address';
        emailError.style = 'color:red'
        error++ 
    }
    else{
        email.style.border = '1px solid green';
        emailError.textContent = '';
    }
    if(error > 0){
        event.preventDefault();
    }
}

// function square(c){

// }
// function add(a,square){

// }