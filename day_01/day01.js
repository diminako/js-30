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
            // console.log("a");
            boom();
            break;
        case "s":
            // console.log("s");
            clap();
            break;
        case "d":
            // console.log("d");
            hiHat();
            break;
        case "f":
            // console.log("f");
            kick();
            break;
        case "g":
            // console.log("g");
            openHat();
            break;
        case "h":
            // console.log("h");
            ride();
            break;
        case "j":
            // console.log("j");
            snare();
            break;
        case "k":
            // console.log("k");
            tink();
            break;
    }

})


