# Конспект "Основы JavaScript"

## 01 - Что такое JS и как его подключить к странице

Файлы скриптов подключаются с помощью тега `<script>` в атрибуте `src`. Подключение происходит в конце страницы перед закрывающими тегами.

Пример:

```javascript
<script src="js/script.js"></script>
```

## 02 - Переменные и строгий режим

Объявление переменных делается ключевыми словами `let` и `const`, далее следует ее название и оператор присваивания `=`

Пример:

```javascript
let number = 5;
const leftBorderWidth = 1;
```

Переменная созданая с помощью `const`, не изменяемая. Но если был создан объект, его свойства можно изменить.

Строгий режим `"use strict"` позволяет избавляться от неточностей в написании кода. Пишется на самой верхней строчке.

## 03 - Классификация типов данных в JavaScript

### Простые типы

Числа: `1`, `2`, `3`

Строки: `"string"`, `"name"`

Логический тип: `true`, `false`

`null`, `undefined`, `Symbol`, `BigInt`

### Объекты

Масивы: `[]`

Функции: `function`

Объект Даты, Регулярные выражения, Ошибки

## 04 - Простое общение с пользователем

Пример комманды `confirm()` с двумя вариантами ответа,

если нажато `ok`:

```javascript
const question = confirm("Are you here?");
console.log(question); // true
```

если нажато `cancel`:

```javascript
const question = confirm("Are you here?");
console.log(question); // false
```

Когда требуется конкретный ответ от пользователя, используется комманда `prompt();`

```javascript
const answer = prompt("Вам есть 18?", "");
console.log(answer); // То что укажет в текстовом поле пользователь
```

## 05 - Интерполяция (ES6)

Аналог конкатанация строк, использование переменной внутри строки:

```javascript
const category = "toys";
console.log(`https://someurl.com/${category}/5`); // https://someurl.com/toys/5
```

## 06 - Операторы в JS

### Остаток при делении

Происходит деление левого числа на правое, и в результат попадает число которое которое остается при делении, 5\2 = 2+2+1 = 1

```javascript
console.log("5%2"); // 1
```

### Сравнение

Существует не строгое сравнение `==`, и строгое `===`.

Не строгое сравнение происходит по **значению**, пример:

```javascript
console.log("2*4 == '8'"); // true
```

Строгое сравнение учитывает и **тип данных**, пример:

```javascript
console.log("2*4 === '8'"); // false
```

## 07 - Учимся работать с системой контроля версий Git и с сервисом GitHub

### Работа с новым проектом

Для того что бы Git начал следить за проектом, необходимо открыть терминал, по пути корневой папки и выполнить команду `git init`

После этого необходимо представится для системы, следующими командами:

`git config --local user.name "ВАШЕ_ИМЯ"`

`git config --local user.email ВАША_ПОЧТА`

Что бы убедиться что вы назвались правильно, необходимо открыть скрытую папку **.git**, и открыть файл **config**.

Для того что бы увидеть статус гита вашего проекта, необходимо выполнить команду `git status`.

Что бы добавить в индекс новые\измененные файлы, необходимо выполнить команду `git add -A`

Для того что бы закомитить\сохранить состояние файлом необходимо выполнить команду `git commit -a -m "ВАШ_КОМИТ"`

Что бы увидеть историю своих комитов, необходимо выполнить команду `git log`

Для того что бы свой локальный репозиторий на GitHub, необходимо на платформе создать новый репозиторий, дальше выполнить ряд следующих команд:

`git remote add origin https://github.com/ваша_ссылка_на_репозиторий.git`

`git branch -M main`

`git push -u origin main`

### В процессе работы с подключенным Git

1. Что бы добавить в индекс новые\измененные файлы, необходимо выполнить команду `git add -A`

2. Для того что бы закомитить\сохранить состояние файлом необходимо выполнить команду `git commit -a -m "ВАШ_КОМИТ"`

3. Что бы запушить изменения `git push`

## 08 - Как работать с GitHub с разных компьютеров, gitignore и Git Kraken

Для того что бы на другом компьютере развернуть проект с GitHub, необходимо в рабочей папке выполнить команду:

