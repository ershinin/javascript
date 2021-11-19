"use strict";

let minuses = document.getElementsByClassName("countDecr");
for (let minus of minuses) {
    minus.addEventListener("click", countDecrement);
}

let pluses = document.getElementsByClassName("countIncr");
for (let plus of pluses) {
    plus.addEventListener("click", countIncrement);
}

function countDecrement() {
    let count = parseInt(this.nextElementSibling.innerText);
    if (count > 0) this.nextElementSibling.innerText = --count;
}

function countIncrement() {
    let count = parseInt(this.previousElementSibling.innerText);
    if (count < this.previousElementSibling.dataset.count) {
        this.previousElementSibling.innerText = ++count;
    }
}
