"use script";

// 1
let array = [3, 90, 5, -100, 50, 0, 560, 1];
array.sort(function (x, y) {return x - y} );

// 2
function checkSpam(text, ...spamWords) {
    let words = text.split(" ");
    let count = 0;
    for (let word of words) {
        if (spamWords.includes(word)) count++;
    }
    switch (count) {
        case 0:  return "Спам отсутствует";
        case 1:  return "Совсем немного спама";
        case 2:  return "Немного спама";
        case 3:  return "Спама достаточно";
        default: return "Слишком много спама";
    }
}

// 3
// i
let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
numsArr.forEach(
    (element) => element.forEach(
        (elem, i, arr) => arr[i] += 10
    )
);
console.log(numsArr);
// ii
numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];
let newArr = numsArr.map(
    (array) => array.filter(
        (a) => a >= 0
    )
);
console.log(newArr);
