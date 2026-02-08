const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn");
const userDisplay = document.getElementById("userDisplay");

const savedName = localStorage.getItem("username");
if (savedName) {
    userDisplay.textContent = `Hi again, ${savedName}`;
}

if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const value = nameInput.value;
        localStorage.setItem("username", value);
        userDisplay.textContent = value;
    });
}

const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
}

if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        let currentTheme = body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
    });
}