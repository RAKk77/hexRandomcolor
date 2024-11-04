const hexCode = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "c",
  "d",
  "e",
  "f",
];
const button = document.querySelector(".btn");
let color = document.querySelector(".hex-color");
const getHex = () => Math.floor(Math.random() * hexCode.length);
function change() {
  let hexsigh = "#";
  for (let i = 0; i < 6; i++) {
    hexsigh += hexCode[getHex()];
  }
  document.body.style.background = hexsigh;
  color.innerText = hexsigh;
}

button.addEventListener("click", change);
