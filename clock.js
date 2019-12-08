const clockClick = document.querySelector(".js-clock"),
    clockTitle = clockClick.querySelector("h1");

        function getTime() {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const seconds = date.getSeconds();
            clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
        }
        
        function init() {
            getTime();
        }
        
        init();