const COORDS = "coords";

function handleGeoSuccess(position) {
    console.log(position);
}

function handleGeoError(){
    console.log("Error")
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

    }
}

function init() {

}

init();