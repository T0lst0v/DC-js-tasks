const taskInput = document.getElementById("taskInput");
const btnAdd = document.getElementById("btnAdd");
const newTasksCntnr = document.getElementById("newTasks-cntnr");
const oldTasksCntnr = document.getElementById("oldTasks-cntnr");

btnAdd.addEventListener("click", function () {
  if (taskInput.value != 0) {
    let text = taskInput.value;

    const tagLi = document.createElement("li");
    tagLi.setAttribute("class", "task");

    const tagLabel = document.createElement("label");
    tagLabel.setAttribute("class", "textField");
    tagLabel.innerHTML = text;

    const tagBtnDel = document.createElement("button");
    tagBtnDel.setAttribute("class", "delete");
    tagBtnDel.innerHTML = "✕";

    tagBtnDel.addEventListener("click", function () {
      this.parentElement.remove();
    });

    const tagInput = document.createElement("input");
    tagInput.setAttribute("type", "checkbox");

    tagInput.addEventListener("click", function () {
      if (this.checked == true) {
        oldTasksCntnr.appendChild(this.parentElement);
      } else {
        newTasksCntnr.appendChild(this.parentElement);
      }
    });

    tagLi.appendChild(tagInput);
    tagLi.appendChild(tagLabel);
    tagLi.appendChild(tagBtnDel);
    newTasksCntnr.appendChild(tagLi);

    taskInput.value = null;
  }
});
