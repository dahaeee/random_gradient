const colors = [
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#0be881",
    "#134f5c",
    "#141415",
    "#34e7e4",
    "#3c40c6",
    "#4bcffa",
    "#485460",
    "#575fcf",
    "#abb1cf",
    "#c27ba0",
    "#c9c9ff",
    "#d2dae2",
    "#d4ffea",
    "#dec2cb",
    "#ef5777",
    "#e6e8ea",
    "#ead1dc",
    "#feffa3",
    "#f53b57",
    "#ffa801",
    "#ffbdbd",
    "#ffc048",
    "#ffc56b",
    "#ffdd59",
    "#ffd4e5",
    "#ff5e57",
    "#ffd32a",
    "#ff3f34"
];

const button = document.querySelector("button");
const code1 = document.querySelector("span:first-child");
const code2 = document.querySelector("span:last-child");

function bgColor() {
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];
    const body = document.querySelector("body");

    body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;

    code1.innerText = firstColor;
    code2.innerText = secondColor;
}

button.addEventListener("click", bgColor);


