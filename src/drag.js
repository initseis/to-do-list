import Status from './status.js';

let dragging = null;
let targing = null;

export default class DragAndSort {
  dragStart(event) {
    const target = DragAndSort.getLI(event.target);
    dragging = target;
    event.dataTransfer.setDragImage(dragging, 0, 0);
  }

  dragOver(event) {
    event.preventDefault();
    const target = DragAndSort.getLI(event.target);
    dragging.style.display = 'none';
    const bounding = target.getBoundingClientRect();
    const offset = bounding.y + 46 - event.clientY;
    if (offset <= bounding.height / 2) {
      targing = target.nextSibling;
    } else {
      targing = target;
    }
  }

  drop(event) {
    event.preventDefault();
    const target = DragAndSort.getLI(event.target);
    dragging.style.display = 'flex';
    target.parentNode.insertBefore(dragging, targing);
    // Save in Local Storage
    Status.saveChanges();
  }

  static getLI(target) {
    while (
      target.nodeName.toLowerCase() !== 'li'
      && target.nodeName.toLowerCase() !== 'body'
    ) {
      target = target.parentNode;
    }
    if (target.nodeName.toLowerCase() === 'body') {
      return false;
    }
    return target;
  }

  static sortList(list) {
    const listUl = document.getElementById('list');
    for (let i = 1; i <= list.length; i += 1) {
      for (let j = 0; j < list.length; j += 1) {
        if (list[j].index === i) {
          const toDoLi = document.createElement('li');
          toDoLi.className = 'item';
          if (list[j].completed) {
            const checkDiv = document.createElement('div');
            checkDiv.className = 'check-div';
            toDoLi.appendChild(checkDiv);
            const checks = document.createElement('input');
            checks.className = 'checks';
            checks.type = 'checkbox';
            checks.checked = 'true';
            checkDiv.appendChild(checks);
            const descTextArea = document.createElement('input');
            descTextArea.className = 'item-description';
            descTextArea.type = 'text';
            descTextArea.name = 'description';
            descTextArea.value = list[j].description;
            descTextArea.style['text-decoration'] = 'line-through';
            descTextArea.style.color = '#909090';
            checkDiv.appendChild(descTextArea);
            const dragBtn = document.createElement('button');
            dragBtn.draggable = 'true';
            const imgDots = document.createElement('img');
            imgDots.src = 'img/three-dots.svg';
            imgDots.alt = '3 dots icon';
            imgDots.width = '15';
            dragBtn.appendChild(imgDots);
            toDoLi.appendChild(dragBtn);
          } else {
            const checkDiv = document.createElement('div');
            checkDiv.className = 'check-div';
            toDoLi.appendChild(checkDiv);
            const checks = document.createElement('input');
            checks.className = 'checks';
            checks.type = 'checkbox';
            checkDiv.appendChild(checks);
            const descTextArea = document.createElement('input');
            descTextArea.className = 'item-description';
            descTextArea.type = 'text';
            descTextArea.name = 'description';
            descTextArea.value = list[j].description;
            checkDiv.appendChild(descTextArea);
            const dragBtn = document.createElement('button');
            dragBtn.draggable = 'true';
            const imgDots = document.createElement('img');
            imgDots.src = 'img/three-dots.svg';
            imgDots.alt = '3 dots icon';
            imgDots.width = '15';
            dragBtn.appendChild(imgDots);
            toDoLi.appendChild(dragBtn);
          }
          listUl.appendChild(toDoLi);
        }
      }
    }
  }
}