`git clone https://github.com/ваша_ссылка_на_репозиторий.git название_папки`

После этого делаем изменения и сохраняем все так же как при обычной работе:

`git add -A`, `git commit -a -m "ВАШ_КОМИТ"`, `git push`

После этого если мы возвращаемся за другой компьютер, перед началом работы необходимо выполнить команду `git pull`. Это выполнит обновление вашего проекта если были сделаны изменения на другом копьютере

Если были сделаны изменения на другом компьютере, и перед тем как вносить изменения, мы не сделали `git pull`, при пуше возникнет ошибка.

Для того что бы исправить ошибку необходимо запросить актуальную версию проекта `git pull`, после этого git войдет в режим **слияния** (merge)

В терминале где напечатаны волны (~), необходимо написать комит, после этого нажать сочетание клавиш `Ctrl + C` дважды, и после этого написать `:wq!` и нажать `Enter`

## 09 - Условия

### Тернарный оператор

Если условие возвращает `true`, то будет выполнена левая часть (после ?), если же `false`, выполнится правая часть (после :) Синтаксис тернарного оператора следующий:

```javascript
const num = 50;
num === 50 ? console.log("Ok!") : console.log("Error!"); // Ok!
```

### Switch

Условие работает **только со строгим сравнением**, и перебирает варианты по очередно. Ключевое слово `break`, прерывает выполнение шага, и переходит к следующему в случае `false`. Синтаксис следующий:

```javascript
const num = 50;

switch (num) {
  case 49:
    console.log("Erorr");
    break;
  case 100:
    console.log("Erorr");
    break;
  case 50:
    console.log("Ok");
    break;
  default:
    console.log("Some error");
    break;
}
```

## 10 - Циклы

### Цикл while

Логика выполнения следующая - пока условие верно, будет выполнятся цикл до того момента пока оно станет не верным. Если бы в выражении мы не поставили итерацию переменной `num` на каждом шаге, цикл бы длился бесконечно. Синтаксис:

```javascript
let num = 50;

while (num <= 55) {
  console.log(num);
  num++;
}
// console result:
// 50
// 51
// 52
// 53
// 54
// 55
```

### Цикл do while

Этот цикл отличается тем что он всегда сначала выполнит первый раз условие которое находится в блоке `do` а после будет уже проверять условие `while`. Синтаксис:

```javascript
let num = 50;

do {
  console.log(num);
  num++;
} while (num <= 55);

// console result:
// 50
// 51
// 52
// 53
// 54
// 55
```

### Цикл for

Цикл с более детальной настройкой выполнения. Синтаксис:

```javascript
for (let i = 1; i < 8; i++) {
  console.log(i);
}

// console result:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
```

Для того что бы остановить бесконечный цикл, или по конкретному условию, используется ключевое слово `break`. Синтаксис:

```javascript
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

// console result:
// 1
// 2
// 3
// 4
// 5
```

Для того что бы пропустить шаг цикла, используется ключевое слово `continue`. Синтаксис:

```javascript
for (let i = 1; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log(i);
}

// console result:
// 1
// 2
// 3
// 4
// 5
// 7
// 8
// 9
```

## 11 - Методы и свойства строк и чисел

Что бы увидеть все свойства или методы, нужно в консоле вызвать комманду `console.dir()`

### Работа со строками

Поиск места откуда начинается слово

```javascript
const text = "Some fruit";
console.log(text.indexOf("fruit")); //6
```

Обрезка строки: первым аргументом задается то откуда начинать вырезание, второй аргумент где заканчивать. Последний аргумент можно не указывать, тогда строка обрежется до конца.

```javascript
const text = "Hello world";
console.log(text.slice("6, 11")); //world
```

### Работа с числами

Округление к целому числу

```javascript
const num = 12.2;
console.log(Math.round(num)); //12
```

Преобразование строки в десятичное число

```javascript
const num = "12.2px";
console.log(parseInt(num)); //12
```

Преобразование строки в число c плавающей точкой

```javascript
const num = "12.2px";
console.log(parseFloat(num)); //12.2
```

## 12 - Callback - функции

Функция которая должна быть выполнена после того, как другая функция завершила свое выполнение.

