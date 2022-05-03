// ________ elements from html ________
const btn = document.getElementById("submit-btn");
const btnClose = document.getElementById("btn-close");
const overlay = document.getElementById("overlay");

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