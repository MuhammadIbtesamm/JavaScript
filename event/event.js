let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button was clicked");
    div.style.backgroundColor = "Red";
}

btn1.ondblclick = () => {
    div.style.backgroundColor = null;
}

let div = document.querySelector("#box");
div.onmouseover = () => {
    console.log("Mouse was over!");
}

//event listner
btn2.addEventListener("click", () => {
    console.log("Button 2 was clicked- Handler 1");
})

btn2.addEventListener("click", () => {
    console.log("Button 2 was clicked- Handler 2");
})

btn2.addEventListener("click", () => {
    console.log("Button 2 was clicked- Handler 3");
})

const handler4 = () => {
    console.log("Button 2 was clicked- Handler 4");
}

btn2.addEventListener("click", handler4);

//remove event listner
btn2.removeEventListener("click", handler4);

//Toggle
let modeBtn = document.querySelector("#mode");
let currentMode = "light";
let body = document.querySelector("body")

modeBtn.addEventListener("click", () => {
    if(currentMode == "light"){
        currentMode ="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});