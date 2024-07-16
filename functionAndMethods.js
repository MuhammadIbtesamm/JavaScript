function print(){
    console.log("Hello World");
}
print();

function parameterFunction(name){
    console.log("Hello "+name);
}
parameterFunction("Ibtesam");

function add(a,b){
    console.log(a+b);
}
add(5,6);

function sum(x, y){
    s = x + y;
    return s;
}
let val = sum(9, 26);
console.log(val);

//Parameters are like local variable in function Cant be accessed outside the function  

//ARROW FUNCTION
const mul =(a, b) => {
    m = a * b;
    return m;
}
console.log(mul(5, 6));

//Create a function using the "function" keyword that takes a string as an argument 
// & return the number of vowels in the string

function myFunction(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]== 'i' || str[i]=='u'){
            count++;
        }
    }
    return count;
}
console.log(myFunction("Ibtesam"));

//Same function using arrow function

const arr = (str) => {
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='o' || str[i]== 'i' || str[i]=='u'){
            count++;
        }
    }
    return count;
}
console.log(arr("Sindh Madresatul Islam Universtiy" ));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.forEach(function(element){
    console.log(element);
});

//for a given array of number, print the square of each value using forEach loop.

let nums = [2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num*num);
});

//MAP

nums.map((val) => {
    console.log(val);
});