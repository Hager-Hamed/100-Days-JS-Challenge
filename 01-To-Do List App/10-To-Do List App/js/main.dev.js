"use strict";

var btn = document.getElementById("btn"),
    inp = document.getElementById("inp"),
    boxes = document.querySelectorAll(".box"),
    drag = null;
btn.addEventListener("click", function () {
  if (inp.value) {
    boxes[0].innerHTML += " \n      <p class=\"item\" draggable=\"true\">".concat(inp.value, "</p>\n    ");
    inp.value = "";
  }

  dragItem();
});

var dragItem = function dragItem() {
  var items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach(function (box) {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.cssText = "background: #090; color: #fff;";
      });
      box.addEventListener("dragleave", function () {
        this.style.cssText = "background: #fff; color: #000;";
      });
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.cssText = "background: #fff; color: #000;";
      });
    });
  });
}; // https://www.w3schools.com/jsref/event_ondragover.asp