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


let addParagraphBtn = document.querySelector("#add-paragraph");
addParagraphBtn.addEventListener("click", function () {
    let article = document.querySelector("article");
    let newParagraph = document.createElement("p");
    newParagraph = textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nobis saepe a quibusdam, doloribus iure  dolores";
    article.append(newParagraph);
})







