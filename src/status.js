export class Status {
  validation() {
    if (this.checked == true) {
      this.nextSibling.style["text-decoration"] = "line-through";
      this.nextSibling.style.color = "#909090";
    } else {
      this.nextSibling.style["text-decoration"] = "none";
      this.nextSibling.style.color = "#000";
    }
  }
}
