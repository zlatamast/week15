function checkForm() {
    let username = document.querySelector(`#username`);
    let surname = document.querySelector(`#surname`);
    let login = document.querySelector('#login');
    let password1 = document.querySelector('#password1');
    let password2 = document.querySelector('#password2');
    let phonenumber = document.querySelector('#phonenumber');
    let terms = document.querySelector('#flexCheckChecked');
    

    if (username.value == '') {
        document.querySelector('.errorMessage1').innerHTML = 'Введите имя';
    }
    if (surname.value == '') {
        document.querySelector('.errorMessage2').innerHTML = 'Введите фамилию';
    }
    if (login.value == '') {
        document.querySelector('.errorMessage3').innerHTML = 'Введите логин';
    }

    if (password1.value == '') {
        document.querySelector('.errorMessage4').innerHTML = '';
        document.querySelector('.errorMessage4').innerHTML = 'Введите пароль';
    } else if (1 <= password1.value.lenght <= 8) {
        // document.querySelector('.errorMessage4').innerHTML = '';
        document.querySelector('.errorMessage4').innerHTML = 'Пароль должен содержать не менее восьми символов';
    } else if (8 < password1.value.lenght < 32 ) {
        document.querySelector('.errorMessage4').innerHTML = 'отличный пароль';
    }

    if (password2.value == '') {
        document.querySelector('.errorMessage5').innerHTML = 'Повторите пароль';
    } else if (password2.value != password1.value){
        document.querySelector('.errorMessage5').innerHTML = 'Пароли должны совпадать';
    } 
    

    if (phonenumber.value == '') {
        document.querySelector('.errorMessage6').innerHTML = 'Введите номер телефона';
    }
// чекбокс условия
    if (terms.checked!==true ) {
        document.querySelector('.errorMessage7').innerHTML = 'Примите условия Пользовательского соглашения';}

    
}

document.querySelector('#button').addEventListener("click", checkForm);

// if (checkForm() = true){
// alert (`Добро пожаловать, ${username } ${surname}!`)
// }