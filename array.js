let studentMarks = [35, 38, 42, 45, 48];

console.log(studentMarks);

console.log(studentMarks.length); //size of array = 5

//looping over an array
let heroes = ['ironman', 'spiderman', 'captain america', 'thor', 'hulk'];
for (let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
//for of loop
for(let city of cities){
    console.log(city);
}

//For a given array with marks of students -> [85, 97, 37, 76, 60]
//`calculate the average of the marks of the students

let marks = [85, 97, 37, 76, 60];
let total = 0;
for(let mark of marks){
    total += mark;
}
let average = total/marks.length;
console.log(`Average marks of students: ${average}`);   

//for a given array with price of 5 items -> [250, 645, 300, 900, 50]
//all items have offer of 10% off on them. Change the array to store final price after
//applying offer

let prices = [250, 645, 300, 900, 50];
for (let i=0; i<prices.length; i++){
    let discount = prices[i]/10;
    prices[i] = prices[i] - discount;
}
console.log(prices);

//ARRAY METHODS
let food = ['biryani', 'pulao', 'karahi', 'nihari', 'korma'];
food.push('kabab'); //add element at the end
console.log(food); //['biryani', 'pulao', 'karahi', 'nihari', 'korma', 'kabab']

food.pop(); //remove element from the end
console.log(food); //['biryani', 'pulao', 'karahi', 'nihari', 'korma']

console.log(food.toString()); //convert array to string

let marvel_heros = ['ironman', 'spiderman', 'captain america', 'thor', 'hulk'];
let dc_heros = ['batman', 'superman']

let heros = marvel_heros.concat(dc_heros); //concatenate two arrays
console.log(heros); //['ironman', 'spiderman', 'captain america', 'thor', 'hulk', 'batman', 'superman']

marvel_heros.unshift('black widow'); //add element at the start
console.log(marvel_heros); //['black widow', 'ironman', 'spiderman', 'captain america', 'thor', 'hulk']

dc_heros.shift(); //remove element from the start
console.log(dc_heros); //['superman']