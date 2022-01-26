const buttonCollection = document.getElementsByClassName("key")
const audioFiles = document.getElementsByTagName("audio")

function perform(e){
    e.target.parentElement.classList.add("playing")
    for (let i = 0; i < audioFiles.length; i++) {
        let audio = audioFiles[i];
        if (audio.dataset.key == e.target.parentElement.dataset.key) {
            audioFiles[i].play()
        }
    }
    e.target.parentElement.classList.remove("playing")
}

for (let i = 0; i < buttonCollection.length; i++) {
    const button = buttonCollection[i];
    button.addEventListener("mousedown", perform)
}



