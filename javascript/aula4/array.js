// // Exemplos de operações com arrays
// const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
// console.log('fruits =', fruits);

// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[1]);

// fruits[1] = 'Grapes';
// console.log('after replace =', fruits);
// console.log('length =', fruits.length);

// fruits.push('Mango');
// console.log('after push =', fruits);

// fruits.pop();
// console.log('after pop =', fruits);

// fruits.shift();
// console.log('after shift =', fruits);

// fruits.unshift('Apple');
// console.log('after unshift =', fruits);

// fruits.splice(1, 1, 'Kiwi');
// console.log('after splice replace =', fruits);

// fruits.splice(2, 0, 'Lemon', 'Peach');
// console.log('after splice insert =', fruits);

const numbers = [1, 2, 3, 4, 5];
console.log('numbers =', numbers);
const doubled = numbers.map(num => num * 2);
console.log('doubled =', doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('evenNumbers =', evenNumbers); 
