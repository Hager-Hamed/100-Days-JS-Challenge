let btn = document.getElementById("btn"),
  inp = document.getElementById("inp"),
  boxes = document.querySelectorAll(".box"),
  drag = null;

btn.addEventListener("click", () => {
  if (inp.value) {
    boxes[0].innerHTML += ` 
      <p class="item" draggable="true">${inp.value}</p>
    `;
    inp.value = "";
  }
  dragItem();
});

let dragItem = () => {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
      drag = null;
      item.style.opacity = "1";
    });
    boxes.forEach((box) => {
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
};
// https://www.w3schools.com/jsref/event_ondragover.asp
