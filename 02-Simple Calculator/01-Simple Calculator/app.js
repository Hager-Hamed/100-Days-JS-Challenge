let inputText = document.getElementById("inputText");
let btnNum = document.querySelectorAll(".btn");
let btnOperation = document.querySelectorAll(".btn-op");
btnNum.forEach(
  (ele) =>
    (ele.onclick = function () {
      insert(+this.dataset.info);
    })
);
btnOperation.forEach(
  (ele) =>
    (ele.onclick = function () {
      inputText.value != "" ? insert(this.dataset.op) : false;
    })
);
function insert(num) {
  let myString = inputText.value;
  let lastChar = myString[myString.length - 1];
  if (myString.length < 30) {
    !isNaN(lastChar) || lastChar == null || !isNaN(num)
      ? (inputText.value += num)
      : num != lastChar
      ? (inputText.value = myString.replace(lastChar, num))
      : false;
  }
}
function equal() {
  let sum = inputText.value;
  sum ? (inputText.value = eval(sum)) : false;
}
function clean() {
  inputText.value = "";
}
function back() {
  let _b = inputText.value;
  inputText.value = _b.substring(0, _b.length - 1);
}
