const $ = document;
let colorBox = $.getElementsByClassName("color-box");
let inputField = $.querySelector("#input-field");
let btnDelete = $.getElementById("btn-delete");
let btnSave = $.getElementById("btn-save");
let listed = $.getElementById("listed");
for (let i = 0; i < colorBox.length; i++) {
  colorBox[i].addEventListener("click", (event) => {
    let a = event.target.attributes.style.nodeValue;
    inputField.style = a;
  });
}
btnDelete.addEventListener("click", () => {
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
});
function addNote() {
  let newTodoValue = inputField.value;
  let newTodoElemParent = $.createElement("div");
  newTodoElemParent.className = "card shadow-sm rounded";
  let colorElem = inputField.style.backgroundColor;
  newTodoElemParent.style.backgroundColor = colorElem;
  let newTodoElemChild = $.createElement("span");
  newTodoElemChild.className = "card-text p-3";
  newTodoElemChild.innerHTML = newTodoValue;
  newTodoElemParent.append(newTodoElemChild);
  listed.append(newTodoElemParent);
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
}
btnSave.addEventListener("click", addNote);
listed.addEventListener("click", (event) => {
  event.target.parentElement.remove();
  console.log(event.target.parentElement)
});
inputField.addEventListener("keydown", clickEnter);
function clickEnter(event) {
  if (event.keyCode === 13) {
    if (inputField.value) {
      addNote();
    }
  }
}
