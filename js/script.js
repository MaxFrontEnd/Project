/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 1

"use strict";

let selectors = {
  reclama: document.querySelector(".promo__adv"),
  genre: document.querySelector(".promo__genre"),
  bgOld: document.querySelector(".promo__bg"),
  ul: document.querySelector(".promo__interactive-list"),
  form: document.querySelector(".add"),
  inpBtn: document.getElementsByTagName("button"),
  inputValue: document.querySelector(".adding__input"),
  trashBtns: document.querySelectorAll(".delete"),
  checkFavorite: document.querySelector("[type=checkbox]"),
};

// variables

const div = '<div class = "delete"></div>';

// functions

function addFilms() {
  for (let i = 1; i <= movieDB.movies.length; i++) {
    let li = document.createElement("li");
    li.classList.add("promo__interactive-item");
    li.innerHTML = `${[i] + " " + movieDB.movies[i - 1]}${div}`;
    selectors.ul.appendChild(li);
  }
}

selectors.ul.addEventListener("click", (e) => {
  movieDB.movies.forEach((elem, i) => {
    let textCnt = e.target.parentNode.textContent.slice(2);

    console.log("element in array  " + elem);
    console.log("text content " + textCnt);
    console.log(elem.length);
    console.log(textCnt.length);
    console.log(typeof elem);
    console.log(typeof textCnt);
    console.log(elem == textCnt);
    if (elem == textCnt) {
      movieDB.movies.splice(i, 1);
      console.log("got you");
    } else {
      console.log("no chanse");
    }
  });
  if (!e.target.firstChild) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
});

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
    "Новая Эра",
  ],
};
// Удаляем фильмы на странице
function removeFilms() {
  while (selectors.ul.firstChild) {
    selectors.ul.removeChild(selectors.ul.firstChild);
  }
}

removeFilms();

selectors.form.addEventListener("submit", (e) => {
  let inpVl = selectors.inputValue.value;
  inpVl = inpVl.length > 21 ? inpVl.slice(0, 21) + "..." : inpVl;
  if (inpVl) {
    if (selectors.checkFavorite) {
      console.log("Добавили любимый фильм");
    }
    movieDB.movies.push(inpVl);
    movieDB.movies.sort();
    removeFilms();
    addFilms();
  }

  e.preventDefault();
});

movieDB.movies.sort();

while (selectors.reclama.firstChild) {
  selectors.reclama.removeChild(selectors.reclama.firstChild);
}
addFilms();
// 2

selectors.genre.textContent = "Драмма";

//3

selectors.bgOld.style.backgroundImage = "url('./img/bg.jpg')";
// let bgNew = document.createElement("div");
// bgNew.innerHTML = '<div class="promo__bg" style="background="./img/bg.jpg">';

//bg.replaceChild(bgNew, bgOld);

//let films = document.querySelectorAll(".promo__interactive-item");

//console.log(div);

//console.log(selectors.inpBtn[0]);
