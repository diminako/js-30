const inbox = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleClick(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        inbox.forEach(check => {
            if (check === this || check === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                check.checked = true
            }
        })
    }
    lastChecked = this;
};

inbox.forEach(check => check.addEventListener('click', handleClick))

