//Choose a random color to change the background color
const button = document.querySelector("button");
const heading = document.querySelector("h1");
const body = document.querySelector("body");
const colorName = document.querySelector("#color-name");
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "blue",
  "purple",
  "pink",
  "white",
  "gray",
  "brown",
];

body.style.backgroundColor = "";
button.addEventListener("click", changeBackground);
colorName.innerHTML = "white".toUpperCase();

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
  colorName.innerHTML = colors[colorIndex].toUpperCase();
}
