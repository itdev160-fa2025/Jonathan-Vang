let tasks = [];

const taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.id = task.id;
    taskElement.textContent = task.name;

    document.getElementById('active-list').appendChild(taskElement);
}

function addTask(event) {
    event.preventDefault();
    const taskName = document.getElementById('input-task').value.trim();

    if (taskName) {
        const id = 'task-' + tasks.length;
        const task = new Task(id, taskName, taskStatus.active);
        tasks.push(task);
        addTaskElement(task);
        document.getElementById('input-task').value = '';
    }
}

function completeTask(event) {
    const taskElement = event.target;
    const taskId = taskElement.id;

    const task = tasks.find(t => t.id === taskId);
    if (task && task.status === taskStatus.active) {
        task.status = taskStatus.completed;

        document.getElementById('active-list').removeChild(taskElement);
        document.getElementById('completed-list').appendChild(taskElement);
    }
}

function init() {
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
}

window.onload = init;
