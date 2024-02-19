//Присваиваем значение 1 для переменной orderNumber(Номер вопроса) и true для gameRun
let orderNumber = 1;
let gameRun = true;
//Выводим окно с правилами
alert(`Загадайте любое целое число от 0 до 100, а я его угадаю`);
//Выводим окно prompt и введенное в него значения записываем в переменные minValue и maxValue
let minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
//Выводим введенные значения в окно alert
alert(`Вы загадали целое число от ${minValue} до ${maxValue}, угадываю...`);
//Значение записываем в переменную answerNumber
//Складываем меньшее и больше значение, делим на 2, округляем до целого числа в меньшую сторону
let answerNumber = Math.floor((minValue + maxValue) / 2);
//Присвоение переменных номеру вопроса и загаданное число
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
//При старте заменяется цифра у (Номер вопроса) на значение по умолчанию 1
orderNumberField.innerText = orderNumber;
//Заменяется текст на загаданное число
answerField.innerText = `Вы загадали число ${answerNumber }?`;
//При нажатии на кнопку меньше запускать функцию
document.getElementById('btnLess').addEventListener('click', function () {
    //Если игра запущена
    if (gameRun) {
        //Если минимальное значение больше или равно или answerNumber равен минимальному значению или answerNumber больше максимального значения
        if (minValue >= maxValue || answerNumber == minValue || answerNumber > maxValue) {
            //Выводить рандомную фразу
            const phraseRandom = Math.round(Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}` ?
                `Очень сложно` :
                `Давай сыграем еще раз`;
            //Заменять текст на answerPhrase
            answerField.innerText = answerPhrase;
            //Завершить игру
            gameRun = false;
        } else {
            //Иначе уменьшать значение answerNumber и приравнивать его к maxValue
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue >= maxValue || answerNumber < minValue || answerNumber > maxValue) {
            const phraseRandom = Math.round(Math.random() * 4);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}` ?
                `Давай сыграем еще раз` :
                `Попробуем еще раз`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})
//
document.getElementById('btnEqual').addEventListener('click', function () {
    switch (orderNumber) {
        case 1:
            answerField.innerText = `Ты молодец!`;
            break;
        case 2:
            answerField.innerText = `Не с первого раза отгадал, но все же`;
            break;
        case 3:
            answerField.innerText = `С третьей попытки на счастье!`;
            break;
        case 4:
            answerField.innerText = `Угадал)`;
            break;
        case 5:
            answerField.innerText = `Вот это ты загадал число`;
            break;
        default:
            answerField.innerText = `Сыграем снова?`;
            break;
    }
    gameRun = false;
})

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 1;
    alert(`Загадайте любое целое число от 0 до 100, а я его угадаю`);
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
    alert(`Вы загадали целое число от ${minValue} до ${maxValue}, угадываю...`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber
    answerField.innerText = `Это число ${answerNumber }?`;
    gameRun = true;
})