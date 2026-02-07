const nameInput = document.getElementById("nameInput");
const saveBtn = document.getElementById("saveBtn")
const userDisplay = document.getElementById("userDisplay");

const savedName = localStorage.getItem("username")
if (savedName){
    userDisplay.textContent = savedName;
}

saveBtn.addEventListener("click", () => {
    const value = nameInput.value;
    localStorage.setItem("username", value);
    userDisplay.textContent = value;

});