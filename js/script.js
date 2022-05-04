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
    e.preventDefault();

    if(inputName.value.match(/^[a-zA-Z\ ]{3,50}$/i)) {
        inputName.classList.remove('input-red');
        goGreen(inputName);
    } else {
        goRed(inputName);
    }

    if(inputEmail.value.match(/^[a-z0-9\.-_]+\@[a-z0-9\.-_]+\.[a-z]{2,30}$/i)) {
        inputEmail.classList.remove('input-red');
        goGreen(inputEmail);
    } else {
        goRed(inputEmail);
    }

    if(inputMessage.value.match(/^.{6,930}$/i)) {
        inputMessage.classList.remove('input-red');
        goGreen(inputMessage);
    } else {
        goRed(inputMessage);
    }
})