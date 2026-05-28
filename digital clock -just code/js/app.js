// seletors
let dayOutput = document.getElementById('day');
let monthOutput = document.getElementById('month');
let dauNumOutput = document.getElementById('daynum');
let yearOutput = document.getElementById('year');
let hourOutput = document.getElementById('hour');
let minOutput = document.getElementById('min');
let secOutput = document.getElementById('sec');
let ampmOutput = document.getElementById('ampm');

// new 
let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let daynum = date.getDate()
let year = date.getFullYear()

// date
switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
dayOutput.innerHTML = day

switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
}
monthOutput.innerHTML = month
dauNumOutput.innerHTML = daynum < 10 ? "0" +daynum : daynum;
yearOutput.innerHTML = year

// clock
function clock(){
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    amPm = 'AM'
    if(hours == 0){
        hours = 12
    }
    if(hours > 12){
        hours = hours - 12
        amPm = 'PM'
    }
    if (hours < 10 ) hours = '0' + hours
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    hourOutput.innerHTML = `${hours}`
    minOutput.innerHTML = `${min}`
    secOutput.innerHTML = `${sec}`
    setTimeout(() => {
        clock()
    }, 1000);

}
clock()