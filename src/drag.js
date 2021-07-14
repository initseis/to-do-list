var dragging = null;
var targing = null;

export class Drag {
  dragStart(event) {
    var target = Drag.getLI(event.target);
    dragging = target;
    console.log("Start " + dragging.className);
    event.dataTransfer.setData("text/plain", null);
    event.dataTransfer.setDragImage(dragging, 0, 0);
  }

  dragOver(event) {
    event.preventDefault();
    var target = Drag.getLI(event.target);
    // console.log(dragging);
    console.log("Over " + target.className);
    dragging.style.display = "none";
    var bounding = target.getBoundingClientRect();
    // var offset = bounding.y + bounding.height / 2;
    var offset = bounding.y + 46 - event.clientY;
    // console.log(
    //   "y: " +
    //     bounding.y +
    //     " height: " +
    //     bounding.height +
    //     " client-y: " +
    //     event.clientY +
    //     " op: " +
    //     offset
    // );
    if (offset <= bounding.height / 2) {
      target.style["border-bottom"] = "1px solid #000";
      target.style["border-top"] = "";
      // console.log(
      //   target.className + "Next sibling: " + target.nextSibling.className
      // );
      targing = target.nextSibling;
    } else {
      target.style["border-top"] = "1px solid #000";
      target.style["border-bottom"] = "";
      // console.log(
      //   target.className +
      //     "Previous sibling: " +
      //     target.previousSibling.className
      // );
      targing = target.previousSibling;
    }
    console.log(targing);
  }

  drop(event) {
    event.preventDefault();
    var target = Drag.getLI(event.target);
    dragging.style.display = "flex";
    // console.log(dragging);
    console.log("Drop " + target.className);
    // if (target.style["border-bottom"] !== "") {
    //   target.style["border-bottom"] = "";
    //   target.parentNode.insertBefore(dragging, event.target.nextSibling);
    // } else {
    //   target.style["border-top"] = "";
    //   target.parentNode.insertBefore(dragging, event.target.nextSibling);
    // }
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
}
