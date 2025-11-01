const inputBox = document.getElementById("input-box");
const listcont = document.getElementById("list-container");
// console.log(inputBox);
// console.log(listcont);

// Function 1 To Add 
function addTask() {
    if (inputBox.value === '') {
        alert(" You Must write at least one task :) ");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcont.appendChild(li);
        let myClose = document.createElement("span");
        myClose.innerHTML = "X";
        li.appendChild(myClose);
    }
    inputBox.value ="";
    saveData() 

}
/// Action to move and checked
listcont.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData() 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
},
    false);


//// Save my data to localStorage 
function saveData() {
    localStorage.setItem("MyData", listcont.innerHTML);
}

// Show all My Tasks 
function showTasks() {
     listcont.innerHTML=localStorage.getItem("MyData");
}
showTasks();
    
