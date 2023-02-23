let example1 = document.querySelector("p");
example1.textContent = "🤗" + example1.textContent + "😋";
console.log(example1);

let example2 = document.querySelector(".example-class");
example2.style.backgroundColor = "red";
example2.style.color = "white";
console.log(example2);


let example3 = document.querySelector("#example-id");
example3.style.backgroundImage = "url(photo.avif)" ;
console.log(example3);

let example4 = document.querySelector("p:nth-child(4");
example4.style.width = "200px";
example4.style.height = "200px";
example4.style.transform = "rotate(-45deg)";
example4.style.margin = "30px";

console.log(example4)


//события
let helloBtn = document.querySelector("#hello");
helloBtn.addEventListener("click", function() { //клик , кторая ждет
  alert("hello!");//надпись которая выводит
})

//кнопку дать значение

let byeBth = document.querySelector("#bye");
byeBth.addEventListener("click", function(){
    alert("Bye");
});




