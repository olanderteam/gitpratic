// STEP 1: Create a base array named fruits with some items like "apple", "banana", "cherry".
const fruits = ["apple", "banana", "cherry"];

// Selecting DOM elements (note the selector strings must be quoted)
const primaryBtn = document.querySelector('button'); // first <button> on the page
const secondaryBtn = document.getElementById('btnById');
const dangerBtn = document.getElementsByClassName('btnByClass')[0];

const message = document.getElementById('message');
const messageTwo = document.getElementById('message2');
const listItems = document.getElementsByTagName('li');
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

function showPrimaryMessage() {
    if (message) {
        message.innerHTML = "Primary button clicked";
        message.classList.add("highLight");
    }
    console.log("Primary button clicked");
}

function showSecondaryMessage() {
    if (messageTwo) {
        messageTwo.innerText = "Secondary button clicked";
        messageTwo.classList.toggle("highLight");
    }
    console.log("Secondary button clicked");
}

function dangerAlert() {
    alert("Danger button pressed");
    console.log("Danger button pressed");
}

function countListItems() {
    const listCount = listItems.length;
    console.log(listCount);
}

primaryBtn && primaryBtn.addEventListener("click", showPrimaryMessage);
secondaryBtn && secondaryBtn.addEventListener("click", showSecondaryMessage);
dangerBtn && dangerBtn.addEventListener("click", dangerAlert);

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
    });
});
