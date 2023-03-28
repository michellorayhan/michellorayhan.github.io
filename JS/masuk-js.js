const inputEmail = document.getElementById('inputEmail')
const inputPass = document.getElementById('inputPassword')
const submitBtn = document.getElementById('buttonSubmit')

let back = document.getElementById('back')
let count = 0;
    

submitBtn.addEventListener("click", (event)=>{event.preventDefault();
    checkInputs();
});

back.setAttribute("href", document.referrer);
back.addEventListener('click', function(){
    history.back();
})

const setError = (inputan, errorText) => {
    const formInputan = inputan.parentElement;
    const divError = formInputan.querySelector('.divError')

    divError.innerText = errorText;
    formInputan.classList.add('error');
    formInputan.classList.remove('success')
}

const setSuccess = (inputan) => {
    const formInputan = inputan.parentElement;
    const divError = formInputan.querySelector('.divError');

    divError.innerText = '';
    formInputan.classList.remove('error');
    formInputan.classList.add('success');
    count++;
}

 const checkInputs = () =>{
    
    const email = inputEmail.value;
    const password = inputPass.value;
    
    //emailValidation
    if(email === '' ){
        setError(inputEmail, "Email tidak boleh kosong!");
    }
    else if(!email.includes("@gmail.com") && !email.includes("@yahoo.com")){
        setError(inputEmail, "Masukkan email dengan format yang sesuai!");
    }
    else{
        setSuccess(inputEmail);
    }

    //passwordValidation
    if(password === '' ){
        setError(inputPass, "Kata sandi tidak boleh kosong!");
    }
    else if(password.length < 6){
        setError(inputPass, "Kata sandi min. 6 karakter");
    }
    else{
        setSuccess(inputPass);
    }
    
    //allValidationSuccessful
    if(count == 2){
        alert("Berhasil Masuk ke Akun Anda!")
        window.location = "../HTML/beranda.html"
    }   

    count = 0;

 }


    

