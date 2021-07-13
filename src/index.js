// import "./style.css";
const list = [
  {
    description: "Wash the dishes",
    completed: false,
    index: 1,
  },
  {
    description: "Complete To Do list project",
    completed: false,
    index: 2,
  },
];

const listUl = document.getElementById("list");

list.forEach((toDo) => {
  const toDoLi = document.createElement("li");
  toDoLi.innerHTML = `
  <li class="item">
          <label><input type="checkbox" />${toDo.description}</label>
          <button><img src="img/three-dots.svg" alt="" width="15" /></button>
        </li>`;
  listUl.appendChild(toDoLi);
});
