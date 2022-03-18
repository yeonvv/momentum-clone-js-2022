const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todo;
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
  todos.push(newToDo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  paintToDo(newToDo);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo !== null) {
  const parseToDo = JSON.parse(savedToDo);
  parseToDo.forEach(paintToDo);
  todos = parseToDo;
}
