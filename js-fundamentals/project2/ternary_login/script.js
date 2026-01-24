const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    let age = ageInput.valueAsNumber;
    
    if (Number.isNaN(age)) {
        result.textContent = "Please provide valid input";
        return;
    }
    
    let label = age >= 18 ? "Adult" : "Minor";
    result.textContent = label;
});