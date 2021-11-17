"use strict";

// Задача 2
function generateTable(objArr) {
    let tableArea = document.getElementById("table");
    let table = document.createElement("table");
    table.classList.add("table");
    let tableHead = table.insertRow();
    tableHead.classList.add("table_head");
    for (let properties in objArr[0]) {
        let th = tableHead.insertCell();
        th.innerText = properties;
        th.classList.add("table_head_cell");
    }
    for (let element of objArr) {
        let row = table.insertRow();
        row.classList.add("table_row");
        for (let properties in element) {
            let td = row.insertCell();
            td.innerText = element[properties];
            td.classList.add("table_cell");
        }
    }
    tableArea.append(table);
}

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];

generateTable(articles);
//generateTable(goods);
