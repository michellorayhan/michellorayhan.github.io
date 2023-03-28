const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const inputPass = document.getElementById('inputPassword')
const inputAge = document.getElementById('inputAge')
const FAQCheckbox = document.getElementById('FAQCheckbox')
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
    
    const name = inputName.value; 
    const email = inputEmail.value;
    const password = inputPass.value;
    const age = inputAge.value;
    const checkedFAQ = FAQCheckbox.checked

    //nameValidation
    if(name === '' ){
        setError(inputName, "Nama tidak boleh kosong!");
    }
    else if(!name.includes(' ')){
        setError(inputName, "Nama min. harus 2 kata!");
    }
    else{
        setSuccess(inputName);
    }

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

    //ageValidation
    if(age === '' ){
        setError(inputAge, "Umur tidak boleh kosong!");
    }
    else if(age < 17){
        setError(inputAge, "Umur min. 17 tahun");
    }
    else{
        setSuccess(inputAge);
    }
 
    //checkboxValidation
    if(!checkedFAQ){
        setError(FAQCheckbox.parentElement, "Wajib menyetujui syarat & ketentuan berlaku!");
    }
    else{
        setSuccess(FAQCheckbox.parentElement);
    }

    //allValidationSuccessful
    if(count == 5){
        alert("Berhasil! Akun Anda telah terdaftar!")
        window.location = "../HTML/beranda.html"
    }   

    count = 0;
    
 }


    

