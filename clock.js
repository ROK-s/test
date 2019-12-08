const clockClick = document.querySelector(".js-clock"),
    clockTitle = clockClick.querySelector("h1");

        function getTime() {
            const date = new Date();
            const minutes = date.getMinutes();
            const hours = date.getHours();
            const seconds = date.getSeconds();
            clockTitle.innerText = `${hours < 10 ? `0${seconds}` : seconds}:
                                    ${minutes < 10 ? `0${seconds}` : seconds}:
                                    ${seconds < 10 ? `0${seconds}` : seconds}`;
        }
        
        function init() {
            getTime();
            setInterval(getTime, 1000);
        }
        
        init();