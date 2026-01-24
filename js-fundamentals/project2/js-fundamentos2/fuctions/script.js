// ==========================
// TRADITIONAL FUNCTIONS
// ==========================

// STEP 1: Create a function named sayHello that logs 'Hello!'

// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result

// STEP 3: Create a function greetUser that takes a name and says hello

// STEP 4: Create a function that multiplies two numbers and logs it

// STEP 5: Create a function that logs your favorite quote

// STEP 6: Call all the functions you created above

function sayHello() {
    console.log("Hello!");
}
sayHello();

function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(1, 2);

function greetUser(name) {
    console.log("Hello, " + name);
}
greetUser("Talita, i miss you");

function multiplyNumbers(a, b) {
    console.log(a * b);
}

multiplyNumbers(1, 2);

function logFavoriteQuote(quote) {
    console.log(quote);
}

logFavoriteQuote("This too shall pass");

// ==========================
// FUNCTION EXPRESSIONS
// ==========================

// STEP 7: Create a function expression named sayBye that logs 'Bye!'

// STEP 8: Create a function expression named subtractNumbers that subtracts 2 numbers

// STEP 9: Create a function expression named greetAgain that takes a name and says hello again

// STEP 10: Create a function expression named divideNumbers that divides 2 numbers

// STEP 11: Create a function expression named bestFood that logs your favorite food

// STEP 12: Call all the function expressions you created above

const sayBye = function () {
 console.log("bye")
};
sayBye();

const subtractNumbers = function(a, b) {
    console.log(a - b);
}; 
subtractNumbers(2, 4); 

const greetAgain = function (name) {
  console.log(`Hello again, ${name}!`);
};

greetAgain("Gabe");


const divideNumbers = function (num1, num2) {
    console.log(num1 / num2);
}
divideNumbers(10, 2);

const bestFood = function (food) {
    console.log(`My favorite food is ${food}!`);
}
bestFood("pasta"); 


// const favoriteQuote = logFavoriteQuote("Hi");

// favoriteQuote();

// function logFavoriteQuote() {
//   return function (quote) {
//     console.log("whatever this quote is");
//   };

// }

// ==========================
// ARROW FUNCTIONS (ES6)
// ==========================

// STEP 13: Create an arrow function named welcome that logs 'Welcome!'

const welcome = () => {
    console.log("Welcome")

} 
welcome();

// STEP 14: Create an arrow function named square that squares a number
const square = (b) => {
    console.log(b * b);
}

square(5); 

const sayName = (name) => {
    console.log(`My name is ${name}`);
} 
sayName("Talita"); 

const cube = (n) => console.log(n * n * n);
cube(3);

setTimeout(function () {
    console.log("This is anonymous after 1 second");
}, 1000);