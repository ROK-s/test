const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const currentName = "load",
    showingJS = "showing";

function saveName(text) {
    localStorage.setItem(currentName, text);

}

function handleSubmit (event) {
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}

function askYourName () {
    form.classList.add("showing");
    form.addEventListener("submit", handleSubmit);
}

function paintName(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}`;
}

function getName() {
    const load = localStorage.getItem("currentName");
    if (load === null) {
        askYourName();
    }
    else {
        paintName(load);
    }
}
