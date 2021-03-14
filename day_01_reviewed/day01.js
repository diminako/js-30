const hoverMimic = (x) => {
    x.classList.add("pressed")
    setTimeout(() => {
        x.classList.remove("pressed")
    }, 500)
}

window.addEventListener("keypress", (e) => {

    console.log(e)

    document.querySelector('audio[data-key-code="'+e.key+'"]').play()
    var buttonPressed = document.querySelector('div[data-key-container="'+e.key+'"]')
    hoverMimic(buttonPressed);

})


// Get all buttons and add sound on click
const keyButtons = document.querySelectorAll('[data-key-btn]');

// add click event listener to buttons

function addSoundToButton(buttons){
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            document.querySelector('audio[data-key-code="'+button.dataset.keyBtn+'"]').play()
        })
    }); 
}

addSoundToButton(keyButtons)