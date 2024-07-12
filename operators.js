//ARTIMETIC OPERATOR
let FirstValue = 20;
let SecondValue = 10;

//Addition
console.log(FirstValue + SecondValue); //Output = 30

//Subtraction
console.log(FirstValue - SecondValue); //Output = 10

//Multiplication
console.log(FirstValue * SecondValue); //Output = 200

//Division
console.log(FirstValue / SecondValue); //Output = 2

//Modulus
console.log(5 % 2); //Output = 1

//Exponentiation
console.log(5 ** 2); //Output = 25

//Increment
console.log(FirstValue++); //Output = 20 (Post Increment)
console.log(FirstValue); //Output = 21
console.log(++FirstValue); //Output = 22 (Pre Increment)

//Decrement
console.log(SecondValue--); //Output = 10 (Post Decrement)
console.log(SecondValue); //Output = 9
console.log(--SecondValue); //Output = 8 (Pre Decrement)

//ASSIGNMENT OPERATOR
let x = 10; //it means 10 is store in x

console.log(x); //Output = 10

x+=1; //it means 1 is added to x
console.log(x); //Output = 11


//COMPARISION OPERATORS
let a = 10;
let b = "20";

//Check a and b are equal
console.log(a == b); //Output = false

//Check a and b are not equal
console.log(a != b); //Output = true

//Check a is greater than b
console.log(a > b); //Output = false

//Check a is less than b
console.log(a < b); //Output = true

//Check a is equal to b also the data types are equal
console.log(a === b); //Output = false

//Check a is not equal to b or the data types are not equal
console.log(a !== b); //Output = true

//LOGICAL OPERATORS
let c = 6;
let d = 5;

let cond1 = c > d; //True
let cond2 = c === 6; //True

//AND (Give 'True' Output when both conditions are true)
console.log(cond1 && cond2); //Output = true (AND)

//OR (Give 'True' Output when any one condition is true)
console.log(cond1 || cond2); //Output = true (OR)

