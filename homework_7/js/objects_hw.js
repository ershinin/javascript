"use strict";

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50 },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

// 1
function createObj(obj, from, to) {
    if (
        typeof obj !== "object" &&
        typeof from !== "number" && isNaN(from) && !isFinite(from) &&
        typeof to !== "number" && isNaN(to) && !isFinite(to)
    ) return false;
    let result = {};
    for (let subObj in obj) {
        if (obj[subObj].price >= from && obj[subObj].price < to) result[subObj] = obj[subObj];
    }
    return result;
}

//2
function findGood(obj, title, countToCart) {
    if (
        typeof obj !== "object" &&
        typeof title !== "string" &&
        typeof countToCart !== "number" && isNaN(countToCart) && !isFinite(countToCart)
    ) return false;
    for (let subObj in obj) {
        if (obj[subObj].title === title) {
            if (obj[subObj].count > countToCart) {
                obj[subObj].count -= countToCart;
                return true;
            }
            else {
                console.log("Невозможно уменьшить количество");
                return false;
            }
        }
    }
    console.log("Товар не найден");
    return false;
}

// 3
function booksFromAuthor(obj, author) {
    let result = [];
    for (let book of obj) {
        if (book.author === author) result.push(book.title);
    }
    return result;
}
