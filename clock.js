var clockClick = document.querySelector('.js-clock'),
clockTitle =clockClick.querySelector('h1');

function getTime() {
    const date = new date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    clockTitle.innerText = `${hours}:${minutes}`;
}

function init() {
    getTime();
}

init();