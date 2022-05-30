let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let result = document.querySelector(".result");

function clearInput() {
    number1.value = "";
    number2.value = "";
}

function calcSum() {
    let sum = +number1.value + +number2.value;

    result.innerHTML=`Результат равен ${sum}`;
    
    clearInput();
}

function calcSubt() {
    let subt = number1.value - number2.value;
    
    result.innerHTML=`Результат равен ${subt}`;

    clearInput();
}

function calcMult() {
    let mult = number1.value * number2.value;
    
    result.innerHTML=`Результат равен ${mult}`;

    clearInput();
}

function calcDiv() {
    let div = number1.value / number2.value;
    
    result.innerHTML=`Результат равен ${div}`;

    if (number2.value==0) {
        alert("На ноль делить нельзя!")

        result.innerHTML="";
    }

    clearInput();
}



