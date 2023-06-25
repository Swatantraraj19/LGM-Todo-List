const todoInput = document.getElementById('todo-input');
    const addbtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    addbtn.addEventListener('click', function() {
      const task = todoInput.value;
      if (task !== '') {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
          <input type="checkbox">
          <span>${task}</span>
          <btn class="btn delete-btn">Delete</btn>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    });

    todoList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const todoItem = event.target.parentElement;
        todoList.removeChild(todoItem);
      }
    });