// ________ elements from html ________
const btn = document.getElementById("submit-btn"),
      btnClose = document.getElementById("btn-close"),
      overlay = document.getElementById("overlay");

const inputName = document.getElementById('name'),
      inputEmail = document.getElementById('email'),
      inputMessage = document.getElementById('message');

const errorName = document.getElementById('error-name'),
      errorEmail = document.getElementById('error-email'),
      errorMessage = document.getElementById('error-message');

// ________ functions to animate inputs ________
function goGreen (i) {
    i.classList.remove('input-red');
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
        goGreen(inputName);
        errorName.classList.add('dnone');
    } else {
        goRed(inputName);
        errorName.classList.remove('dnone');
        e.preventDefault();
    }

    if(inputEmail.value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i)) {
        goGreen(inputEmail);
        errorEmail.classList.add('dnone');
    } else {
        goRed(inputEmail);
        errorEmail.classList.remove('dnone');
        e.preventDefault();
    }

    if(inputMessage.value) {        // possible regex (inputMessage.value.match(/^.{6,930}$/i))
        goGreen(inputMessage);
        errorMessage.classList.add('dnone');
    } else {
        goRed(inputMessage);
        errorMessage.classList.remove('dnone');
        e.preventDefault();
    }

    if(inputName.classList.contains('input-green') && inputEmail.classList.contains('input-green') && inputMessage.classList.contains('input-green')) {
        overlay.classList.remove('dnone');
    }
})