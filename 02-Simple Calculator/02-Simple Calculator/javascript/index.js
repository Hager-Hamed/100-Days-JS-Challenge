const operationMath = document.getElementById("operation-math");
const operationMathOld = document.getElementById("operation-math-old");
const result = document.getElementById("result");
const keys = document.querySelectorAll(".button > span");
const exit = document.getElementById("close");
const navFixed = document.getElementById("nav-fixed");
const iconsMenu = document.getElementById("icons-menu");
const setting = document.getElementById("setting");
const bodyElement = document.querySelector("body");
const darkTheme = document.getElementById("dark-theme");
const lightTheme = document.getElementById("light-theme");
let theme = "";
keys.forEach((key) => {
  const icon = key.querySelector("i");
  key.onclick = () => {
    if (icon && icon.classList.contains("fa-delete-left")) {
      operationMath.textContent = operationMath.textContent.slice(0, operationMath.textContent.length - 1);
    } else {
    switch (key.textContent) {
      case "Clear":
        operationMath.textContent = "";
        result.textContent = "";
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        operationMath.textContent += key.textContent;
        break;
      case "0":
      case "00":
        if (operationMath.textContent !== '') {
          operationMath.textContent += key.textContent;
        }
        break;
      case ".":
          if(operationMath.textContent.slice(-1) !== '.')
          {operationMath.textContent += key.textContent;}
          // console.log(operationMath.textContent.slice(-1) =='.');
      break;
      case "+":
        if (
          operationMath.textContent !== "" &&
          !"+,-,÷,x".includes(
            operationMath.textContent[operationMath.textContent.length - 1]
          )
        ) {
          operationMath.textContent += key.textContent;
        }
        break;
      case "-":
        if (
          !"+,-,÷,x".includes(
            operationMath.textContent[operationMath.textContent.length - 1]
          )
        ) {
          operationMath.textContent += key.textContent;
        }
        break;
      case "x":
        if (
          operationMath.textContent !== "" &&
          !"+,-,÷,x".includes(
            operationMath.textContent[operationMath.textContent.length - 1]
          )
        ) {
          operationMath.textContent += key.textContent;
        }
        break;
      case "÷":
        if (
          operationMath.textContent !== "" &&
          !"+,-,÷,x".includes(
            operationMath.textContent[operationMath.textContent.length - 1]
          )
        ) {
          operationMath.textContent += key.textContent;
        }
        break;
      case "%":
        if (
          operationMath.textContent !== "" &&
          !"+,-,÷,x".includes(
            operationMath.textContent[operationMath.textContent.length - 1]
          )
        ) {
          operationMath.textContent += key.textContent;
        }
        break;
      case "=":
        const modifiedOperators = operationMath.textContent;
        const finalValue = modifiedOperators
          .replace(/x/g, "*")
          .replace(/÷/g, "/")
          .replace(/%/g, "/100");
        result.textContent = eval(finalValue);
        let prevOperation = result.textContent;
        operationMath.textContent = prevOperation
      default:
        break;
    }
  }
  };
});

exit.addEventListener("click", function () {
  navFixed.classList.replace("display-b", "display-n");
  this.classList.replace("display-b", "display-n");
  this.previousElementSibling.classList.replace("display-n", "display-b");
  iconsMenu.style.cssText = "right: 0;";
});
setting.addEventListener("click", function () {
  navFixed.classList.replace("display-n", "display-b");
  this.nextElementSibling.classList.replace("display-n", "display-b");
  this.classList.replace("display-b", "display-n");
  console.log("nextt", this.nextElementSibling);
  iconsMenu.style.cssText = "right: 0;";
});

darkTheme.addEventListener("click", function () {
  bodyElement.classList.add("dark-theme");
  this.style.cssText = "color : #000000";
  lightTheme.style.cssText = "color : #777";
  theme = "dark";
  localStorage.setItem("themeCalc", JSON.stringify(theme));
  // console.log("theme: " + theme);
});
lightTheme.addEventListener("click", function () {
  bodyElement.classList.remove("dark-theme");
  this.style.cssText = "color : #ffffff";
  darkTheme.style.cssText = "color : #777";
  theme = "light";
  localStorage.setItem("themeCalc", JSON.stringify(theme));
  // console.log("theme: " + theme);
});
const getTheme = JSON.parse(localStorage.getItem("themeCalc"));
// console.log("hh", getTheme);
if (getTheme === "dark") {
  // console.log('dark');
  bodyElement.classList.add("dark-theme");
} else {
  // console.log('light');
  bodyElement.classList.remove("dark-theme");
}