//FOR LOOP
for (let i = 0; i < 5; i++){
    console.log("i = ", i);
}

//Caclulate sum of 1 to 5
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("sum = " + sum);

//WHILE LOOP
let j = 0;
while(j<=5){
    console.log("j = ", j);
    j++;
}

//DO WHILE LOOP
let k = 0;
do{
    console.log("k = ", k);
    k++;
}while(k<=5);

//FOR OF LOOP
let str = "Ibtesam";
for(let i of str){
    console.log(i);
}

let size = 0;
for(let val of str){
    size++;
}
console.log("Ibtesam has " +size+ " characters");

//FOR IN LOOP
let student = {
    name: "Ibtesam",
    age: 20,
    cgpa: 3.0,
    isPassed: true
};
for(let keys in student){
    console.log("keys", keys, "value", student[keys]);
}

//Print all even numbers from 0 to 100
for(let i = 1; i<=100; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//STRING
let str1 = "Ibtesam";

//find length of string
console.log(str1.length);

//find index of a character
console.log(str1[0]);

//Template literals
let sentance = `This is a Template Literals`;
console.log(sentance);

//template literal is used to access variables
let obj = {
    item: "ball pen",
    price: 20
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//String methods
let str2 = " a b c d e f "
console.log(str2.toUpperCase()); //convert to upper case

console.log(str2.toLowerCase()); //convert to lower case

console.log(str2.trim()); //remove spaces from start and end

console.log(str2.slice(2,));//remove characters from start to end

console.log(str2.concat(str1)); //concatenate two strings

//PRACTICE PROBLEM
// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, 
//followed by their full name and ending with the fullname length.

let fullName = prompt("Enter your name");
username = "@" + fullName + fullName.length;
console.log(username);