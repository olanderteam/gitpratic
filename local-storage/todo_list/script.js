const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const newTodo = todoInput.value.trim();
    if (newTodo !== "") {
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
      todoInput.value = "";
    }
  });
}

function renderTodos() {
  if (!todoList) return;
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      renderTodos();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}


