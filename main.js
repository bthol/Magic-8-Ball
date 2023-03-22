//image sources
const answers = [
    "./assets/magic8ball_4.png",
    "./assets/magic8ball_5.png",
    "./assets/magic8ball_6.png",
    "./assets/magic8ball_7.png",
    "./assets/magic8ball_8.png",
    "./assets/magic8ball_9.png",
    "./assets/magic8ball_10.png",
    "./assets/magic8ball_11.png",
    "./assets/magic8ball_12.png",
    "./assets/magic8ball_13.png",
    "./assets/magic8ball_14.png",
    "./assets/magic8ball_15.png",
    "./assets/magic8ball_16.png",
    "./assets/magic8ball_17.png",
    "./assets/magic8ball_18.png",
    "./assets/magic8ball_19.png",
    "./assets/magic8ball_20.png",
];

//image select
const img = document.querySelector(`#eight-ball`);

let timeout1;
let timeout2;
//shake function
function shake() {
    img.classList.add(`shake`);
    timeout1 = setTimeout(function () {
        img.classList.remove(`shake`);
        img.src = `${answers[Math.floor(Math.random() * answers.length)]}`;
    }, 1000)
};

//shake by click on image
img.addEventListener("click", handleBall);
img.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        shake();
    }
});

function handleBall() {
    img.classList.remove("tipsy");
    titleText.classList.remove("color-one");
    titleText.classList.remove("color-two");
    img.classList.remove("ball-color-one");
    img.classList.remove("ball-color-two");
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    shake();
    tipsy();
}

//Breathing text logic
const titleText = document.querySelector(`.title-text`);
let toggle = true;
setInterval(function() {
    toggle = !toggle;
    if (toggle === true) {
        titleText.classList.remove("color-one");
        titleText.classList.add("color-two");
        img.classList.remove("ball-color-one");
        img.classList.add("ball-color-two");
    } else {
        titleText.classList.remove("color-two");
        titleText.classList.add("color-one");
        img.classList.remove("ball-color-two");
        img.classList.add("ball-color-one");
    }
}, 6400);

function tipsy() {
    timeout2 = setTimeout(function() {
        img.classList.add("tipsy");
    }, 4350)
}
tipsy();