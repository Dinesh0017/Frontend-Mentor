const form = document.querySelector('.container form');
const email= document.querySelector('.container form input[type=email]');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let emailValue = email.value;

    if(validateEmail(emailValue)){
        form.classList.remove('error');
    }else{
        form.classList.add('error');
    }
});

function validateEmail(email){ 
 const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase()); 
}