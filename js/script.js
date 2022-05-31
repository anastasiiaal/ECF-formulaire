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

    if(inputName.value.match(/^[a-zA-ZÜ-ü-' ]{3,25}$/i)) {
        goGreen(inputName);
        errorName.classList.add('dnone');
    } else {
        goRed(inputName);
        errorName.classList.remove('dnone');
        e.preventDefault();
        if (inputName.value == "") {
            errorName.innerHTML = "This field is required";
        } else if (inputName.value.length < 3) {
            errorName.innerHTML = "Your name should be at least 3 letters longer";
        } else if(inputName.value.length > 25) {
            errorName.innerHTML = "Should contain less than 25 symbols";
        } else {
            errorName.innerHTML = "Should only contain letters";
        }
    }

    if(inputEmail.value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i)) {
        goGreen(inputEmail);
        errorEmail.classList.add('dnone');
    } else {
        goRed(inputEmail);
        errorEmail.classList.remove('dnone');
        e.preventDefault();
        if(inputEmail.value == "") {
            errorEmail.innerHTML = "This field is required";
        } else {
            errorEmail.innerHTML = "Should be of type \"example@email.com\"";
        }
    }

    if(inputMessage.value.match(/^[a-zA-ZÜ-ü-'",!?;:()+=*/$€£&@. ]{10,200}$/i)) {
        goGreen(inputMessage);
        errorMessage.classList.add('dnone');
    } else {
        goRed(inputMessage);
        errorMessage.classList.remove('dnone');
        e.preventDefault();
        if(inputMessage.value == "") {
            errorMessage.innerHTML = "This field is required";
        } else if(inputMessage.value.length < 10) {
            errorMessage.innerHTML = "Give a more detailed description";
        } else if(inputMessage.value.length > 200) {
            errorMessage.innerHTML = "Should contain less than 200 symbols (you have put " + inputMessage.value.length + " symbols)";
        } else {
            errorMessage.innerHTML = "Avoid special symbols like # ~ µ _ etc.";
        }
    }

    if(inputName.classList.contains('input-green') && inputEmail.classList.contains('input-green') && inputMessage.classList.contains('input-green')) {
        overlay.classList.remove('dnone');
    }
})