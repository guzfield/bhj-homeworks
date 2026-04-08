const taskForm = document.getElementById('tasks__form');
const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTaskElement(taskText) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;
    
    const removeBtn = document.createElement('a');
    removeBtn.className = 'task__remove';
    removeBtn.textContent = '×';
    removeBtn.href = '#';
    
    removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        taskDiv.remove();
    });
    
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(removeBtn);
    
    return taskDiv;
}

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        return;
    }
    
    const taskElement = createTaskElement(taskText);
    tasksList.appendChild(taskElement);
    taskInput.value = '';
}

taskForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});