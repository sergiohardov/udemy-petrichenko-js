/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const ads = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const bg = document.querySelector(".promo__bg");
const films = document.querySelector(".promo__interactive-list");

ads.forEach((item) => {
  item.remove();
});

genre.textContent = "драма";

bg.style.backgroundImage = 'url("img/bg.jpg")';

films.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    films.innerHTML += `<li class="promo__interactive-item">${i + 1} - ${item}<div class="delete"></div></li>`
});

// for (let i = 0; i < movieDB.movies.length; i++) {
//   films.insertAdjacentHTML(
//     "beforeend",
//     `<li class="promo__interactive-item">${i + 1} - ${
//       movieDB.movies[i]
//     }<div class="delete"></div></li>`
//   );
// }