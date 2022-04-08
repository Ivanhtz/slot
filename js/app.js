// HTML
const buttonStart = document.querySelector(".button");

let credit = 10;

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

const figure1 = document.querySelector(".figure1");
const figure2 = document.querySelector(".figure2");
const figure3 = document.querySelector(".figure3");

const buttonBottomLeft = document.querySelector(".bottom1");
const buttonBottomCenter = document.querySelector(".bottom2");
const buttonBottomRight = document.querySelector(".bottom3");

const coin = document.querySelector(".coin");

// Functions
const credits = (credit) => {
  if (credit <= 0) {
    buttonStart.disabled = true;
    buttonStart.classList.replace("button", "buttonD");
  }
  if (credit <= 0) {
    buttonBottomLeft.disabled = true;
    buttonBottomLeft.classList.replace("bottom", "bottomD");
  }
  if (credit <= 0) {
    buttonBottomCenter.disabled = true;
    buttonBottomCenter.classList.replace("bottom", "bottomD");
  }
  if (credit <= 0) {
    buttonBottomRight.disabled = true;
    buttonBottomRight.classList.replace("bottom", "bottomD");
  }
};

// Events
buttonStart.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomLeft.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomCenter.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomRight.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

console.log();
