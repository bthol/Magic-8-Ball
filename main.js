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

//8 ball display and animation
const img = document.querySelector(`#eight-ball`);
img.addEventListener("click", () => {
    img.classList.add(`shake`);
    setTimeout(function() {
        img.classList.remove(`shake`);
        img.src = `${answers[Math.floor(Math.random() * answers.length)]}`;
    }, 1000)
});

//reset button
document.querySelector(`#btn-reset`).addEventListener("click", () => {
    img.src = "./assets/magic8ball_extra.png";
});

//Breathing text logic
const titleText = document.querySelector(`.title-text`);
let toggle = true;
setInterval(function() {
    toggle = !toggle;
    if (toggle === true) {
        titleText.classList.remove("color-one");
        titleText.classList.add("color-two");
    } else {
        titleText.classList.remove("color-two");
        titleText.classList.add("color-one");
    }
}, 1600);