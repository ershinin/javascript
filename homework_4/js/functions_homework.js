"use strict";

// Задание 1
function goodsEnding(count) {
    if (count > 9 && count < 21) return "товаров";
    if (count % 10 === 1) return "товар";
    if ([2, 3, 4].includes(count % 10)) return "товара";
    return "товаров";
}

// Задание 2
function range(start, end, step = 1) {
    let result = [];
    for (let i = start; i <= end ; i += step) {
        result.push(i);
    }
    return result;
}

// Задание 3

// i
// используется оператор typeof x или typeof(x)
typeof undefined // "undefined"
typeof 0 // "number"
typeof 1n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof null // "object"

// ii
let x;
if (typeof x === "undefined") {
    // можно проверять так
}
if (x === undefined) {
    // так тоже можно проверять
}

// iii
if (typeof x === "number") {
    // можно проверять так
}
if (typeof x === "number" && !isNaN(x) && isFinite(x)) {
    // можно так, чтобы наверняка
}