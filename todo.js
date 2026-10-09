//Task 8
let tasks = [];
const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");
const info = document.getElementById("todoInfo");

function render() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const span = document.createElement("span");
    span.textContent = task.text;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "danger";
    del.addEventListener("click", (e) => {
      e.stopPropagation();       
      tasks.splice(index, 1);
      render();
    });

    li.addEventListener("click", () => {
      task.done = !task.done;
      render();
    });

    li.append(span, del);
    list.appendChild(li);
  });
  const left = tasks.filter((t) => !t.done).length;
  info.textContent = tasks.length ? `${left} of ${tasks.length} tasks left` : "No tasks yet. Add your first one!";
}

function addTask() {
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  tasks.push({ text, done: false });
  input.value = "";
  input.focus();
  render();
}
document.getElementById("addTaskBtn").addEventListener("click", addTask);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") addTask(); });
render();
