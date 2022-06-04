function checkForm() {
    let username = document.querySelector(`#username`);
    let surname = document.querySelector(`#surname`);
    let login = document.querySelector('#login');
    let password1 = document.querySelector('#password1');
    let password2 = document.querySelector('#password2');
    let phonenumber = document.querySelector('#phonenumber');
    let terms = document.querySelector('#flexCheckChecked');

    let usernameOk; 
    let surnameOk;
    let loginOk;
    let password1Ok;
    let password2Ok;
    let phonenumberOk;
    let termsOk;

    document.querySelector('.errorMessage1').innerHTML = '';
    document.querySelector('.errorMessage2').innerHTML = '';
    document.querySelector('.errorMessage3').innerHTML = '';
    document.querySelector('.errorMessage4').innerHTML = '';
    document.querySelector('.errorMessage5').innerHTML = '';
    document.querySelector('.errorMessage6').innerHTML = '';
    document.querySelector('.errorMessage7').innerHTML = '';

    if (username.value == '') {
        document.querySelector('.errorMessage1').innerHTML = 'Введите имя';
    } else {
        usernameOk = true;
    }
    if (surname.value == '') {
        document.querySelector('.errorMessage2').innerHTML = 'Введите фамилию';
    } else {
        surnameOk = true;
    }
    if (login.value == '') {
        document.querySelector('.errorMessage3').innerHTML = 'Введите логин';
    } else {
        loginOk = true;
    }

    if (password1.value == '') {
        document.querySelector('.errorMessage4').innerHTML = 'Введите пароль';
    } else if (password1.value.length < 8) {
        document.querySelector('.errorMessage4').innerHTML = 'Пароль должен содержать не менее восьми символов';}
        else {
            password1Ok = true;
        }

    if (password2.value == '') {
        document.querySelector('.errorMessage5').innerHTML = 'Повторите пароль';
    } else if (password2.value != password1.value){
        document.querySelector('.errorMessage5').innerHTML = 'Пароли должны совпадать';
    } else {
        password2Ok = true;
    }

    if (phonenumber.value == '') {
        document.querySelector('.errorMessage6').innerHTML = 'Введите номер телефона';
    } else if (phonenumber.value.length != 11) {
        document.querySelector('.errorMessage6').innerHTML = 'Номер введен неверно';}
        else {
            phonenumberOk = true;
        }

    if (terms.checked!==true) {
        document.querySelector('.errorMessage7').innerHTML = 'Примите условия Пользовательского соглашения';} 
        else {
            termsOk = true;
        }
    if (usernameOk && surnameOk && loginOk && password1Ok && password2Ok && phonenumberOk && termsOk) {

        alert (`Добро пожаловать,${username.value} ${surname.value}!`)

        username.value='';
        surname.value='';
        login.value='';
        password1.value='';
        password2.value='';
        phonenumber.value='';
        terms.checked=false;
        }

    }


document.querySelector('#button').addEventListener("click", checkForm);