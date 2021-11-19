"use strict";

// код из задания

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/1000"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/1000"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/1000"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/1000"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/1000"
    }
};

let cardsSection = document.querySelector(".cards-section");
Object.values(goods).forEach((obj)=>{
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = obj.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} руб.`;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (obj.count > 0) {
        count.innerHTML = `
            <button class="countDecr">-</button>
            <span data-count="${obj.count}">0</span>
            <button class="countIncr">+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
});
