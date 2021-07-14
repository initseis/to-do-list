var dragging = null;
var targing = null;

export class DragAndSort {
  dragStart(event) {
    var target = DragAndSort.getLI(event.target);
    dragging = target;
    console.log("Start " + dragging.className);
    event.dataTransfer.setDragImage(dragging, 0, 0);
  }

  dragOver(event) {
    event.preventDefault();
    var target = DragAndSort.getLI(event.target);
    console.log("Over " + target.className);
    dragging.style.display = "none";
    var bounding = target.getBoundingClientRect();
    var offset = bounding.y + 46 - event.clientY;
    if (offset <= bounding.height / 2) {
      targing = target.nextSibling;
    } else {
      targing = target;
    }
  }

  drop(event) {
    event.preventDefault();
    var target = DragAndSort.getLI(event.target);
    dragging.style.display = "flex";
    console.log("Drop " + target.className);
    target.parentNode.insertBefore(dragging, targing);
  }

  static getLI(target) {
    while (
      target.nodeName.toLowerCase() != "li" &&
      target.nodeName.toLowerCase() != "body"
    ) {
      target = target.parentNode;
    }
    if (target.nodeName.toLowerCase() == "body") {
      return false;
    } else {
      return target;
    }
  }

  static sortList(list) {
    const listUl = document.getElementById("list");
    for (let i = 1; i <= list.length; i += 1) {
      for (let j = 0; j < list.length; j += 1) {
        if (list[j].index === i) {
          const toDoLi = document.createElement("li");
          toDoLi.className = `item ${list[j].index}`;
          toDoLi.innerHTML = `
                  <div class="check-div">
                  <input class="checks" id="input-${list[j].index}" type="checkbox"/><textarea name="description"">${list[j].description}</textarea></div>
                  <button draggable="true" ><img src="img/three-dots.svg" alt="" width="15" /></button>`;
          listUl.appendChild(toDoLi);
        }
      }
    }
  }
}
