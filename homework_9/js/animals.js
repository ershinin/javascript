"use strict";

//Задача 1
let animals = [
    {
        name: 'Люся',
        age: '1 год',
        color: 'трехцветная',
        additional_info: { vaccinations: true, passport: true },
    },
    {
        name: 'Том',
        age: '3 месяца',
        color: 'белый',
        additional_info: { vaccinations: false, passport: false },
    },
    {
        name: 'Макс',
        age: 2,
        color: 'серый',
        additional_info: { vaccinations: false, passport: true },
    },
    {
        name: 'Василий',
        age: 3,
        color: 'черный',
        additional_info: { vaccinations: true, passport: true },
    },
];

let cards = document.getElementById('cards');
for (let animal of animals) {
    let card = document.createElement('div');
    card.classList.add('card');
    let name = document.createElement('p');
    name.innerText = `Кличка: ${animal.name}`;
    let age = document.createElement('p');
    age.innerText = `Возраст: ${animal.age}`;
    let color = document.createElement('p');
    color.innerText = `Цвет: ${animal.color}`;
    let vaccinations = document.createElement('p');
    vaccinations.innerText = animal.additional_info.vaccinations ? `Прививка: есть` : `Прививка: нет`;
    let passport = document.createElement('p');
    passport.innerText = animal.additional_info.passport ? `Паспорт: есть` : `Паспорт: нет`;
    card.append(name, age, color, vaccinations, passport);
    cards.append(card);
}
