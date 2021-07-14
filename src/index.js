// import './style.css';

const list = [
  {
    index: 2,
    description: "Wash the dishes",
    completed: false,
  },
  {
    index: 1,
    description: "Complete To Do list project",
    completed: false,
  },
];

const listUl = document.getElementById("list");

function loadList() {
  for (let i = 1; i <= list.length; i += 1) {
    for (let j = 0; j < list.length; j += 1) {
      if (list[j].index === i) {
        const toDoLi = document.createElement("li");
        toDoLi.className = "item";
        toDoLi.innerHTML = `
                  <div class="check-div">
                  <input id="input-${list[j].index}" type="checkbox"/><textarea name="description"">${list[j].description}</textarea></div>
                  <button><img src="img/three-dots.svg" alt="" width="15" /></button>`;
        listUl.appendChild(toDoLi);
        listUl.appendChild(document.createElement("hr"));
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", loadList);
