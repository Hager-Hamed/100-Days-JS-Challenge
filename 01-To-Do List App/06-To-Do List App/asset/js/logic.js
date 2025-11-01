"use strict";
let Mood = "create";
let tmp;
let CompletStat = false; 
const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-task");
const wrapperTasks = document.querySelector(".tasks-wrapper");

addBtn.addEventListener("click", () => CreateTask(input.value));
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    CreateTask(input.value);
  }
});
let array4Tasks;
const loadFromLocal = () => {
  if (localStorage.myTasks != null) {
    const def_data = JSON.parse(localStorage.myTasks);
    array4Tasks = def_data;
  } else {
    array4Tasks = [];
  }
};
loadFromLocal();
const CreateTask = (InputValue) => {
  if (input.value !== "") {
    if (Mood === "create") {
      const taskObject = {
        text: InputValue,
        completed: CompletStat, 
      };
      array4Tasks.push(taskObject);
      SaveLocalStorage(array4Tasks);
      ClearInput();
      display_Data();
    } else {
      array4Tasks[tmp].text = InputValue;
      SaveLocalStorage(array4Tasks);
      display_Data();
      ClearInput();
      addBtn.value = "Add Task";
      Mood = "create";
    }
  } else {
    alert("Brother Do not Repeat this ok.");
  }
};
// Display Task Function
const display_Data = () => {
  // Make Task in DOM
  let task = "";
  // Looping On all tasks in array
  for (let i = 0; i < array4Tasks.length; i++) {
    // hadi return i taskclass var a str value if completed stat === true it w'll return str val else retur null 'STR';
    let taskClass = array4Tasks[i].completed ? "completed-task" : "";

    task += `
         <div class="task  between-flex mb-3 ${taskClass}">
                        <div class="task-text">${array4Tasks[i].text}</div>
                        <div class="task-btns text-uppercase">
                            <span onclick = 'update(${i});' class="edit text-success  px-2  py-3 fw-bold " style="font-size: 14px; cursor: pointer;">edit</span>
                            <span  onclick = 'ToggleClass(${i});' class="text-warning px-2 py-3 fw-bold " style="font-size: 14px; cursor: pointer;">${
      array4Tasks[i].completed ? "Unmark" : "Mark"
    }</span>
                            <span onclick = 'deletTask(${i});' class="delet text-danger px-2 py-3 fw-bold " style="font-size: 14px; cursor: pointer;">delete</span>
                        </div>
                    </div>
        
        `;
  }
  // put to Tasks Wrapper
  wrapperTasks.innerHTML = task;
};
// Completed Function > That Just Toggling Value from false to true
const ToggleClass = (index) => {
  // hna ranjarb wahd lblan ndir opposite dyal ha nit  nxof ax raytar :) its working
  array4Tasks[index].completed = !array4Tasks[index].completed;
  // Save again The new array with New Changs
  SaveLocalStorage(array4Tasks);
  // Display The result In The DOM
  display_Data();
};

// upadte Task Function
const update = (i) => {
  // update The array based on index i got
  input.value = array4Tasks[i].text;
  // Change Btn Txt  Why I use addbtn.value = because its input not btn
  addBtn.value = "Edit Task";
  // Change App Mode To Update
  Mood = "update";
  // Focus On Input
  input.focus();
  // helper to globaling this index
  tmp = i;
};

// delet Task Function
const deletTask = (index) => {
  // Remove Task from Array than upadet local array/data
  array4Tasks.splice(index, 1);
  // put new array in local storage
  SaveLocalStorage(array4Tasks);
  // Make it Dynamic
  display_Data();
};
// clear input field
const ClearInput = () => {
  input.value = "";
};
// Save LocalStorage
const SaveLocalStorage = (array) => {
  const data = JSON.stringify(array);
  // set Into Localstrorage
  localStorage.setItem("myTasks", data);
};

//Always Work
display_Data();

// Notes *:
/* 
 - 1- Completed Function
 All Functions was Easy greate project thanks teacher.
-2 edit function 
هنا احتجت انني نخلي لاندكس ديالي لي هوا كاين نداخل في الدالة اكون مرىءي لجميع الدوال
. لدتلك قمت بانشاء متغير وهمي او مساعد .
ووضعته في العلى ليكون مرءي لجميع الدوال
 
 */
