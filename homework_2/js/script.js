"use strict";

console.log("Задание 1");
let count = 67;
console.log("Количество правильных ответов:", count);
if (count >= 90) {
    console.log("   Оценка 'отлично'");
} else if (count >= 60) {
    console.log("   Оценка 'хорошо'");
} else if (count >= 40) {
    console.log("   Оценка 'удовлетворительно'");
} else if (count >= 0) {
    console.log("   Попробуйте еще раз");
}

//

console.log("Задание 2");
let firstOperand = parseInt(prompt("Введите первый операнд"));
let secondOperand = parseInt(prompt("Введите второй операнд"));
let operator = prompt("Введите оператор");
switch (operator) {
    case "+":
        console.log("Результат:", firstOperand + secondOperand);
        break;
    case "-":
        console.log("Результат:", firstOperand - secondOperand);
        break;
    case "*":
        console.log("Результат:", firstOperand * secondOperand);
        break;
    case "/":
        console.log("Результат:", firstOperand / secondOperand);
        break;
    default:
        console.log("Введен некорректный оператор");
};

//

console.log("Задание 3");
let dishes = parseInt(prompt("Введите количество тарелок"));
let cleanser = parseInt(prompt("Введите количество моющего средства"));
while (dishes >= 1 && cleanser >= 0.5) {
    dishes--;
    cleanser -= 0.5;
    console.log("Очередная тарелка помыта. Осталось моющего средства:", cleanser);
}
if (dishes > 0) {
    console.log("Моющее средство закончилось. Невымытых тарелок осталось:", dishes);
} else {
    console.log("Все тарелки помыты. Моющего средства осталось:", cleanser);
}

//

console.log("Задание 4");
let number = Math.floor(Math.random() * 9) + 1;     // [0;9) -> [1;10)
let input = 10;
while (input !== number) {
    input = parseInt(prompt("Введите число"));
    if (input === 0) break;
    if (input === number) console.log("Вы угадали");
    else if (input > number) console.log("Загаданное число меньше");
    else console.log("Загаданное число больше");
}
console.log("Работа программы завершена");

//

console.log("Задание 5");
let number = Math.floor(Math.random() * 491) + 10;     // [0, 490) -> [10, 501)
if (number > 25 && number < 200) console.log("Число", number, "содержится в (25;200)");
else console.log("Число", number, "не содержится в (25;200)");

//

console.log("Задание 6");
console.log("Загадайте число в диапазоне [1;100]");
let from = 1;
let to = 100;
let result;
let answer;
while (true) {
    result = from + Math.floor((to - from)/2);
    if ((to - from) === 2) break;
    answer = prompt(`Число равно ${result} ? (ДА/НЕТ)`).toLowerCase();
    if (answer === "да") break;
    answer = prompt(`Число больше ${result} ? (ДА/НЕТ)`).toLowerCase();
    if (answer === "да") from = result;
    else if (answer === "нет") to = result;
}
console.log("Вы загадали число", result);
