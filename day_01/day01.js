const boom = function(){document.getElementById("01").play()}
const clap = function(){document.getElementById("02").play()}
const hiHat = function(){document.getElementById("03").play()}
const kick = function(){document.getElementById("04").play()}
const openHat = function(){document.getElementById("05").play()}
const ride = function(){document.getElementById("06").play()}
const snare = function(){document.getElementById("07").play()}
const tink = function(){document.getElementById("08").play()}

const key = document.querySelectorAll(".key")

const keyArr = Array.prototype.slice.call(key)

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "a":
            boom();
            break;
        case "s":
            clap();
            break;
        case "d":
            hiHat();
            break;
        case "f":
            kick();
            break;
        case "g":
            openHat();
            break;
        case "h":
            ride();
            break;
        case "j":
            snare();
            break;
        case "k":
            tink();
            break;
    }

})


