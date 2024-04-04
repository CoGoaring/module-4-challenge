const emojiEl = document.querySelector(`.mode-change`);
const root = document.querySelector(':root');
const circle = document.querySelector(`.circle`);

// should be set to light by default
let mode = localStorage.getItem("mode") || "light";

console.log(mode);
const changeModeLight = function() {
    mode = "light";
    localStorage.setItem(`mode`, "light");

    root.style.setProperty(`--backgroundMode`, "#FFFFFF");
    root.style.setProperty(`--textMode`, "#000000");
    root.style.setProperty(`--borderMode`, "#000000");
    if (document.URL.includes("index.html")) {
        circle.style.background = "linear-gradient(rgb(255, 196, 0),  rgb(128, 94, 1))";
    }
}
const changeModeDark = function() {
    mode = "dark";
    localStorage.setItem(`mode`, "dark");

    root.style.setProperty(`--backgroundMode`, "#000000");
    root.style.setProperty(`--textMode`, "#FFFFFF");
    root.style.setProperty(`--borderMode`, "#FFFFFF");
    if (document.URL.includes("index.html")) {
        circle.style.background = "linear-gradient(rgb(9, 104, 33), rgb(75, 179, 5))";
    }
}

// these need to be opposite, once is called on start and one is called on click
const changeMode = function () {
    if (mode === "light") {
        changeModeDark();
    } else {
        changeModeLight();
    }
}
function setMode() {
    if (mode === "dark") {
        changeModeDark();
    } else {
        changeModeLight();
    }
}

setMode()

emojiEl.addEventListener(`click`, changeMode);