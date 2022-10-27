## 01 - ClassList и делегирование событий

### ClassList

`.lenght` - позволяет узнать колличество классов у елемента,

```html
<div class="red blue"></div>

<script>
  console.log(document.querySelector("div").classList.length); // 2
</script>
```

`.item()` - позволяет получить класс елемента по индексу

```html
<div class="red blue"></div>

<script>
  console.log(document.querySelector("div").classList.item(0)); // red
</script>
```

`.add()` - позволяет добавить класс елементу, можно добавлять сразу несколько

```html
<div class="red blue some item"></div>

<script>
  document.querySelector("div").classList.add("some", "item");
</script>
```

`.remove()` - позволяет удалить класс у элемента

```html
<div class="blue"></div>

<script>
  document.querySelector("div").classList.remove("red");
</script>
```

`.toggle()` - позволяет переключать класс, если на элементе отстуствует класс который внутри скобок метода, то он добавится, если присутствует то удалится

```html
<div class="blue some"></div>

<script>
  document.querySelector("div").classList.toggle("red");
  document.querySelector("div").classList.toggle("some");
</script>
```

`.contains()` - проверяет наличие класса у элемента, возвращает true\false

```html
<div class="red blue"></div>

<script>
  if (document.querySelector("div").classList.contains("red")) {
    console.log("Class detected"); // Class detected
  }
</script>
```

### Делегирование событий

Если на странице было назначено дочерним элементам в цикле обработчик событий, то те обьекты которые динамически появляются в родительском элементе, этот обработчик событий не получат

Для этого на родительский элемент, необходимо повешать обработчик, в данном случае клика, и во время срабатывания события, работать уже с `event`. Для того что бы получить обьект события можно вызвать `console.dir(event.target)`.

Внутри обработчика, проверяем случилось ли событие `event.target` и соответствует ли наш елемент заданым правилам, в данном случае ориентируемся на свойство `tagName: BUTTON`. Внутри описываем функцию.

Теперь при динамическом добавлении\создании элементов в этом родительском блоке, все дочерние элементы подходящие по условию будут при нажатии выполнять нашу функцию. То есть мы делегировали событие родителя на его потомков.

```html
<div class="block">
  <button></button>
  <button></button>
  <button></button>
</div>

<script>
  const block = document.querySelector(".block");

  block.addEventListener("click", (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
      console.log("Click");
    }
  });
</script>
```

Для того что бы ориентироваться на наличие класса у элемента можно использовать `event.target.classList.contains('class_name')`.

Так же альтернативным способом можно использовать метод `.matches()` например, мы хотим что бы условие подходило под элементы _кнопка_, с классом _.btn_
`event.target.matches('button.btn')`

## \* - Значение по умолчанию

Для того что бы в функции у аргумента было дефолтное значение, при обьявлении аргумента в функции необходимо ему присвоить значение по умолчанию

```javascript
function test(i = 12) {
  console.log(i);
}
test(3); // 3
test(); // 12
```

## 02 - Скрипты и время их выполнения. setTimeout и setInterval

Используется для отложенного (асинхронного) запуска функции.

```javascript
setTimeout(function () {
  console.log("text");
}, 2000);

// console result after 2sec
text;
```

Для того что бы четко определьять различные `setTimeout`, помещаем его в переменную, тем самым мы записываем числовой индетификатор этого таймера, для того что бы в дальнейшем его останавливать

```javascript
const timerId = setTimeout(function () {
  console.log("text");
}, 2000);

// console result after 2sec
text;
```

Для того что бы сбросить таймер функцию `setTimeout`, необходимо использовать функцию `clearInterval()`

```javascript
const timerId = setTimeout(function () {
  console.log("text");
}, 2000);

clearInterval(timerId);

// console result after 2sec empty
```

Для того что бы скрипт, повторял выполнение после определенного колличества времени используется `setInterval()`

```javascript
const timerId = setInterval(function() {
	console.log('text')
}, 2000)

// console result after 2sec
text
// console result after 2sec
(2) text
...
```

Для того что бы остановить выполнение интервала, необходимо так же поместить `setInterval()` в переменную и с помощью `clearInterval()` остановить выполнение.

### Чем рекурсивный setTimeout лучше чем обычный setInterval

`setInterval()` не учитывает как долго будет выполнятся скрипт внутри, то есть если функция обьемная, или завязана на том что ожидает получения каких то данных с сервера, то построение такого интервала может вызвать ошибки. В таких случаях, что бы избежать ошибки используют рекурсивный `setTimeout()`:

```javascript
let id = setTimeout(function log() {
	console.log('text')
	id = setTimeout(log, 500)
}, 500)

// console result after 0.5sec
text
// console result after 0.5sec
(2) text
...
```

## \* - Работа с датами

Для того что бы отобразить текущую дату (результат может отличаться)

```javascript
const now = new Date();

console.log(now); // Tue Oct 25 2022 19:52:19 GMT+0300 (Восточная Европа, летнее время)
```

