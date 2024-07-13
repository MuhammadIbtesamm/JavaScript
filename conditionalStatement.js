//Conditional Statement

let age = 20;

//IF STATEMENT
if(age >= 18){
    console.log("You are eligible to vote");
}
if (age < 18){
    console.log("You are not eligible to vote");
}

//IF ELSE STATEMENT
let mode = "light";
let color;

if(mode === "light"){
    color = "white";
}else{
    color = "black";
}
console.log(color); //Output = white

//IF ELSE IF STATEMENT
let screenMode = "dark";
let colour;
if(screenMode === "light"){
    colour = "white";
}else if(screenMode === "grey"){
    colour = "grey";
}else{
    colour = "black";
}
console.log(colour); //Output = black

//ALERT
alert("Hello World"); //one time alert message

//PROMPT
let yourName = prompt("What is your name?"); //ask for input
console.log(yourName);  

//PRACTICE PROBLEM 
// Q: Get user to input a number using prompt("Enter a Number"). Check if the number is a multiple of 5 or not.
let number= prompt("Enter a number: ");
remainder = number % 5;
if(remainder === 0){
    console.log(number, "is a multiple of 5")
}else{
    console.log(number, "is not a multiple of 5")
}

//PRACTICE PROBLEM
//Q Write a code which can give grades to students accorfing to their scores:
// 80 - 100 = A
// 70 - 79 = B
// 60 - 69 = C
// 50 - 59 = D
// <50 = F

let score = prompt("Enter your score: ");
let grade;
if (score >= 80 && score <=100){
    grade = "A";
}else if(score >= 70 && score <= 79){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade = "D";
}else{
    grade = "F";
}
console.log("Your grade is", grade);