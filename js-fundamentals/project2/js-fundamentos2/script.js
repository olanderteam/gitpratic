const tempInput = document.getElementById("tempInput");
const button = document.getElementById("adviseBtn");
const paragraph = document.getElementById("result"); 

button.addEventListener("click", () => {
  const temp = Number(tempInput.value);  

  if(Number.isNaN(temp)) {
    paragraph.textContent = "Please enter a valid temperature";
    return;
  }

  if (temp >= 30) {
    paragraph.textContent = "It's hot, stay hydrated";
  } else if (temp >= 20) {
    paragraph.textContent = "It's warm, wear light clothes";
  } else {
    paragraph.textContent = "It's cold, wear warm clothes";
  }
})