function makeFullscreen() {
    let elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.requestFullscreen()
    } 
    else {
        document.exitFullscreen()
    }
}
window.addEventListener('Cod', function(main) {
    playSound(main.code)

});

function playSound(keyId) {
    const audio = document.querySelector(`audio[data-code="${keyId}"]`)
    const key = document.querySelector(`.piano-key[data-code="${keyId}"]`)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('piano-key-active')
}

function removeTransition(main) {
    if (main.propertyName !== 'transform')
        return
    this.classList.remove('piano-key-active')

}

const piano = document.querySelectorAll('.piano-key')
piano.forEach(key => key.addEventListener('transitionend', removeTransition))

const kC = document.getElementsByClassName("piano-key")

const Push = function(main) {
    const keyId = this.getAttribute("data-code")
    playSound(keyId)
};

for (let i = 0; i < kC.length; i++) {
    kC[i].addEventListener('mousedown', Push)
}


function switchCode() {
    if (!event.target.classList.contains('btn-active')) {
        document.querySelectorAll('.btn').forEach(book => book.classList.toggle("btn-active"))
        piano.forEach(main => main.classList.toggle("piano-key-letter"))
    }
}
document.querySelectorAll(".btn-container").forEach(btn => btn.addEventListener("click", function() {
    switchCode(this)
}));
