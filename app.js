const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addBtn.addEventListener("click", function () {
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const newLi = document.createElement("li");
    newLi.textContent = todoText;

    todoList.appendChild(newLi);

    todoInput.value = "";

    todoInput.focus();
  } else {
    alert("Vui lòng nhập tên công việc trước khi nhấn Thêm!");
  }
});
