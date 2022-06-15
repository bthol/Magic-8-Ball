console.log("JS connected");

const answers = [
    "signs point to yes",
    "try again later"
];

const textEl = document.querySelector(`#text-element`);
textEl.addEventListener("click", generateAnswer);

function generateAnswer() {
    textEl.innerText = answers[Math.floor(Math.random() * answers.length)];
};