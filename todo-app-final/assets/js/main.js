// Features:
// 1) Add Task => Done
// 2) Delete Task => Done
// 3) change Task state => Done
// 4) delete All Tasks => Done
// 5) Tasks state counters => Done
// 6) save tasks in local storage => Done
// 7) search by task name => Done

// #region Start  Todo functionality seperated closed

// Caching the needed Dom Elements
const tasksForm = window.document.querySelector('.tasks-form');
const taskInput = tasksForm.taskinput;
const tasksList = window.document.querySelector('.tasks-list');
const clearTasksBtn = window.document.querySelector('.clear-tasks-btn');

const remainingTasks = window.document.querySelector('.remaining-tasks');
const completedTasks = window.document.querySelector('.completed-tasks');
const totalTasks = window.document.querySelector('.total-tasks');

const searchForm = window.document.querySelector('.search-form');
const searchInput = searchForm.searchinput;

const saveTasks = getTasksFromLocalStorage();

const tasks = saveTasks || [];

if (tasks.length > 0) {
	tasks.forEach((task) => createTask(task));
	clearTasksBtn.classList.remove('d-none');
}

function saveTasksToLocalStorage() {
	window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
	return JSON.parse(window.localStorage.getItem('tasks'));
}

function deleteTask(taskId) {
	const currentTaskIndex = tasks.findIndex((task) => {
		return task.id === taskId;
	});
	tasks.splice(currentTaskIndex, 1);
	calcTasksStatus();

	if (tasks.length === 0) {
		clearTasksBtn.classList.add('d-none');
	}
	saveTasksToLocalStorage();
}

function changeTaskStatus(taskId, taskStatus) {
	// console.log(taskId, taskStatus);
	const currentTask = tasks.find((task) => task.id === taskId);
	currentTask.isCompleted = taskStatus;

	calcTasksStatus();
	saveTasksToLocalStorage();
}

function calcTasksStatus() {
	const numTotalTasks = tasks.length;
	const numCompletedTasks = tasks.filter((task) => task.isCompleted).length;
	const numRemaingTasks = numTotalTasks - numCompletedTasks;

	totalTasks.textContent = numTotalTasks;
	completedTasks.textContent = numCompletedTasks;
	remainingTasks.textContent = numRemaingTasks;
}

function createTask(taskInfo) {
	// const id  = taskInfo.id;
	// const name = taskInfo.name;
	// const isCompleted = taskInfo.isCompleted;

	const { id, name, isCompleted } = taskInfo;

	const taskItem = window.document.createElement('li');
	taskItem.className =
		'task-list__item shadow border border-2 border-secondary rounded py-2 px-3 d-flex align-items-center gap-3 display-6';
	taskItem.id = id;

	const taskInput = window.document.createElement('input');
	// taskInput.type = 'checkbox';
	taskInput.setAttribute('type', 'checkbox');
	taskInput.setAttribute('id', `task-${id}`);

	taskInput.addEventListener('change', () => {
		const taskStatus = taskInput.checked;
		changeTaskStatus(id, taskStatus);
	});

	const taskLabel = window.document.createElement('label');
	taskLabel.className = 'task-label flex-grow-1 d-block p-1 rounded';
	taskLabel.setAttribute('for', `task-${id}`);
	// taskLabel.htmlFor = `task-${id}`;
	taskLabel.textContent = name;

	const taskDeleteButton = window.document.createElement('button');
	taskDeleteButton.className = 'btn btn btn-danger';
	taskDeleteButton.innerHTML = 'Delete &times;';

	taskDeleteButton.addEventListener('click', () => {
		// taskDeleteButton.closest('.task-list__item').remove();
		taskItem.remove();
		deleteTask(id);
	});

	taskItem.append(taskInput);
	taskItem.append(taskLabel);
	taskItem.append(taskDeleteButton);

	tasksList.append(taskItem);
	calcTasksStatus();
}

tasksForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const enteredTaskName = taskInput.value.trim();
	// console.log(enteredTaskName);

	if (!enteredTaskName) {
		alert('please insert a valid task name');
		return;
	}

	const newTask = {
		id: Date.now(),
		name: enteredTaskName,
		isCompleted: false,
	};

	tasks.push(newTask);
	saveTasksToLocalStorage();
	createTask(newTask);
	tasksForm.reset();

	if (tasks.length === 1) {
		clearTasksBtn.classList.remove('d-none');
	}
});

clearTasksBtn.addEventListener('click', () => {
	tasksList.innerHTML = '';
	tasks.length = 0;
	clearTasksBtn.classList.add('d-none');
	calcTasksStatus();
	saveTasksToLocalStorage();
});

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const enteredSearchValue = searchInput.value.trim();
	const tasksElements = window.document.querySelectorAll('.task-list__item');

	if (!enteredSearchValue) {
		alert('please insert avalid search word');
		tasksElements.forEach((taskEl) => taskEl.classList.remove('d-none'));

		return;
	}

	const searchedTasksIds = tasks
		.filter((task) => task.name.includes(enteredSearchValue))
		.map((task) => task.id);

	tasksElements.forEach((taskEl) => {
		const taskId = Number(taskEl.id);

		if (searchedTasksIds.includes(taskId)) {
			taskEl.classList.remove('d-none');
		} else {
			taskEl.classList.add('d-none');
		}
	});

	console.log(enteredSearchValue);
});

// #endregion

// #region Start   auto update Current year functionality
// Caching the needed Dom Elements
const currentYearElements = window.document.querySelectorAll('.current-year');
const currentYear = new Date().getFullYear();

currentYearElements.forEach((ele) => {
	ele.textContent = currentYear;
});
// #endregion

// const tasks = [
// 	{ id: 1692647710150, name: 'gfhfgh', isCompleted: false },
// 	{ id: 1692647711864, name: 'dfgd', isCompleted: false },
// ];

// // tasks.length = 0;
// // while (tasks.length) {
// //   tasks.pop();
// // }
// // tasks.splice(0,tasks.length);

// console.log(tasks);

// const tasks = [
// 	{ id: 1692647710150, name: 'css', isCompleted: true },
// 	{ id: 1692647711864, name: 'html', isCompleted: false },
// ];

// function changeTaskStatus(taskId, taskStatus) {
// 	console.log(taskId, taskStatus);

// 	const currentTask = tasks.find((task) => {
// 		return task.id === taskId;
// 	});

// 	currentTask.isCompleted = taskStatus;
// 	console.log(currentTask);
// }

// changeTaskStatus(1692647710150, false);

// JSObject => JsonFromat ; => JSON.stringfy(JSObject)
// JsonFromat => JSObject ; =>  JSON.parse(JsonFromat)

// -------------------
// const tasks = [
// {id: 1692647710150, name: 'study css', isCompleted: true},
// {id: 1692647711864, name: 'study html', isCompleted: true},
// {id: 1692647711855, name: 'JS', isCompleted: false}
// ]

// const searchedTasksIds = tasks.filter((task) => task.name.includes('study')).map(task => task.id);

// console.log(filteredTasksId);

// function deleteTask(taskId) {

// const currentTaskIndex = tasks.findIndex((task) => {
// 	return task.id === taskId;
// });
//   tasks.splice(currentTaskIndex,1)
//   console.log(currentTaskIndex);
//   console.log(tasks);
// }

// deleteTask(1692647710150);

// const numTotalTasks = tasks.length;
// const numCompletedTasks = tasks.filter(task => task.isCompleted).length;
// const numRemaingTasks = numTotalTasks - numCompletedTasks;

//   console.log(numTotalTasks);
//   console.log(numCompletedTasks);
//   console.log(numRemaingTasks);

// function changeTaskStatus(taskId, taskStatus) {
// 	console.log(taskId, taskStatus);

//   const currentTask = tasks.find((task) => {
//    return task.id === taskId;
//   })

//   currentTask.isCompleted = taskStatus;
//   console.log(currentTask);

// }

// changeTaskStatus(1692647710150,false);
