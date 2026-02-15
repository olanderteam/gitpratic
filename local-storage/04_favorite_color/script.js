const colorValue = document.getElementById("colorInput");
const button = document.getElementById("saveColorBtn");
const colorDisplay = document.getElementById("ColorDisplay");

const saveColor = localStorage.getItem("favoriteColor");
if (saveColor) {
    colorDisplay.textContent = (saveColor);
    colorDisplay.style.color = (saveColor);
}

button.addEventListener("Click",() => {
const color = colorValue.vale
localStorage.setItem("favoriteColor", color);
colorDisplay.textContent = color;
colorDisplay.style.color = color;

})

