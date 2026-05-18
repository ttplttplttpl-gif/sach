const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const newLi = document.createElement("li");

    const taskText = document.createTextNode(todoText + " ");
    newLi.appendChild(taskText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "[X]";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.backgroundColor = "#dc3545";
    deleteBtn.style.padding = "2px 6px";
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(newLi);
    });

    newLi.appendChild(deleteBtn);
    todoList.appendChild(newLi);

    todoInput.value = "";
    todoInput.focus();
  } else {
    alert("Vui lòng nhập tên công việc!");
  }
});
