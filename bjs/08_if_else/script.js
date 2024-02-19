alert(`Загадайте любое целое число от 0 до 100, а я его угадаю`);
let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
alert(`Вы загадали целое число от ${minValue} до ${maxValue}, угадываю...`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    alert(`Загадайте любое целое число от 0 до 100, а я его угадаю`); 
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber
    answerField.innerText = `Это число ${answerNumber }?`;
    gameRun = true;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue) {
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
   switch (orderNumber) {
    case 1:
        answerField.innerText = `Ты молодец!`;
    break;
    case 2:
        answerField.innerText  = `Не с первого раза отгадал, но все же`;
    break;
    case 3:
        answerField.innerText  = `С третьей попытки на счастье!`;
    break;
    case 4:
        answerField.innerText  = `Угадал)`;
    break;
    case 5:
        answerField.innerText  = `Вот это ты загадал число`;
    break;
    default:
        answerField.innerText  = `Сыграем снова?`;
    break;
   }
   gameRun = false;
})

