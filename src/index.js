import './style.css';
import DragAndSort from './drag.js';
import Status from './status.js';
import Crud from './crud.js';

const list = [];

function loadLiEvents() {
  const liElements = document.querySelectorAll('.item');
  for (let i = 0; i < liElements.length; i += 1) {
    const drag = new DragAndSort();
    liElements[i].addEventListener('dragstart', drag.dragStart);
    liElements[i].addEventListener('dragover', drag.dragOver);
    liElements[i].addEventListener('drop', drag.drop);
  }
  const itemDesc = document.querySelectorAll('.item-description');
  for (let j = 0; j < liElements.length; j += 1) {
    const crud = new Crud();
    itemDesc[j].addEventListener('input', crud.updateTask); // Update Elements
    itemDesc[j].addEventListener('focusin', crud.showTrashAndRemove); // Remove Elements
    itemDesc[j].addEventListener('focusout', crud.showDots);
  }
}

document.addEventListener('DOMContentLoaded', loadLiEvents);

function loadCheckboxes() {
  const checkboxes = document.querySelectorAll('.checks');
  for (let i = 0; i < checkboxes.length; i += 1) {
    const status = new Status();
    checkboxes[i].addEventListener('change', status.validation);
  }
}

document.addEventListener('DOMContentLoaded', loadCheckboxes);

// LOCAL STORAGE

if (!localStorage.ToDoList) {
  document.addEventListener('DOMContentLoaded', DragAndSort.sortList(list));
} else {
  document.addEventListener(
    'DOMContentLoaded',
    DragAndSort.sortList(JSON.parse(localStorage.getItem('ToDoList'))),
  );
}

// ADD ELEMENTS
const newItem = document.getElementById('add-to-list');
const newCrud = new Crud();
newItem.addEventListener('keypress', newCrud.addToList);
// Remove All
const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', newCrud.clearCompleted);
