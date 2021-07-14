// import './style.css';
import { Drag } from "./drag.js";

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

const listUl = document.getElementById("list");

function loadList() {
  for (let i = 1; i <= list.length; i += 1) {
    for (let j = 0; j < list.length; j += 1) {
      if (list[j].index === i) {
        const toDoLi = document.createElement("li");
        toDoLi.className = `item ${list[j].index}`;
        toDoLi.innerHTML = `
                  <div class="check-div">
                  <input id="input-${list[j].index}" type="checkbox"/><textarea name="description"">${list[j].description}</textarea></div>
                  <button draggable="true" ><img src="img/three-dots.svg" alt="" width="15" /></button>`;
        listUl.appendChild(toDoLi);
        // listUl.appendChild(document.createElement("hr"));
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", loadList);

function loadLiEvents() {
  const liElements = document.querySelectorAll(".item");
  // console.log(liElements);
  for (let i = 0; i < liElements.length; i++) {
    const drag = new Drag();
    liElements[i].addEventListener("dragstart", drag.dragStart);
    liElements[i].addEventListener("dragover", drag.dragOver);
    liElements[i].addEventListener("dragleave", drag.dragLeave);
    liElements[i].addEventListener("drop", drag.drop);
  }
}

document.addEventListener("DOMContentLoaded", loadLiEvents);
