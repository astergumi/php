//Задаем нулевые значения для переменных
let lastOperand = 0;
let operation = null;
let finaltext;

// Связываем поле ввода input с переменной inputWindow и поле для выводящего текста resultText
const inputWindow = document.querySelector('#inputWindow');
const resultText = document.querySelector('#resultText');

//При нажатии на кнопку #btn_clr, очищаем значения в input
document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

//При нажатии на кнопки, выводим их в поле resultText
document.querySelector('.col').addEventListener('click', function () {
    finalText = inputWindow.value;
    resultText.textContent = finalText;
});

//При нажатии на кнопку = в переменную result записывается 

document.querySelector('#btn_result').addEventListener('click', function () {

    //Операция сложения. Переменной result присваивается сумма lastoperand и введенного значения в поле input
    if (operation === 'sum') {
        const result = lastOperand + parseInt(inputWindow.value);
        //Сброс операции и последнего значения переменной lastoperand
        operation = null;
        lastOperand = 0;
        //Вывод результата
        inputWindow.value = result;
    }
    //Операция разности
    if (operation === 'def') {
        const result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    //Операция деления
    if (operation === 'del') {
        const result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
    //Операция умножения
    if (operation === 'umn') {
        const result = lastOperand * parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
})

//При нажатии на кнопку btn_sum определяется операция сложения, очишается поле. Введенное значение в input записывается в переменную lastoperand
document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.querySelector('#btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.querySelector('#btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
})

document.querySelector('#btn_umn').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'umn';
    inputWindow.value = '';
})

// Выводит цифру 1 при нажатии на кнопку btn_one
document.querySelector('#btn_one').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.querySelector('#btn_second').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.querySelector('#btn_three').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.querySelector('#btn_four').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.querySelector('#btn_five').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.querySelector('#btn_six').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.querySelector('#btn_seven').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.querySelector('#btn_eight').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.querySelector('#btn_nine').addEventListener('click', function () {
    inputWindow.value += '9';
})

document.querySelector('#btn_zero').addEventListener('click', function () {
    inputWindow.value += '0';
})