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



const text = document.querySelector(".text");

letters.forEach((letter) => {
  const span = document.createElement("span");
  span.classList.add('letter')
  console.log(span.classList)
  span.textContent = letter;
  text.appendChild(span);
});
