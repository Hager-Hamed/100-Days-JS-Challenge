let hand_hour = document.querySelector("#hand_hour");
let hand_minute = document.querySelector("#hand_minute");
let hand_second = document.querySelector("#hand_second");
function clock_analog_start() {
  setTimeout(() => {
    let current = new Date();
    let seconds = current.getSeconds() / 60;
    let minutes = (seconds + current.getMinutes()) / 60;
    let hours = (minutes + current.getHours()) / 12;
    hand_hour.style.setProperty("--rotate", hours * 360);
    hand_minute.style.setProperty("--rotate", minutes * 360);
    hand_second.style.setProperty("--rotate", seconds * 360);
    clock_analog_start();
  }, 1000);
}
clock_analog_start();
