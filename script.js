document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");
  const completedCounter = document.getElementById("Completed-Counter");
  const uncompletedCounter = document.getElementById("Uncompleted-Counter");

  function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
      alert("Please write down a task");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
      `;

    listContainer.appendChild(li);
    inputBox.value = ""; // Clear the input box after adding the task

    // Add event listener for the checkbox
    const checkbox = li.querySelector("input");
    checkbox.addEventListener("click", function () {
      li.classList.toggle("completed", checkbox.checked);
      updateCounter();
    });

    // Add event listener for the delete button
    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
      listContainer.removeChild(li);
      updateCounter(); // Update counter after deletion
    });

    // Add event listener for the edit button
    const editBtn = li.querySelector(".edit-btn");
    editBtn.addEventListener("click", function () {
      const taskSpan = li.querySelector("span");
      const update = prompt("Edit task:", taskSpan.textContent);
      if (update !== null && update.trim() !== "") {
        taskSpan.textContent = update.trim();
      }
    });

    updateCounter(); // Update counter when a new task is added
  }

  function updateCounter() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks =
      document.querySelectorAll("li").length - completedTasks;
    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
  }

  // Assuming you have a button to add tasks
  const addButton = document.getElementById("add-button");
  addButton.addEventListener("click", addTask);
});