```javascript
function learnJS(lang, callback) {
  console.log(`Я учу ${lang}`);
  callback();
}
function done() {
  console.log("Я прошел этот урок");
}
learnJS("JavaScript", done);

// console result:
// Я учу JavaScript
// Я прошел этот урок
```

## 13 - Объекты, деструктуризация объектов (ES6)

Что бы удалить какое либо свойство из обьекта, существует оператор `delete`

```javascript
const options = {
  name: "test",
  width: 1024,
  height: 1024,
};

delete options.name;

// console result:
// {width: 1024, height: 1024}
```

Для того что бы перебрать все свойства обьекта, пользуемся циклом `for in`, без дополнительных условий, перебор будет проходить только по верхнему уровню обьекта

```javascript
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
};

for (let key in options) {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
// console result:
// Свойство name имеет значение test
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство colors имеет значение [object Object]
```

Для того что бы при переборе углубиться на уровень вложенности ниже, можем написать условную конструкцию:

```javascript
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
};

for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
// console result:
// Свойство name имеет значение test
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство border имеет значение black
// Свойство background имеет значение red
```

Что бы узнать колличество свойств внутри обьекта, существует метод `Object.keys()`, который собирает свойства (ключи) обьекта в массив, а у массива в свою очередь есть метод `.length`

```javascript
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
};

console.log(Object.keys(options)); // ["name", "width", "height", "colors"]
console.log(Object.keys(options).length); // 4
```

Для того что бы создать метод, в свойство обьекта необходимо записать функцию

```javascript
const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		background: "red"
	}
	makeTest: function() {
		console.log('Test')
	}
}

options.makeTest();

// console result
// Test
```

Для того что бы деструктуризировать обьект необходимо в переменную вынести свойства обьекта:

```javascript
const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
};
const { border, background } = options.colors;

console.log(border);
console.log(background);

//console result:
// black
// red
```

## 14 - Массивы и псевдомассивы

### Добавление, удаление из массива

Метод который удаляет последний элемент из массива

```javascript
const arr = [1, 2, 3, 6, 8];
arr.pop();
console.log(arr); // [1, 2, 3, 6]
```

Метод который добавляет элемент в конец массива

```javascript
const arr = [1, 2, 3, 6, 8];
arr.push(10);
console.log(arr); // [1, 2, 3, 6, 8, 10]
```

При работе с началом масива, при добавлении или удалении элемента у всех последующих переписывается id, по этому в такой ситуации необходимо всем переназначить id

### Перебор массива

Для того что бы перебрать массив, можно воспользоваться циклами `for`:

```javascript
const arr = [1, 2, 3, 6, 8];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//console result:
// 2
// 3
// 6
// 8
```

или `for of`, преимущество пользования этим циклом то что в нем работают `brake`, и `continue`, работает только с массиво-подобными сущностями:

```javascript
const arr = [1, 2, 3, 6, 8];
for (let value of arr) {
  console.log(value);
}
//console result:
// 2
// 3
// 6
// 8
```

или `forEach`, в метод передается callback функция, которая имеет 3 аргумента, первый это сам элемент итерации, второй это номер по порядку, третий это ссылка на массив:

```javascript
const arr = [1, 2, 3, 6, 8];
arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});
// console result:
// 0: 1 внутри массива 1,2,3,6,8
// 1: 2 внутри массива 1,2,3,6,8
// 2: 3 внутри массива 1,2,3,6,8
// 3: 6 внутри массива 1,2,3,6,8
// 4: 8 внутри массива 1,2,3,6,8
```

### Прочие метдоды массива

Получить длину массива можно с помощью метода `.length`

```javascript
const arr = [1, 2, 3, 6, 8];
console.log(arr.length); // 5
```

Метод `.length` работает по принципу: берет последний индекс массива, и добавляет к нему единицу (1). По этому если не правильно заполнить массив мы можем получить ошибочные данные. Например:

```javascript
const arr = [1, 2, 3, 6, 8];
arrr[99] = 0;
console.log(arr.length); // 100
console.log(arr); // [1, 2, 3, 6, 8, empty × 94, 0]
```

Методы которые на выходе трансфармируют массив: `arr.map`, `arr.every\some`, `arr.filter`, `arr.reduce`

