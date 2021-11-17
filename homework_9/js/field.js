"use strict";

// Задача 3
function generateField(n) {
    if (n < 3) {
        console.log("Значение n не может быть меньше 3");
        return;
    }
    let priseCells = [];
    for (let i = 0; i < 3; ) {
        let random = Math.floor(Math.random() * n * n);
        if (priseCells.includes(random)) continue;
        priseCells.push(random);
        i++;
    }
    console.log(priseCells);
    let field = document.getElementById("field");
    field.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    field.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    let prisesArr = Object.keys(prises);
    let p = 0;
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement("div");
        field.append(cell);
        if (priseCells.includes(i)) cell.setAttribute("prise", prisesArr[p++]);
    }
}

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

generateField(4);