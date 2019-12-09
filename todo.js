const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoUl = document.querySelector(".js-toDoUl");

const enterList = "list";

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoUl.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function writeList() {
    const list = localStorage.getItem(enterList);
    if (list !== null) {        
    }
}

function init() {
writeList();
toDoForm.addEventListener("submit", handleSubmit);
}

init();