Мы можем получать дату из какого то инпута и приводить ее в формат даты для дальнейшей работы, или вычеслений

```javascript
// Предположим мы с инпута получаем значение даты в виде обычной строки
const time = document.querySelector(".data"); // "2020-05-01"

const timeData = new Date(time);

console.log(timeData); // Fri May 01 2020 03:00:00 GMT+0300 (Восточная Европа, летнее время)
```

Так же дату можно и создать из JS

- только если у числа есть ноль слева, ноль не пишем
- месяцы считаются от нуля, по этому 5 месяц будет июлем
- часы учитывают часовые пояса (в консоли)

```javascript
const timeData = new Date(2020, 5, 1, 20); // В аргументах: Год, месяц, число, часы и так далее

console.log(timeData); // Mon Jun 01 2020 20:00:00 GMT+0300 (Восточная Европа, летнее время)
```

Любая дата в JS хранится в милисикундах, это значение называется `timestamp`. Точка отсчета миллисикунд начинается с **1970** года. Это значение мы можем получить передав 0 аргументом

```javascript
const timeData = new Date(0);

console.log(timeData); // Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
```

Что бы получить дату с помощью миллисикунд ранее чем 1970 год, достаточно передать отрицательное значение аргументом

```javascript
const timeData = new Date(-99999999999);

console.log(timeData); //Mon Oct 31 1966 17:13:20 GMT+0300 (Восточная Европа, стандартное время)время)
```

### Методы для работы с датами

`.getFullYear()` - получает год в формате 4 цифр
`.getMonth()` - получает месяц
`.getDate()` - получает число
и так далее...
`.getDay()` - получает номер дня недели, нумерация начинается с воскресенья - нулевой день недели

```javascript
const now = new Date();

console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 9
console.log(now.getDate()); // 25
console.log(now.getDay()); // 2
```

Все значения возвращаются в соответствии с местным часовым поясом, если требуется получить дату в соответствии с UTC, к методу добавляем UTC, например: `.getUTCHours()`

`.getTimezoneOffset()` - Метод получает разницу между часовым поясом и UTC, **в минутах**

```javascript
const now = new Date();

console.log(now.getTimezoneOffset()); // -180
```

`.getTime()` - получает `timestamp` - колличество миллисикунд прошедшие с 1970 года. Так же это число можно конвертировать в дату поместив в `Date()`

```javascript
const now = new Date();

console.log(now.getTime()); // 1666726550433
console.log(new Date(now.getTime())); // Tue Oct 25 2022 22:36:54 GMT+0300 (Восточная Европа, летнее время)
```

**Результаты в консоли не ориентируются на локальные данные, она ориентируется на UTC**

`.setHours()` - установить часы, можно передать один аргумент что изменит только часы, но можно и более, второй аргумент установит минуты, и так далее (применяется редко)

Присутствует так же автоисправление при установке более чем 24 часа, все что идет свыше, перебрасывается на следующие сутки

```javascript
const now = new Date();

now.setHours(18);

console.log(now); // Tue Oct 25 2022 18:40:54 GMT+0300 (Восточная Европа, летнее время)
```

Для вычеслений разницы, измерения пройденого временни и прочих действий с датой используется `timestamp`

```javascript
let start = new Date();

for (let i = 0; i < 10000000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисикунд`); // Цикл отработал за 7 миллисикунд
```

## 03 - Параметры документа, окна и работа с ними

Существует 3 понятия: `document` - тело документа, `window` - окно в котором отображается документ, `screen` - экран монитора.

Элементы на странице имеют много различных параметров.

**Только чтение**
`.clientWidth`, `.clientHeight` - Получить ширину\высоту элемента включая padding, но без border и полосы прокрутки. CSS свойство border-box влияет на результат значений.

`.offsetWidth`, `.offsetHeight` - Получить ширину\высоту учетом полосы прокрутки, но уже включает margin и border

`.scrollWidth`, `.scrollHeight` - Получить всю высоту элемента (которая прокручивается), полоса прокрутки не учитывается

**Возможна модификация**
`.scrollTop`, `.scrollLeft` - Получает значение сколько было прокрученно контента сверху\слева

`.getBoundingClientRect()` - Получает все координаты которые есть у элемента

```javascript
const box = document.querySelector(".box"); // Воображаемый элемент на странице

box.getBoundingClientRect(); // {x: 640, y: 50, width: 400, height: 350, top: 50, …}
```

`.scrollBy()` - скролит страницу относительно текущего положения

`.scrollTo()` - скролит страницу относительно всей страницы

### Получение примененных стилей

Существует метод позволяющий получить стили элемента которые были к нему применены. Используется для разных проверок, например виден ли блок на странице или нет `window.getComputedStyle()` - в аргумент передается элемент у которого необходимо узнать стили, вторым агрументом выступает обращение к псевдоэлементу (если есть) доступно только для чтения.
