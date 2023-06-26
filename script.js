const inputTask = document.querySelector(".input-task");
const tasks = document.querySelector(".tasks");
const btnRegister = document.querySelector(".btn-register");

const todoList = [];

function RegisterTask(e) {
  e.preventDefault()
  let task = inputTask.value;
  if (task !== "") {
    todoList.push(task);
    renderTask();
  }
  inputTask.value = "";
}

function renderTask() {
  tasks.innerHTML = "";
  todoList.map((task, index) => {
    const li = document.createElement("li");
    li.innerHTML += `${
      index + 1
    } - ${task} <button onclick="delTask(${index})">Deletar</button> <button onclick="editTask(${index})">Editar</button>`;
    tasks.appendChild(li);
  });
}

function editTask(index) {
  const inputTask = document.createElement("input");
  const buttonSave = document.createElement("button");
  const itemTask = tasks.childNodes[index];
  buttonSave.textContent = "Salvar";
  inputTask.type = "text";
  inputTask.value = todoList[index];
  buttonSave.onclick = function () {
    todoList[index] = inputTask.value;
    renderTask();
  };
  itemTask.innerHTML = "";
  itemTask.appendChild(inputTask);
  itemTask.appendChild(buttonSave);
}

function delTask(index) {
  todoList.splice(index, 1);
  renderTask();
}

btnRegister.addEventListener("click", RegisterTask);
