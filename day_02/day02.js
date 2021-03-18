const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function secSet(x) {
    const seconds = x.getSeconds();
    if (seconds == 0) {
        secondHand.style.transition = "none";
    }
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

function minSet(x) {
    const minutes = x.getMinutes();
    if (minutes == 0) {
        minHand.style.transition = "none";
    }
    const minDegrees = ((minutes/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`
}

function hourSet(x) {
    const hours = x.getHours();
    if (hours == 12) {
        hourHand.style.transition = "none";
    }
    const hourDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

const setDate = () => {
    const now = new Date();

    secSet(now);
    minSet(now);
    hourSet(now);
}

setInterval(setDate, 1000);