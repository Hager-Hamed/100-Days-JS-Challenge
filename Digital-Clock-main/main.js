let hoursSpan = document.querySelector("#hours");
let minutesSpan = document.querySelector("#minutes");
let secondsSpan = document.querySelector("#seconds");
let formatspan = document.querySelector("#format");
function clockStart() {
  setTimeout(() => {
    let currentDate = new Date();
    let seconds = currentDate.getSeconds();
    let minutes = currentDate.getMinutes();
    let hours = currentDate.getHours();
    let format = hours >= 12 ? "PM" : "AM";
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours % 12;
    hours = hours ? hours : 12;
    hoursSpan.innerText = hours;
    minutesSpan.innerText = minutes;
    secondsSpan.innerText = seconds;
    formatspan.innerText = format;
    clockStart();
  }, 1000);
}
clockStart();
