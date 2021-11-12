"use strict";

// 1
let users = new Map();
users
    .set("John", "Moscow")
    .set("Sam", "Saint-Petersburg")
    .set("Олег", "Moscow")
    .set("Max", "New York");

function cityFilter(obj, city) {
    let result = [];
    for (let [key, value] of obj.entries()) {
        if (value.toLowerCase() === city.toLowerCase())
            result.push(key);
    }
    return result;
}

// 2
function wordsToMap(words) {
    let result = new Map();
    for (let word of words) {
        if (result.has(word))
            result.set(word, result.get(word) + 1);
        else
            result.set(word, 1);
    }
    return result;
}

// 3
let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

function ageFilter(map, ageFrom, ageTo) {
    let result = new Map();
    for (let [id, user] of map.entries()) {
        if (user.age < ageTo && user.age >= ageFrom)
            result.set(id, user);
    }
    return result;
}


