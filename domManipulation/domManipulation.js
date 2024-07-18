//Create a H2 heading element with text "Hello JavaScript". Append 
// "from Ibtesam" to this using text.

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from Ibtesam";

console.log(h2.innerText);

//Create 3 divs with common class name "box". Access them and add some unique
//text to each of them

let divs = document.querySelectorAll(".box");
for(let i=0; i<divs.length; i++){
    divs[i].innerText = `New Unique Value ${i}`;
}