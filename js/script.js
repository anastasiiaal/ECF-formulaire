// ________ elements from html ________
const submitForm = document.getElementById("form"),
    btn = document.getElementById("submit-btn"),
    btnClose = document.getElementById("btn-close"),
    overlay = document.getElementById("overlay");

const inputName = document.getElementById('name'),
    inputEmail = document.getElementById('email'),
    inputMessage = document.getElementById('message');

const errorName = document.getElementById('error-name'),
    errorEmail = document.getElementById('error-email'),
    errorMessage = document.getElementById('error-message');

// ________ functions to animate inputs ________
function goGreen(i) {
    i.classList.remove('input-red');
    i.classList.add('input-green');
}

function goRed(i) {
    i.classList.add('input-red');
}

function removeColor (a,b,c) {
    a.classList.remove('input-green');
    b.classList.remove('input-green');
    c.classList.remove('input-green');
}

// ________ overlay event listeners ________
btnClose.addEventListener('click', () => {
    overlay.classList.add("dnone");
})

overlay.addEventListener('click', () => {
    overlay.classList.add("dnone");
})

// ________ btn event listener ________
btn.addEventListener('click', () => {
    if (inputName.value == "") {
        goRed(inputName);
        errorName.classList.remove('dnone');
        errorName.innerHTML = "This field is required";
    }
    if (inputEmail.value == "") {
        goRed(inputEmail);
        errorEmail.classList.remove('dnone');
        errorEmail.innerHTML = "This field is required";
    }
    if (inputMessage.value == "") {
        goRed(inputMessage);
        errorMessage.classList.remove('dnone');
        errorMessage.innerHTML = "This field is required";
    }
})

// ________ REGEX ________
inputName.addEventListener("keyup", () => {
    if (inputName.value.match(/^[a-zA-ZÜ-ü-' ]{3,25}$/i)) {
        goGreen(inputName);
        errorName.classList.add('dnone');
    } else {
        goRed(inputName);
        errorName.classList.remove('dnone');

        if (inputName.value.length < 3) {
            errorName.innerHTML = "Your name should be at least 3 letters long";
        } else if (inputName.value.length > 25) {
            errorName.innerHTML = "Should contain less than 25 symbols";
        } else {
            errorName.innerHTML = "Should only contain letters";
        }
    }
});

inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/i)) {
        goGreen(inputEmail);
        errorEmail.classList.add('dnone');
    } else {
        goRed(inputEmail);
        errorEmail.classList.remove('dnone');
        if (inputEmail.value == "") {
            errorEmail.innerHTML = "This field is required";
        } else {
            errorEmail.innerHTML = "Should be of type \"example@email.com\"";
        }
    }
});

inputMessage.addEventListener("keyup", () => {
    if (inputMessage.value.match(/^[a-zA-ZÜ-ü0-9-'",!?;:()+=*/$€£&@. ]{10,200}$/i)) {
        goGreen(inputMessage);
        errorMessage.classList.add('dnone');
    } else {
        goRed(inputMessage);
        errorMessage.classList.remove('dnone');
        if (inputMessage.value == "") {
            errorMessage.innerHTML = "This field is required";
        } else if (inputMessage.value.length < 10) {
            errorMessage.innerHTML = "Give a more detailed description";
        } else if (inputMessage.value.length > 200) {
            errorMessage.innerHTML = "Should contain less than 200 symbols (you have put " + inputMessage.value.length + " symbols)";
        } else {
            errorMessage.innerHTML = "Avoid line breaking and special symbols like # ~ µ _ etc.";
        }
    }
})

// __________ MAIN FUNCTION SUBMIT __________ 
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = new FormData(submitForm);
    fetch("./php/sendmail.php", {
        method: "POST",
        body: form,
    });
    document.dataForm.reset();
    removeColor(inputName, inputEmail, inputMessage);
    overlay.classList.remove('dnone');
});