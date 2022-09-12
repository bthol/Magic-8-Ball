// Set screen dimensions to usable screen
if (navigator.userAgent.indexOf('MSIE') > - 1 || navigator.userAgent.indexOf('Trident') > - 1) {
    // Internet Explorer
    document.querySelector(`.wrapper`).style.height = document.documentElement.clientHeight;
} else {
    // All other browsers
    document.querySelector(`.wrapper`).style.height = window.innerHeight;
};

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

//shake function
function shake() {
    img.classList.add(`shake`);
    setTimeout(function () {
        img.classList.remove(`shake`);
        img.src = `${answers[Math.floor(Math.random() * answers.length)]}`;
    }, 1000)
};

//shake by click on image
img.addEventListener("click", shake);
img.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        shake();
    }
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
        img.classList.remove("ball-color-one");
        img.classList.add("ball-color-two");
    } else {
        titleText.classList.remove("color-two");
        titleText.classList.add("color-one");
        img.classList.remove("ball-color-two");
        img.classList.add("ball-color-one");
    }
}, 6400);