
function makeFullscreen() {
    let elem = document.documentElement;
    if (!document.fullscreenElement) {
        elem.requestFullscreen()
    } 
    else {
            document.exitFullscreen()
    }
}
window.addEventListener('keydown', function(main) {
    playSound(main.code)

});

function playSound(keyId) {
    const audio = document.querySelector(`audio[data-code="${keyId}"]`)
    const key = document.querySelector(`.piano-key[data-code="${keyId}"]`)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active')
}

function removeTransition(main) {
    if (main.propertyName !== 'transform')
        return;
    this.classList.remove('piano-key-active');

}

const piano = document.querySelectorAll('.piano-key');
piano.forEach(key => key.addEventListener('transitionend', removeTransition));

const keyDivs = document.getElementsByClassName("piano-key");

const PushClick = function(main) {
    const keyId = this.getAttribute("data-code");
    playSound(keyId);
};

for (let i = 0; i < keyDivs.length; i++) {
    keyDivs[i].addEventListener('mousedown', PushClick);
}


function switchCode() {
    if (!event.target.classList.contains('btn-active')) {
        document.querySelectorAll('.btn').forEach(book => book.classList.toggle("btn-active"))
        piano.forEach(main => main.classList.toggle("piano-key-letter"))
    }
}
document.querySelectorAll(".btn-container").forEach(btn => btn.addEventListener("click", function() {
    switchCode(this);
}));
