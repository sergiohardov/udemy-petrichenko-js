/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
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

  const formBlock = document.querySelector(".add");
  const formInput = formBlock.querySelector(".adding__input");
  const formCheckbox = formBlock.querySelector('[type="checkbox');

  formBlock.addEventListener("submit", (e) => {
    e.preventDefault();
    let film = formInput.value;
    const favorite = formCheckbox.checked;

    if (film) {
      if (film.length > 21) {
        film = `${film.substring(0, 21)}...`;
      }

      if (favorite) {
        alert("Добавляем любимый фильм");
      }
      movieDB.movies.push(film);
      sortArr(movieDB.movies);
      createMovielist(movieDB.movies, films);
    }

    e.target.reset();
  });

  const deleteAds = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";
    bg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovielist(data, parent) {
    parent.innerHTML = "";
    sortArr(data);

    data.forEach((item, i) => {
      parent.innerHTML += `<li class="promo__interactive-item">${
        i + 1
      } - ${item}<div class="delete"></div></li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createMovielist(data, parent);
      });
    });
  }

  deleteAds(ads);
  makeChanges();

  createMovielist(movieDB.movies, films);
});
