function myFunction() {
  var newTodo = document.getElementById("newTodo");
  var task = newTodo.value.trim();
  if (task !== "") {
    var listItem = document.createElement("li");
    listItem.innerHTML = `<span>${task}</span> <button class="Complete" onclick="completeTask(this)"></button>`;
    document.getElementById("todoList").appendChild(listItem);
    taskInput.value = "";
  } else {
    alert("Please enter a task!");
  }
}

function completeTask(button) {
  var taskText = button.previousElementSibling;
  taskText.classList.toggle("completed");
  button.textContent = "";
  button.setAttribute("onclick", "removeTask(this)");
}

function removeTask(button) {
  var listItem = button.parentElement;
  listItem.remove();
}
