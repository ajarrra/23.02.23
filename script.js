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
example4.style.transform = "rotate(-45deg)"

console.log(example4)
