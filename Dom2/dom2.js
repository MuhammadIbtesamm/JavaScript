//Attributes
let div = document.querySelector("div");
console.log(div.getAttribute("id"));

let para = document.querySelector("p")
console.log(para.getAttribute("class"));

//setAttributes
console.log(para.setAttribute("class", "newClass"));

//STYLE
div.style.backgroundColor = "purple";

div.style.fontSize = "26px";

//insert Elements

let newBtn = document.createElement("Button");
newBtn.innerText = "Click";
div.append(newBtn);

//append is used to add element at the end of the parent element
//prepend is used to add element at the start of the parent element
//before is used to add element before the parent element
//after is used to add element after the parent element


//Delete Elements
para.remove(); //removes the element from the DOM

//PRACTICE PROBLEM
// Create a new button element. Give it a Text "Click Me", background color of red and text color 
//of white
//Insert the button as the first element inside the body tag.


let anotherBtn = document.createElement("button");
anotherBtn.innerText = "Click ME";
anotherBtn.style.backgroundColor = "red";
anotherBtn.style.color = "white";
let body = document.querySelector("body");
body.prepend(anotherBtn);