const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Digite uma tarefa");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";

  removeButton.addEventListener("click", function () {
    taskList.removeChild(li);
  });

  li.appendChild(removeButton);
  taskList.appendChild(li);

  taskInput.value = "";
}
