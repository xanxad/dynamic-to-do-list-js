document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    // creat a new list element
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Assign an event to the remove button to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton); // Append the remove button to the list item
    taskList.appendChild(listItem); // Append the list item to the task list

    taskInput.value = ""; // Clear the task input field
  }

  // Add event listener to the add button
  addButton.addEventListener("click", addTask);

  // Add event listener to the input field for 'Enter' key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
