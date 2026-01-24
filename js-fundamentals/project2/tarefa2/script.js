const scoreInput = document.getElementById("scoreInput");
const gradeBtn = document.getElementById("gradeBtn");
const result = document.getElementById("result");

gradeBtn.addEventListener("click", () => {
    const input = Number(scoreInput.value);
    if (Number.isNaN(input) || input < 0 || input > 100) {
        result.textContent = "Please enter a valid score between 0 and 100";
    } else {
        let grade;
        if (input >= 90) {
            grade = "A";
        } else if (input >= 80) {
            grade = "B";
        } else if (input >= 70) {
            grade = "C";
        } else if (input >= 60) {
            grade = "D";
        } else {
            grade = "F";
        }
        result.textContent = `Your grade is: ${grade}`;
    }
}); 