const addBtn = document.getElementById('add-task-btn');
const input = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.innerHTML = `<input type="checkbox" /> ${taskText}`;
  todoList.appendChild(li);
  input.value = ""; // Clear input
});
