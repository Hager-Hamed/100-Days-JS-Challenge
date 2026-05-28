let brightness = document.querySelector("#brightness");
let contrast = document.querySelector("#contrast");
let blurProp = document.querySelector("#blurProp");
let opacity = document.querySelector("#opacity");
let sepia = document.querySelector("#sepia");
let invert = document.querySelector("#invert");
let grayscale = document.querySelector("#grayscale");
let uploadBtn = document.querySelector("#file_input");
let container_img = document.querySelector("#container_img");
let img = document.querySelector("#chose_img");
let allInputs = document.querySelectorAll(".filter_box input[type='range']");
let valueNow = document.querySelectorAll(".filter_box h2");

uploadBtn.addEventListener("change", function () {
  container_img.style.display = "flex";
  let uploadChange = new FileReader();
  uploadChange.readAsDataURL(uploadBtn.files[0]);
  uploadChange.addEventListener("load", function (e) {
    img.setAttribute("src", uploadChange.result);
  });
});

allInputs.forEach((edit) => {
  edit.addEventListener("input", function (e) {
    img.style.filter = `
    brightness(${brightness.value})
    blur(${blurProp.value}px)
    contrast(${contrast.value}%)
    opacity(${opacity.value < 10 ? "." + opacity.value : opacity.value})
    sepia(${sepia.value}%)
    invert(${invert.value}%)
    grayscale(${grayscale.value}%)
    `;
    valueNow.forEach((h2) => {
      h2.innerHTML = edit.value;
    });
  });
});