Для того что бы конвертировать строковое значение в массив по разделителю, метод `.split()`

```javascript
const str = "qqq, aaa, ddd";
const strNew = str.split(", ");

console.log(strNew); // ['qqq', 'aaa', 'ddd']
```

Для того что бы конвертировать строку в массив, метод `.join()`

```javascript
const str = ["qqq", "aaa", "ddd"];
const strNew = str.join("; ");

console.log(strNew); // "qqq; aaa; ddd"
```

Для того что бы отсортировать, метод `.sort()`.
На примере строк:

```javascript
const str = ["qqq", "aaa", "bbb"];
const strNew = str.join("; ");
strNew.sort();
console.log(strNew); // "aaa; bbb; qqq"
```

На примере чисел:

```javascript
const arr = [2, 13, 26, 8, 10];
arr.sort();
console.log(arr); // [10, 13, 2, 26, 8]
```

Изначально метод сортирует как строки, и в данном случае сравнение по символьно. Что бы отсортировать по возрастанию нужно во внутрь метода передать callback функцию (шаблон), по которому будет происходить сортировка

```javascript
const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr); // [2, 8, 10, 13, 26]

function compareNum(a, b) {
  return a - b;
}
```

### Псевдо-массивы

При работе с элементами на странице, мы получаем обьект структура которого совпадает со структурой массива, то есть наглядно он выглядит точно так же как обычный массив, но отличие в том что у таких псевдомассивов отсутствуют большинство методов

## 15 - Передача по ссылке или по значению, Spread оператор (ES6-ES9)

При работе с примитивными типами данных (строки, числа, логические значения), они передаются по значению

```javascript
let a = 5;
let b = a;
b = b + 5;

cosole.log(b); // 10
console.log(a); // 5
```

Когда мы работаем с обьектом, массивом, функциией и т.д., то передача идет не по значению а по **ссылке**, при этом меняя копию мы меняем оригинал

```javascript
const obj = {
  a: 5,
  b: 7,
};

const copy = obj;
copy.a = 10;

console.log(copy); // {a: 10, b: 7}
console.log(obj); // {a: 10, b: 7}
```

Для того что бы создать копию обьекта можно создать функцию которая в цикле будет перебирать оригинальный обьект, и записывать в переменную. Но существует два понятия это глубокие и поверхностные копии обьекта.

```javascript
function copy(obj) {
  let objCopy = {};

  let key;

  for (key in obj) {
    objCopy[key] = obj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 9,
  },
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 1;

console.log(newNumbers); // {a: 10, b: 5, c: {x: 1, y: 9} }
console.log(numbers); // {a: 2, b: 5, c: {x: 1, y: 9} }
```

В примере выше создается поверхностная, это можно увидеть что на верхнем уровне мы можем менять свойства обьекта, не влия на оригинал, а вот вложенный обьек уже передается по ссылке, по этому на прямую влияет на оригинал.

Для того что бы соеденить сразу несколько обьектов есть способ `Object.assign()`

```javascript
const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 9,
  },
};

const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add)); // {a: 2, b: 5, c: {x: 7, y: 9}, d: 17, e: 20}
```

Так же при помощи этого способа можно создать поверхностную копию обьекта

```javascript
const add = {
  d: 17,
  e: 11,
};

const copy = Object.assign({}, add);

copy.d = 20;

console.log(copy); // {d: 20, e: 11}
console.log(add); // {d: 17, e: 11}
```

Для того что бы скопировать массив, метод `.slice()`

```javascript
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "asdfasfd";

console.log(newArray); // ['a', 'asdfasfd', 'c']
console.log(oldArray); // ['a', 'b', 'c']
```

Еще один способ для создания поверхностной копии это использование оператора разворота (spreed) `...`

```javascript
const video = ["youtube", "vimeo", "vine"],
  blog = ["wordpress", "livejournal", "drupal"],
  internet = [...video, ...blog, "facebook", "twitter"];

console.log(internet); // ['youtube', 'vimeo', 'vine', 'wordpress', 'livejournal', 'drupal', 'facebook', 'twitter']
```

Так же этим способом можно передавать аргументы в функцию

