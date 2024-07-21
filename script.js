document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Function to save tasks to Local Storage
  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((taskItem) => {
      tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to add a new task
  function addTask(taskText, save = true) {
    // creat a new list element
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Assign an event to the remove button to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      saveTasks();
    };

    listItem.appendChild(removeButton); // Append the remove button to the list item
    taskList.appendChild(listItem); // Append the list item to the task list

    taskInput.value = ""; // Clear the task input field

    // Save tasks to Local Storage if the save parameter is true
    if (save) {
      saveTasks();
    }
  }

  // Add event listener to the add button
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(taskText);
  });

  // Add event listener to the input field for 'Enter' key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      addTask(taskText);
    }
  });

  // Load tasks from Local Storage on page load
  loadTasks();
});
