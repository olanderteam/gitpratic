const buttons = document.querySelectorAll(".color-btn");
const resetButton = document.getElementById("reset");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        document.body.style.backgroundColor = button.getAttribute("data-color");
    });
});

if (resetButton) {
    resetButton.addEventListener("click", function () {
        document.body.style.backgroundColor = "";
    });
}