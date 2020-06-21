/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";
let numberOfFilms;

function start() {
  do {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  } while (
    numberOfFilms == "" ||
    numberOfFilms == null ||
    isNaN(numberOfFilms)
  );
}
//start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотренно достаточно мало фильмов");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 40) {
    alert("Просмотренно достаточно много фильмов");
  } else if (personalMovieDB.count > 39) {
    alert("Вы настоящий любитель фильмов");
  } else {
    alert("Произошла ошибка");
  }
}
//detectPersonalLevel();

const movies = {};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastFilm = "";
    do {
      lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    } while (lastFilm == null || lastFilm == "" || lastFilm.length > 50);
    let rating = prompt("На сколько оцените его?", "");
    if (rating == null || rating == "") {
      rating = "Оценка не проставлена";
    }
    movies[lastFilm] = rating;
  }
}

//rememberMyFilms();

function showMyDB() {
  if (personalMovieDB.private != true) {
    console.log(personalMovieDB);
  } else {
    console.log("Защищенные данные");
  }
}

function writeYourGenres() {
  let genre = "";
  for (let i = 0; i < 3; i++) {
    while (genre == "" || genre.length > 20) {
      genre = prompt(`Ваш любимый жанр №${i + 1}?`, "");
    }
    personalMovieDB.genres[i] = genre;
    genre = "";
  }
}
writeYourGenres();
showMyDB();
