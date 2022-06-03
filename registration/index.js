function checkForm() {
    let username = document.querySelector('#username');
    let surname = document.querySelector('#surname');
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
        document.querySelector('.errorMessage4').innerHTML = 'Введите пароль';
    }
    if (password2.value == '') {
        document.querySelector('.errorMessage5').innerHTML = 'Повторите пароль';
    }
    if (phonenumber.value == '') {
        document.querySelector('.errorMessage6').innerHTML = 'Введите номер телефона';
    }
// чекбокс условия
    if (terms.checked!==true ) {
        document.querySelector('.errorMessage7').innerHTML = 'Примите условия Пользовательского соглашения';}
// пароли
    if (password1.value.lenght <= 8) {
        document.querySelector('.errorMessage4').innerHTML = 'Пароль должен содержать не менее восьми символов';
    }
    // if (password2 != password2) {
    //     document.querySelector('.errorMessage4').innerHTML = 'Пароль должен содержать не менее восьми символов';
    // }

    
}

document.querySelector('#button').addEventListener("click", checkForm);