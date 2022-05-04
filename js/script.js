// ________ elements from html ________
const btn = document.getElementById("submit-btn"),
      btnClose = document.getElementById("btn-close"),
      overlay = document.getElementById("overlay");

const inputName = document.getElementById('name'),
      inputEmail = document.getElementById('email'),
      inputMessage = document.getElementById('message');

// ________ functions to animate inputs ________
function goGreen (i) {
    i.classList.add('input-green');
}

function goRed (i) {
    i.classList.add('input-red');
}

// ________ event listeners ________
btnClose.addEventListener('click', () => {
    overlay.classList.add("dnone");
})

overlay.addEventListener('click', () => {
    overlay.classList.add("dnone");
})

// ________ REGEX ________
btn.addEventListener('click', (e) => {

    if(inputName.value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
        inputName.classList.remove('input-red');
        goGreen(inputName);
    } else {
        goRed(inputName);
        e.preventDefault();
    }

    if(inputEmail.value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i)) {
        inputEmail.classList.remove('input-red');
        goGreen(inputEmail);
    } else {
        goRed(inputEmail);
        e.preventDefault();
    }

    if(inputMessage.value.match(/^.{6,930}$/i)) {
        inputMessage.classList.remove('input-red');
        goGreen(inputMessage);
    } else {
        goRed(inputMessage);
        e.preventDefault();
    }

    if(inputName.classList.contains('input-green') && inputEmail.classList.contains('input-green') && inputMessage.classList.contains('input-green')) {
        overlay.classList.remove('dnone');

        // setTimeout(function() {
        // overlay.classList.remove('dnone');
        // }, 2000);
    }
})