"use strict";

console.log("Задание 1.");
let nums = [
    [23, 56, 75, -90, 123],
    [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0],
    [4, 9, -2]
];
let sum = 0;
let count = 0;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        nums[i][j] += 10;
        sum += nums[i][j];
    }
    count += nums[i].length;
}
console.log("   Среднее арифметическое всех элементов массива = ", sum / count);

//

console.log("Задание 2.");
nums = new Array(7);
for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(Math.random() * 296) + 5;
}
console.log(nums);
let min = 301, max = 0, minI, maxI;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
        maxI = i;
    }
    if (nums[i] < min) {
        min = nums[i];
        minI = i;
    }
}
console.log("   Максимальный элемент = ", max, "минимальный элемент = ", min);
nums[minI] = max;
nums[maxI] = min;
console.log(nums);

//

console.log("Задание 3.");
nums = [48, -7, 60, 0, -91, -34];
console.log(nums);
let newNums = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
        newNums.push(nums[i]);
        nums.splice(i, 1);
        i--;
    }
}
console.log(nums);
console.log(newNums);

//

console.log("Задание 4.");
let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let tryLogin = prompt("Введите логин");
while (!logins.includes(tryLogin)) {
    tryLogin = prompt("Логин не найден. Попробуйте ввести еще раз");
}
console.log("Логин найден");

//

console.log("Задание 5.");
logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
tryLogin = prompt("Придумайте логин");
while (logins.includes(tryLogin)) {
    tryLogin = prompt("Логин уже используется. Попробуйте придумать другой");
}
logins.push(tryLogin);
console.log("Логин добавлен");