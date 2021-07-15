import Status from "./status.js";

export default class Crud {
  addToList(event) {
    if (event.key === "Enter") {
      const listUl = document.getElementById("list");
      const toDoLi = document.createElement("li");
      toDoLi.className = "item";
      const checkDiv = document.createElement("div");
      checkDiv.className = "check-div";
      toDoLi.appendChild(checkDiv);
      const checks = document.createElement("input");
      checks.className = "checks";
      checks.type = "checkbox";
      checkDiv.appendChild(checks);
      const descTextArea = document.createElement("input");
      descTextArea.className = "item-description";
      descTextArea.type = "text";
      descTextArea.name = "description";
      descTextArea.value = event.target.value;
      checkDiv.appendChild(descTextArea);
      const dragBtn = document.createElement("button");
      dragBtn.draggable = "true";
      const imgDots = document.createElement("img");
      imgDots.src = "img/three-dots.svg";
      imgDots.alt = "3 dots icon";
      imgDots.width = "15";
      dragBtn.appendChild(imgDots);
      toDoLi.appendChild(dragBtn);
      listUl.appendChild(toDoLi);
      event.target.value = "";
      Status.saveChanges();
    }
  }
}
