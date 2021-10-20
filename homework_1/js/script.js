"use strict";

let h = 10;
let l = 12;
let w = 15;
console.log("1. Прямоугольный параллелепипед");
console.log("   Высота:", h);
console.log("   Длина:", l);
console.log("   Ширина:", w);
console.log("   Площадь:", 2 * (h * l + h * w + w * l));

let n = 78;
console.log("2. Значение n равно", n, ", сумма его цифр равна", n % 10 + (n - n % 10) / 10);

let a = 7;
let b = 3;
a = a + b; //10
b = a - b; //7
a = a - b; //3
console.log("3.", a, b);
