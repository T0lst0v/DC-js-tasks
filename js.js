let taskInput = document.getElementById("taskInput");
let btnAdd = document.getElementById("btnAdd");
let newTasksCntnr = document.getElementById("newTasks-cntnr");
let oldTasksCntnr = document.getElementById("oldTasks-cntnr");
// let delItem = document.getElementsByClassName("delete");
// let delItem = document.querySelector(".delete");
// let checkTasks = document.querySelector(".checkbox");

let onTasks = [];
let offTasks = [];
// let userList = document.getElementById("userList");

btnAdd.addEventListener("click", function () {
  if (taskInput.value != 0) {
    let task = taskInput.value;

    let tagDiv = document.createElement("div");
    tagDiv.setAttribute("class", "task");

    let tagA = document.createElement("a");
    tagA.setAttribute("href", "#");
    tagA.setAttribute("class", "delete");

    let tagInput = document.createDocumentFragment();
    tagInput.innerHTML = "<input type='checkbox' class='checkbox' />";

    let tagLabel = document.createElement("label");
    tagLabel.setAttribute("class", "textField");

    tagDiv.innerHTML = tagInput.innerHTML;
    tagLabel.innerHTML = task;
    tagA.innerHTML = "✕";

    tagDiv.appendChild(tagLabel);
    tagDiv.appendChild(tagA);
    newTasksCntnr.appendChild(tagDiv);

    onTasks.push(task);

    taskInput.value = null;

    console.log(onTasks);
  }
});

// delItem.addEventListener("click", () => {
//   console.log("DELETE");
// });

document.body.addEventListener("click", delItemFn);

function delItemFn(e) {
  if (e.target.className === "delete") {
    e.target.parentElement.remove();
  }
  //   console.log(e.target);
}

document.body.addEventListener("click", moveTask);

function moveTask(e) {
  if (e.target.className === "checkbox" && e.target.parentElement.parentElement.id === "newTasks-cntnr") {
    oldTasksCntnr.appendChild(e.target.parentElement);
    console.log("move");
  } else if (e.target.className === "checkbox" && e.target.parentElement.parentElement.id === "oldTasks-cntnr") {
    newTasksCntnr.appendChild(e.target.parentElement);
    console.log("move back");
  }

  // e.target.parentElement();
  //   if (e.parentElement.parentElement.className === "newTasks-cntnr") {
  //       console.log("move");
  // }
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement.id);
}
