const URL = "https://cat-fact.herokuapp.com/facts";
const para = document.querySelector("#fact");
const para2 = document.querySelector("#another-fact");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn-another");

const getFacts = async () => {
    console.log("getting data...")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text);
    para.innerText = data[0].text;
};

btn.addEventListener("click", getFacts);

function getAnotherFacts() {
  fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        para2.innerText = data[2].text;
    })
};
btn2.addEventListener("click", getAnotherFacts);