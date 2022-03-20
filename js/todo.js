const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveToDo();
}
function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  li.prepend(span);
  li.append(btn);
  todoList.append(li);
  btn.addEventListener("click", deleteToDo);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoOj = {
    id: Date.now(),
    text: newToDo,
  };
  todos.push(newToDoOj);
  saveToDo();
  paintToDo(newToDoOj);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo);
  parseToDo.forEach(paintToDo);
  todos = parseToDo;
}
