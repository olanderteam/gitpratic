// STEP 1: Create a base array named fruits with some items like "apple", "banana", "cherry".
// Selecting DOM elements (note the selector strings must be quoted)
const primaryBtn = document.querySelector('button'); // first <button> on the page
const secondaryBtn = document.getElementById('btnById');
const dangerBtn = document.getElementsByClassName('btnByClass')[0];

const message = document.getElementById('message');
const messageTwo = document.getElementById('message2');
const listItems = document.getElementsByTagName('li'); // corrected variable name to plural
const allButtons = document.querySelectorAll('button'); // use querySelectorAll to get all buttons

// Log elements; ensure names are correct and add commas between items
console.log(
    primaryBtn,
    secondaryBtn,
    dangerBtn,
    message,
    messageTwo,
    listItems,
    allButtons
);
