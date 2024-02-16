let lastOperand = 0;
let operation = null;
let finaltext;

// Связываем поле input с переменной inputWindow
const inputWindow = document.querySelector('#inputWindow');
const resultText = document.querySelector('#resultText');

//При нажатии на кнопку #btn_clr, очищаем значения в input
document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.querySelector('.col').addEventListener ('click', function(){
    finalText = inputWindow.value;
    resultText.textContent = finalText;
});

document.querySelector('#btn_result').addEventListener('click', function(){
if (operation === 'sum'){
    const result = lastOperand + parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
}
if (operation === 'def'){
    const result = lastOperand - parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
}
if (operation === 'del'){
    const result = lastOperand / parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
}
if (operation === 'umn'){
    const result = lastOperand * parseInt(inputWindow.value);
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
}
})

document.querySelector('#btn_sum').addEventListener('click', function(){
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.querySelector('#btn_def').addEventListener('click', function(){
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.querySelector('#btn_del').addEventListener('click', function(){
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
})

document.querySelector('#btn_umn').addEventListener('click', function(){
    lastOperand = parseInt(inputWindow.value);
    operation = 'umn';
    inputWindow.value = '';
})

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