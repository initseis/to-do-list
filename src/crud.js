import Status from './status.js';
import DragAndSort from './drag.js';

export default class Crud {
  addToList(event) {
    if (event.key === 'Enter') {
      const listUl = document.getElementById('list');
      const toDoLi = document.createElement('li');
      toDoLi.className = 'item';
      const drag = new DragAndSort();
      toDoLi.addEventListener('dragstart', drag.dragStart);
      toDoLi.addEventListener('dragover', drag.dragOver);
      toDoLi.addEventListener('drop', drag.drop);
      const checkDiv = document.createElement('div');
      checkDiv.className = 'check-div';
      toDoLi.appendChild(checkDiv);
      const checks = document.createElement('input');
      checks.className = 'checks';
      checks.type = 'checkbox';
      const status = new Status();
      checks.addEventListener('change', status.validation);
      checkDiv.appendChild(checks);
      const descTextArea = document.createElement('input');
      descTextArea.className = 'item-description';
      descTextArea.type = 'text';
      descTextArea.name = 'description';
      descTextArea.value = event.target.value;
      const crud = new Crud();
      descTextArea.addEventListener('input', crud.updateTask);
      descTextArea.addEventListener('focusin', crud.showTrashAndRemove);
      descTextArea.addEventListener('focusout', crud.showDots);
      checkDiv.appendChild(descTextArea);
      const dragBtn = document.createElement('button');
      dragBtn.draggable = 'true';
      const imgDots = document.createElement('img');
      imgDots.src = 'img/three-dots.svg';
      imgDots.alt = '3 dots icon';
      imgDots.width = '15';
      dragBtn.appendChild(imgDots);
      toDoLi.appendChild(dragBtn);
      listUl.appendChild(toDoLi);
      event.target.value = '';
      Status.saveChanges();
    }
  }

  updateTask() {
    this.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        if (this.value === '') {
          this.parentNode.parentNode.remove();
          Status.saveChanges();
        }
      }
    });
    Status.saveChanges();
  }

  showTrashAndRemove() {
    this.parentNode.nextSibling.firstChild.src = './img/trash.svg';
    this.parentNode.nextSibling.style.cursor = 'pointer';
    this.parentNode.parentNode.style['background-color'] = '#fffdca';
    this.parentNode.nextSibling.addEventListener('click', () => {
      this.parentNode.parentNode.remove();
      Status.saveChanges();
    });
  }

  showDots() {
    this.parentNode.nextSibling.firstChild.src = './img/three-dots.svg';
    this.parentNode.parentNode.style['background-color'] = '#fff';
    this.parentNode.nextSibling.style.cursor = 'move';
  }

  clearCompleted() {
    const liList = document.querySelectorAll('.item');
    for (let i = 0; i < liList.length; i += 1) {
      if (liList[i].firstChild.firstChild.checked) {
        liList[i].remove();
      }
    }
    Status.saveChanges();
  }
}