```javascript
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 10];
log(...num);

// console result:
// 2
// 5
// 10
```

Что бы создать копию обьекта еще одним способом, через оператор разворота

```javascript
const obj = {
  a: 10,
  b: 2,
};
const newObj = { ...obj };
```

## 16 - Основы ООП, прототипно-ориентированное наследование

Наследование свойств от прототипа (старый вариант)

```javascript
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = {
  health: 100,
};

john.__proto__ = soldier;

console.log(john); // { health: 100 }
console.log(john.armor); // { 100 }
console.log(john.sayHello()); // Hello
```

Современное использование прототипов

```javascript
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = {
  health: 100,
};

Object.setPrototypeOf(john, soldier);

console.log(john); // { health: 100 }
console.log(john.armor); // { 100 }
console.log(john.sayHello()); // Hello
```

Создание нового обьекта и присвоение прототипного наследования

```javascript
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = Object.create(soldier);

console.log(john.sayHello()); // Hello
```

## 17 - Замыкание и лексическое окружение

Пересмотреть несколько раз урок

## \* - События и их обработчики

Добавление отслеживания события на элемент

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Click");
});
```

При помощи `addEventListener` можно назначать на один и тот же элемент несколько событий.

Для того что бы получить данные о том элементе на котором произошло событие используется аргумент `event` который передается в callback функцию. Передается всегда первым аргументом. По этому если внутри функции нам понадобятся еще аргументы, в обязательно порядке сначала используем `event`, а после уже то что потребуется.

Информацию об элементе на котором произошло событие можно вывести в консоль

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  console.log(e);
});
```

Для того что бы получить текущий элемент на котором произошло событие используется свойство `target`

```javascript
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  console.log(e.target);
});
```

Для того что бы удалить слушатель события\функцию с элемента необходимо использовать `removeEventListener`, это сработает только в том случае если в нее будет переданна та же функция что и при `addEventListener`

```javascript
const btn = document.querySelector("button");

let i = 0;
const removeEl = (e) => {
  e.remove();
  i++;
  if (i == 1) {
    btn.removeEventListener("click", removeEl); // Удаляет слушатель
  }
};
btn.addEventListener("click", removeEl); // Добавляет слушатель
```

Всплытие событий это когда обработчик срабатывает сначала на вложеном элементе, а после на родительском и так далее поднимаясь вверх по иерархии.

Для того что бы отследить конкретный элемент по которому было совершено событие, следует использовать `e.currentTarget`

Что бы отменить стандартное поведение браузера используется метод события `e.preventDefault()`

## \* - Навигация по DOM - элементам, data-атрибуты, преимущество for/of

Что бы получить дочерние элементы родителя, необходимо использовать метод `.childNodes`, но в совокупность елементов (nodeList), попадут так же текстовые узлы. Для того что бы избавиться от текстовых узлов, можно воспользоваться методом перебора `for of`

```html
<ul>
  <li>1</li>

  <li>2</li>
  <li>3</li>
</ul>

<script>
  for (let node of document.querySelector(ul).childNodes) {
    if (node.textName == "#text") {
      continue;
    }
    console.log(node);
  }
</script>
```

Что бы получить первый дочерний элемент, используется метод `.firstChild` или `.lastChild`, но минус в том что можно получить текстовую ноду (#text). Для того чтобы избежать получения текстового узла, используется метод `.firstElementChild`, `.lastElementChild`

Что бы получить родителя элемента используется метод `.parentNode`, метод можно дублировать для того что бы двигаться выше по иерархии, но минус в том что можно получить текстовую ноду (#text). Для того чтобы избежать получения текстового узла, используется метод `.parentElement`

Что бы получить элемент с `data` атрибутом, необходимо воспользоваться `.querySelector("[data-*]")`

```html
<div data-current="3">3</div>

<script>
  console.log(document.querySelector('[data-current="3"]'));
</script>
```

Что бы получить следующего соседа или предыдущего, используется метод `.nextSibling`, `previousSibling` но минус в том что можно получить текстовую ноду (#text). Для того чтобы избежать получения текстового узла, исползьуются методы `.nextElementSibling`, `.previousElementSibling`
