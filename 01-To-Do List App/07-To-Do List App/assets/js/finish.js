// #region Start  Todo functionality seperated closed

// Caching the needed Dom Elements
let tasksForm = window.document.querySelector('.tasks-form');
let tasksList = window.document.querySelector('.tasks-list');
let clearTasksBtn = window.document.querySelector('.clear-tasks-btn');

let remainingTasks = window.document.querySelector('.remaining-tasks');
let completedTasks = window.document.querySelector('.completed-tasks');
let totalTasks = window.document.querySelector('.total-tasks');

let searchForm = window.document.querySelector('.search-form');

const tasks = getTasksFromLocalStorage() || [];

console.log(tasks);

if (tasks.length !== 0) {
	tasks.forEach((task) => {
		createTask(task);
	});

	calcStats();
	clearTasksBtn.classList.remove('d-none');
}

function saveTasksTolocalStorage() {
	window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
	const jsonTasks = window.localStorage.getItem('tasks');
	return JSON.parse(jsonTasks);
}

function calcStats() {
	const numOfTotalTasks = tasks.length;

	const numOfCompletedTasks = tasks.filter(
		(task) => task.isCompleted === true
	).length;

	const numOfRamaingTask = numOfTotalTasks - numOfCompletedTasks;

	totalTasks.textContent = numOfTotalTasks;
	remainingTasks.textContent = numOfRamaingTask;
	completedTasks.textContent = numOfCompletedTasks;
}

function changeTasksState(taskId, state) {
	const task = tasks.find((task) => task.id === taskId);
	task.isCompleted = state;
	calcStats();
	saveTasksTolocalStorage();
}

function createTask(taskInfo) {
	const { id, name, isCompleted } = taskInfo;

	const taskItem = document.createElement('li');
	taskItem.className =
		'task-list__item shadow border border-2 border-secondary rounded py-2 px-3 d-flex align-items-center gap-3 display-6';
	taskItem.setAttribute('id', id);

	const taskCheckInput = document.createElement('input');
	taskCheckInput.setAttribute('type', 'checkbox');
	taskCheckInput.setAttribute('id', `c${id}`);
	taskCheckInput.checked = isCompleted;

	taskCheckInput.addEventListener('change', () => {
		console.log('is checked', taskCheckInput.checked);
		const isChecked = taskCheckInput.checked;
		changeTasksState(id, isChecked);
	});

	const taskLabel = document.createElement('label');
	taskLabel.setAttribute('for', `c${id}`);
	taskLabel.className = 'task-label flex-grow-1 d-block p-1 rounded';
	taskLabel.textContent = name;
	// console.log(taskLabel);

	const clearTaskBtn = document.createElement('btn');
	clearTaskBtn.className = 'btn btn btn-danger';
	clearTaskBtn.innerHTML = 'Delete &times;';
	// console.log(clearTaskBtn);

	clearTaskBtn.addEventListener('click', function () {
		console.log(clearTaskBtn.parentElement);
		const item = clearTaskBtn.closest('.task-list__item');
		item.remove();
		removeTask(id);
	});

	taskItem.appendChild(taskCheckInput);
	taskItem.appendChild(taskLabel);
	taskItem.appendChild(clearTaskBtn);

	// console.log(taskItem);
	tasksList.appendChild(taskItem);

	// console.log(clearTaskBtn.closest('.task-list__item'));
	// console.log(tasksList.querySelector('.task-list__item'));
}

function clearTasks() {
	tasksList.innerHTML = '';
	tasks.length = 0;
	clearTasksBtn.classList.add('d-none');
	calcStats();
	saveTasksTolocalStorage();
}

function removeTask(id) {
	const taskIndex = tasks.findIndex((task) => task.id === id);
	tasks.splice(taskIndex, 1);

	if (tasks.length === 0) {
		clearTasksBtn.classList.add('d-none');
	}

	calcStats();
	saveTasksTolocalStorage();
}

clearTasksBtn.addEventListener('click', clearTasks);

tasksForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const enteredTaskValue = tasksForm.taskinput.value;

	if (enteredTaskValue === '') {
		window.alert('pleas enter a valid task name');
		return;
	}

	const taskInfo = {
		id: Date.now(),
		name: enteredTaskValue,
		isCompleted: false,
	};

	createTask(taskInfo);
	tasks.push(taskInfo);
	saveTasksTolocalStorage();
	calcStats();

	if (tasks.length === 1) {
		clearTasksBtn.classList.remove('d-none');
	}

	tasksForm.reset();
});

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const enteredSearch = searchForm.searchinput.value.trim();

	const listItems = window.document.querySelectorAll('.task-list__item');

	if (enteredSearch === '') {
		window.alert('pleas enter a valid task name');

		listItems.forEach((item) => item.classList.remove('d-none'));

		return;
	}

	// const filteredTasks = tasks.filter((task) => task.name.includes('task1'));
	// const filteredTasksIDs = filteredTasks.map((task) => task.id);

	const filteredTasksIDs = tasks
		.filter((task) => task.name.includes(enteredSearch))
		.map((task) => task.id);

	console.table(filteredTasksIDs);

	listItems.forEach((item) => {
		if (filteredTasksIDs.includes(Number(item.id))) {
			item.classList.remove('d-none');
		} else {
			item.classList.add('d-none');
		}
	});

	console.log(enteredSearch);
	searchForm.reset();
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
