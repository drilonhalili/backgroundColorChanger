//Choose a random color to change the background color
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["blue", "yellow", "pink"];

body.style.backgroundColor = "red";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}
