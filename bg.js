const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imageNum) {
    const image = new Image();
    image.src = `image1/${imageNum + 1}.jpg`;    
    image.classList.add("bgImage");
    body.appendChild(image);
}

function bgRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = bgRandom() ;
paintImage(randomNumber);
}

init();