const weather  = document.querySelector(".js-weather");

const COORDS = "coords";
const API_KEY ="6793aedcfa48bef135051be4415dce00";

function getWeather (lat, lng) {
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response){
    return response.json();
})
.then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature} @ ${place}`;
});   
}

function saveCoords (coordObj) {
localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude:latitude,
        longitude:longitude
    }
    saveCoords(coordObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords() {
navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)    
}

function loadCoords () {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else {  
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}

function init() {
    loadCoords();
}

init();