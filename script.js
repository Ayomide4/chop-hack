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
  "O"
];

function generateRandomLettersArray(length) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLettersArray = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters.charAt(randomIndex);
    randomLettersArray.push(randomLetter);
  }

  return randomLettersArray;
}

const randomLetters = generateRandomLettersArray(15);


const text = document.querySelector(".text-container");
const textbox = document.querySelector('.text-box');

randomLetters.forEach((letter) => {
  const span = document.createElement("span");
  span.classList.add('letter')
  span.textContent = letter;
  text.appendChild(span);
});

textbox.addEventListener("change", () => {
  console.log('input')
})

