console.log("JS connected");

const answers = [
    "signs point to yes",
    "try again later"
];

const textEl = document.querySelector(`#text-element`);
textEl.addEventListener("click", generateAnswer);

const btn1 = document.querySelector(`.button`);
btn1.addEventListener("click", init);

function generateAnswer() {
    textEl.innerText = answers[Math.floor(Math.random() * answers.length)];
};

function init() {
    textEl.innerText = "click me";
};
init();