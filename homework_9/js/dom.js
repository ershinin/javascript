"use strict";

// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/
let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

function addBooks(booksArr, element /* куда добавляем (в какой section) */) {
    for (let genre of booksArr) {
        let card = document.createElement("div");
        card.classList.add("genre")
        let genreName = document.createElement("h2");
        genreName.classList.add("genre__name")
        genreName.innerText = genre.genreName;
        let books = document.createElement("div");
        books.classList.add("genre__books")
        card.append(genreName, books);
        for (let book of genre.books) {
            let bookBlock = document.createElement("article");
            bookBlock.classList.add("genre__book");
            let bookTitle = document.createElement("span");
            bookTitle.innerText = book.title;
            let bookImg = document.createElement("img");
            bookImg.classList.add("genre__book__img");
            bookImg.setAttribute("src", book.img);
            let bookDescr = document.createElement("p");
            bookDescr.innerText = book.description;
            let bookLink = document.createElement("a");
            bookLink.innerText = "Читать";
            bookBlock.append(bookTitle, bookImg, bookDescr, bookLink);
            books.append(bookBlock);
        }
        element.append(card);
    }
}

let booksSection = document.querySelector(".books-section");
addBooks(booksByGenre, booksSection);
