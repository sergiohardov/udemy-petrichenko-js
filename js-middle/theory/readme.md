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
`event.target.classList.matches('button.btn')`
