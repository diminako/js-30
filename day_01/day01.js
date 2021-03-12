const boom = function(){document.getElementById("01").play()}
const clap = function(){document.getElementById("02").play()}
const hiHat = function(){document.getElementById("03").play()}
const kick = function(){document.getElementById("04").play()}
const openHat = function(){document.getElementById("05").play()}
const ride = function(){document.getElementById("06").play()}
const snare = function(){document.getElementById("07").play()}
const tink = function(){document.getElementById("08").play()}

const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");

const hoverMimic = (x) => {
    x.classList.add("pressed")
    setTimeout(() => {
        x.classList.remove("pressed")
    }, 500)
}

window.addEventListener("keypress", (e) => {
    switch (e.key) {
        case "a":
            hoverMimic(btn0);
            boom();
            break;
        case "s":
            hoverMimic(btn1);
            clap();
            break;
        case "d":
            hoverMimic(btn2)
            hiHat();
            break;
        case "f":
            hoverMimic(btn3)
            kick();
            break;
        case "g":
            hoverMimic(btn4)
            openHat();
            break;
        case "h":
            hoverMimic(btn5)
            ride();
            break;
        case "j":
            hoverMimic(btn6)
            snare();
            break;
        case "k":
            hoverMimic(btn7)
            tink();
            break;
    }
})
