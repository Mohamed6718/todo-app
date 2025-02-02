document.getElementById("add-task").addEventListener("click", function () {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("task-list");

    // Create a new task item
    let taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Add a delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    // Add a click event to mark as completed
    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });

    // Append elements
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
});
