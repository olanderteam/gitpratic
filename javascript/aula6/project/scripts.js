document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addTaskButton");

    if (!taskInput || !taskList) return;

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskItem.classList.add("task");

        taskItem.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }

    if (addButton) {
        addButton.addEventListener("click", addTask);
    }

    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") addTask();
    });
});