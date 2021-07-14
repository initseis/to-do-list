// import './style.css';
import { DragAndSort } from "./drag.js";
import { Status } from "./status.js";

const list = [
  {
    index: 2,
    description: "2 Wash the dishes",
    completed: false,
  },
  {
    index: 1,
    description: "1 Complete To Do list project",
    completed: false,
  },
  {
    index: 4,
    description: "4 Go out the dog",
    completed: false,
  },
  {
    index: 3,
    description: "3 Go to the gym",
    completed: false,
  },
];

document.addEventListener("DOMContentLoaded", DragAndSort.sortList(list));

function loadLiEvents() {
  const liElements = document.querySelectorAll(".item");
  for (let i = 0; i < liElements.length; i++) {
    const drag = new DragAndSort();
    liElements[i].addEventListener("dragstart", drag.dragStart);
    liElements[i].addEventListener("dragover", drag.dragOver);
    liElements[i].addEventListener("drop", drag.drop);
  }
}

document.addEventListener("DOMContentLoaded", loadLiEvents);

function call() {
  console.log("Heyyy");
}

function loadCheckboxes() {
  const checkboxes = document.querySelectorAll(".checks");
  for (let i = 0; i < checkboxes.length; i++) {
    const status = new Status();
    checkboxes[i].addEventListener("change", status.validation);
  }
}

document.addEventListener("DOMContentLoaded", loadCheckboxes);
