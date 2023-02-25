let example1 = document.querySelector("p");
example1.textContent = "🤗" + example1.textContent + "😋";
console.log(example1);

let example2 = document.querySelector(".example-class");
example2.style.backgroundColor = "red";
example2.style.color = "white";
console.log(example2);


let example3 = document.querySelector("#example-id");
example3.style.backgroundImage = "url(photo.avif)";
console.log(example3);

let example4 = document.querySelector("p:nth-child(4");
example4.style.width = "200px";
example4.style.height = "200px";
example4.style.transform = "rotate(-45deg)";
example4.style.margin = "30px";

console.log(example4)


//события
let helloBtn = document.querySelector("#hello");//НАШЛИ КНОПКУ
helloBtn.addEventListener("click", function () { //клик , кторая ждет(когда нажимаешь срабатывает)
    alert("hello!");//надпись которая выводит
})

//кнопку дать значение

let byeBth = document.querySelector("#bye");
byeBth.addEventListener("mousemove", function () {//когда наводишь срабатываешь
    alert("Bye");
});


let addParagraphBtn = document.querySelector("#add-paragraph");// в этой переменной лежит кнопка добавить параграф
addParagraphBtn.addEventListener("click", function () { //слушатель событий на клик , когда нажимаешь на кнопку выполняется функция
    let article = document.querySelector("article");//находим эл куда мы хотим добавить новый эл
    let newParagraph = document.createElement("p");// потом мы создаем этот элемент (можем поменять стили , содержимое)
    newParagraph = textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis saepe a quibusdam, doloribus iure  dolores";
    article.append(newParagraph);//потом добавляем туда куда мы хотим ее добавить
})



let list = document.createElement("ul"); //создает объект
document.body.append(list);
for (let i = 0; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = "example" + i;
    list.append(listItem);
}

let addList = document.querySelector("#add-list"); //кнопка которая добавляет элементы
addList.addEventListener("click", function () {
    let newList = document.createElement("li");
    newList.textContent = "lorem";
    list.append(newList);
});


//две кнопки одна уд др добавляет
let example1Btn = document.querySelector("#example-1");//находим первую кнопку
let example2Btn = document.querySelector("#example-2");//находим вторую кнопку
let example1Paragraph = document.querySelector("#example-1-target") //находим параграф с кот будем работать 

example1Btn.addEventListener("click", function () {//при нажатии на первую кнопку , выполнить функцию где берем параграф и задаем класс hidden
    example1Paragraph.className = "hidden"; //classname меняет название класса
});
example2Btn.addEventListener("click", function () { //тут при нажатии выполняется функция где берем параграф и задаем ему пустой класс ""
    example1Paragraph.className = "";
})

//hidded в css скрываем 


//одна кнопка если есть уд если нет доб
let toggleBtn = document.querySelector("#toggle");
let toggleParagraph = document.querySelector("#toggle-target");
toggleBtn.addEventListener("click", function () {
    toggleParagraph.classList.toggle("hidden");  //если нет доб если есть удаляет  
});




