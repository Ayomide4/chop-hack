//TODO:
// make sure website is desktop only
// make success and failure toasts
// make progess/timer bar at the bottom
// add react to project to manage state
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];

const progressBar = document.querySelector(".progress-bar");
const randomLetters = generateRandomLettersArray(15);
const text = document.querySelector(".text-container");
const textbox = document.querySelector(".text-box");

// setInterval(() => {
//   const computedStyle = getComputedStyle(progressBar);
//   const width = parseFloat(computedStyle.getPropertyValue("--width")) || 100;
//   progressBar.style.setProperty("--width", width - 0.1);
// }, 5);

let fail = false;
let timer = setInterval(() => {
  const computedStyle = getComputedStyle(progressBar);
  const width = parseFloat(computedStyle.getPropertyValue("--width")) || 100;

  if (width <= 0.5) {
    alert("You lost");
    window.location.reload();
  } else if (!fail) {
    progressBar.style.setProperty("--width", width - 0.25);
  }
}, 15.625);

function generateRandomLettersArray(length) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLettersArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters.charAt(randomIndex);
    randomLettersArray.push(randomLetter);
  }

  return randomLettersArray;
}

randomLetters.forEach((letter) => {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = letter;
  text.appendChild(span);
});

textbox.addEventListener("blur", () => {
  setTimeout(() => {
    textbox.focus();
  }, 0);
});

//get lenght of input and check last index to current index of childnodes
//TODO: change text.childNOdes to randomLetters
console.log(textbox.value);
textbox.addEventListener("input", () => {
  let current = textbox.value.length - 1;
  if (current > -1) {
    if (
      textbox.value[current].toUpperCase() ===
      text.childNodes[current].innerText
    ) {
      text.childNodes[current].classList.add("correct");
      text.childNodes[current].classList.remove("incorrect");
      console.log(textbox.value);
      if (randomLetters.join("") === textbox.value.toUpperCase()) {
        alert("You won");
        window.location.reload();
      }
    } else {
      text.childNodes[current].classList.add("incorrect");
      text.childNodes[current].classList.remove("correct");
      fail = true;
      setTimeout(() => {
        alert("You lost");
      }, 0);
    }
  }
  // console.log(text.childNodes[0].innerText);
});
